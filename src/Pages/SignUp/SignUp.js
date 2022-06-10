import React, { useEffect, useState } from 'react'
import './SignUp.css';
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import LoginProto from '../Login/images/LoginProto.svg'


export default function SignUp() {

    useEffect(() => {
        if (localStorage.getItem('user_info')) {
            history('/')
        }
    }, [])

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [is_industry, setIs_industry] = useState(false);
    const [phone, setPhone] = useState("");
    const [location, setLocation] = useState("");
    const history = useNavigate();
    // redirect the home page after the registration we are using this useNavigate

    async function signup() {
        let item = { name, password, email, username, is_industry, phone, location }
        let result = await fetch("http://localhost:8000/api/register/", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(item)
        });
        result = await result.json();
        console.warn("result", result)
        localStorage.setItem("user_info", JSON.stringify(result));
        localStorage.clear();
        history("/login")


    }
    return (

        <div className="container-fluid">
            <div className="row justify-content-around">
                <div className="col-md-5 d-none d-md-block" id='img' >
                    <div className="header_absolute">
                        <div className='div1'>Already Have An Account</div>
                        <Link to="/login">
                            <button type="button"className="btn btn-outline-primary btn-lg">Login</button>
                        </Link>
                    </div>
                    <img src={LoginProto} alt="" id='img' className="img-fluid" />
                </div>
                <div className="col-md-6 col-11 mt-5 align-items-center ">
                    <h3 className="div1" id='signup'>Create Your AFL Account</h3>
                    <div className="row mb-3 mt-2">
                        <label for="colFormLabel" className="col-sm-3 col-form-label mt-3">Username</label>
                        <div className="col-sm-8">
                            <input type="username" className="form-control mt-3" id="colFormLabel" placeholder="username"
                                value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <label for="colFormLabel" className="col-sm-3 col-form-label mt-3">Name</label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control mt-3" id="colFormLabel" placeholder="Mario"
                                value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <label for="colFormLabel" className="col-sm-3 col-form-label mt-3">Email</label>
                        <div className="col-sm-8">
                            <input type="email" className="form-control mt-3" id="colFormLabel" placeholder="mario@gmail.com"
                                value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <label for="colFormLabel" className="col-sm-3 col-form-label mt-3">Password</label>
                        <div className="col-sm-8">
                            <input type="Password" className="form-control mt-3" id="colFormLabel" placeholder="*******"
                                value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <label for="colFormLabel" className="col-sm-3 col-form-label mt-3">Phone No.</label>
                        <div className="col-sm-8">
                            <input type="tel" className="form-control mt-3" id="colFormLabel" placeholder="9087676478"
                                value={phone} onChange={(e) => setPhone(e.target.value)} />
                        </div>
                        <label for="colFormLabel" className="col-sm-3 col-form-label mt-3">Location</label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control mt-3" id="colFormLabel" placeholder="3/234 sant nagar"
                                value={location} onChange={(e) => setLocation(e.target.value)} />
                        </div>
                        <label for="colFormLabel" className="col-sm-3 col-form-label mt-3">Industry</label>
                        <div className="col-sm-8">
                            <input className="form-check-input mt-4" type="checkbox" value={is_industry} onChange={(e) => setIs_industry(e.target.checked)} id="flexCheckDefault" />
                        </div>
                        <Button variant="primary" type="button" className='ms-4 mb-3 mt-3 col-sm-10' onClick={signup} >
                            Sign Up
                        </Button>
                        <div className="self" style={{ textAlign: 'center' }}>
                            Already have an account?{" "}
                            <Link to="/login">
                                <u>Login</u>
                            </Link>
                        </div>
                    </div>

                </div>

            </div>
        </div >

    )
}