import React, { useState} from 'react'
import axios from '../../api/axios'
import './Login.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Image from './images/image-overlay.png'
import Afl from './images/AFL.svg'
 


function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [user,setUser] =useState([]);
     const navigate =useNavigate(); 

     const getuser =() =>{
        axios.get("profile")
        .then((response) => {
            const getdata =response.data;
            localStorage.setItem('user', JSON.stringify(response.data))
            setUser(getdata)
            if(response.data.is_industry){
                navigate('/homepagei')
            }
            else{
                navigate('/homepagefarmer')
            }
        }).catch(error=>console.error(error))
    }

    const submit = async e => {
        e.preventDefault();
            axios.post("token/", {
                username,
                password 
            })
            .then((response) => {
                console.log(response.data);   
                axios.defaults.headers['Authorization'] =`Token ${response.data.token}`;              
                if (response.status === 200) {
                    localStorage.setItem("access_token", response.data.token);
                    // function call to fetch data of user
                    getuser();
                }
            })
            .catch((err) => {
                alert("Please enter correct details");
                let message = typeof err.response !== "undefined" ? err.response.data.message : err.message;
                console.warn("error", message);
              });
             
    }


    return (
        <div>
            <div className="login_wrapper">
                <div className="left_content">
                    <div className="header_absolute">
                        <div className='divhead'>Don't have an account?</div>
                        <Link to="/signup">
                        <button  type="button"className="btn btn-outline-primary">Sign Up</button>
                        </Link> 
                    </div>
                    <img src={Image} alt="Farmer & Tractor"/>
                     
                </div>
                <div className="right_content">
                    <div className="signuptext mt-3">Login in to your Account</div>
                    <div className="signin_form">
                        <form>
                            <input type="text" placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)} className='form-control' />
                            <br />
                            <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} className='form-control' />
                            <br />
                            <button  type="button" onClick={submit} className='btn btn-primary'>Login</button>
                        </form>
                    </div>
                    <div className="other_opts">
                    <div className="small_screen_signup">
                        Don’t have an account?{" "}
                        <Link to="/signup/1">
                        <u>Sign Up</u>
                        </Link> 
                    </div>
                        <div className="other_opts_opts">
                            <div className="afl" tabIndex={1} style={{ marginLeft: '40%' }}>
                                <img src={Afl}  alt="AFL Logo"/>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}
export default Login