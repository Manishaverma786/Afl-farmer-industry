import React, { useState, useEffect } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import LoginProto from './images/LoginProto.svg'
import Afl from './images/AFL.svg'
import axios from '../../api/axios'
import { applyMiddleware } from 'redux'
import { Navigate } from 'react-router-dom'

function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [navigate, setNavigate] = useState(false);

    const submit = async e => {
        e.preventDefault();
        console.log('ubj');
        console.log(username, password);

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
        return <Navigate to="/homepagefarmer"/>;
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