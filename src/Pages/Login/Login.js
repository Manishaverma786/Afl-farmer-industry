import React, { useState} from 'react'
import axios from '../../api/axios'
import './Login.css'
import { Link } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import LoginProto from './images/LoginProto.svg'
import Afl from './images/AFL.svg'
import { applyMiddleware } from 'redux'


function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [navigate, setNavigate] = useState(false);

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
                }
                else{
                    alert("Please enter correct details");
                }
            })
            .catch((err) => console.error(err));
            setNavigate(true);
    }
    if (navigate) {
        return <Navigate to="/homepagei"/>;
    }

    // useEffect(() => {
    //     const auth = localStorage.getItem('user');
    //     if (auth) {
    //         history("/login")
    //     }
    // }, [])

    // async function login() {
    //     console.warn("data", username, password)
    //     let item = { username, password }
    //     console.warn(item)
    //     let result = await fetch("http://localhost:8000/api/token/", {
    //         method: 'POST',
            
            
    //     });
    //     result = await result.json();
    //     console.warn("result", result)
    //     if (result.id) {
    //         localStorage.setItem('user', JSON.stringify(result));
    //         history("/homepagei")
    //     }
    //     else {
    //         alert("Please enter correct details")
    //     }
    // }


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
                    <img src={LoginProto}></img>
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
                                <img src={Afl}></img>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}
export default Login