import React, { useState } from 'react';
import './login.css'
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className="login__logo"
                    src='https://i.ibb.co/k0Q7hbx/11.jpg' 
                />
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>phone number</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='text' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' className='login__signInButton'>Sign In</button>
                </form>

                <p>
                    welcome to trendybynour.
                </p>

                <button className='login__registerButton'>Create your trendybynour Account</button>
            </div>
        </div>
    )
}

export default Login 