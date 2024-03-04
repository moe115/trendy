import React, { useState } from 'react';
import './login.css'
import { Link, useNavigate } from "react-router-dom";
import { auth , } from "./firebase";
import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword , signOut} from "firebase/auth";
import { Button , TextField } from '@mui/material';
import logo12 from './images/logo12.png'
function Login() {
    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

       signInWithEmailAndPassword(auth,email, password)
            .then(auth => {
                history('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        
        createUserWithEmailAndPassword(auth,email, password)
            .then((auth) => {
                // it successfully created a new user with email and password
                if (auth) {
                    history ('/')
                    console.log(auth)
                }
            })
            .catch(error => alert(error.message))
    }


    const logout = async () => {
        try {
          await signOut(auth);
        } catch (err) {
          console.error(err);
        }
      };

      
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
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn} className='login__registerButton'>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button onClick={register} className='login__registerButton'>Create your trendybynour Account</button>
                <button  onClick={logout} className='login__registerButton'  > signout</button>
            </div>
        </div>
    )
}
// sx={{marginTop:"10px" , backgroundColor:"#E6A4B4"}} 
export default Login