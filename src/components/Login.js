import React, { useState } from 'react'
import "./Login.css"
import signIn_logo from "../images/sign_in_logo.png"
import { Link, useNavigate } from 'react-router-dom'

import { auth } from './firebase'

const Login = () => {

  const navigate = useNavigate();


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (e) => {
    e.preventDefault();

    // firebase login
    auth.signInWithEmailAndPassword(email,password)
        .then(
            (auth) => {
                navigate('/')
            }
        )
        .catch(error => alert(error.message))
  }

  const register = (e) => {
    e.preventDefault();

    // firebase register

    auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {

            // it successfully created a new user with email and password
            if(auth)
            {
                navigate('/')
            }
        })
        .catch(error => alert(error.message))


  }


  return (
    <div className='login'>
        <Link to='/'>
            <img 
                src={signIn_logo} 
                alt="sign-in-logo"
                className='login_logo' 
            />
        </Link>

        <div className="login_container">
            <h1>Sign In</h1>

            <form >
                <h5>Email</h5>
                <input 
                    type="text" 
                    value={email} 
                    onChange={e => setEmail(e.target.value)}
                />

                <h5>Password</h5>
                <input 
                    type="password" 
                    value={password} 
                    onChange={e => setPassword(e.target.value)}
                />

                <button className='login_signIn_btn' type='submit' onClick={signIn}>Sign In</button>
            </form>
            <p>
                By signing-in you agree to Amazon "FAKE" Conditions of Use & Sale. Please see our Privacy Notice,
                Our Cookies Notice and our Interest-Based Ads.
                Notice.
            </p>

            <button 
                className='login_register_btn'
                onClick={register}
            >
                Create New Account
            </button>

        </div>

    </div>
  )
}

export default Login