import React, { useState } from 'react';
import './login.css'
import { Link, useNavigate } from "react-router-dom";import PhoneInput from "react-phone-input-2";
import { auth } from "./firebase";import "react-phone-input-2/lib/style.css";
import logo12 from './images/logo12.png'
function Login() {
    const history = useNavigate();

    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithPhoneNumber(phone, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }
    const register = e => {
        e.preventDefault();

        auth
            .createUserWithPhoneAndPassword(phone, password)
            .then((auth) => {
                // it successfully created a new user with email and password
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className="login__logo"
                    src={logo12}
                />
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>phone number</h5> 
                    <PhoneInput country="lb" type='text'  value={phone} onChange={setPhone}/>

                    <h5>Password</h5>
                    <input type='text' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
                </form>

                <p>
                   <h5> welcome to trendybynour, if you don't have an account</h5>
                </p>

                <button onClick={register}  className='login__registerButton'>Create your trendybynour Account</button>
            </div>
        </div>
    )
}

export default Login 