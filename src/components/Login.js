import React from 'react'
import "./Login.css"
import signIn_logo from "../images/sign_in_logo.png"
import { Link } from 'react-router-dom'
const Login = () => {
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
                <input type="text" />

                <h5>Password</h5>
                <input type="password" />

                <button className='login_signIn_btn'>Sign In</button>
            </form>
            <p>
                By signing-in you agree to Amazon "FAKE" Conditions of Use & Sale. Please see our Privacy Notice,
                Our Cookies Notice and our Interest-Based Ads.
                Notice.
            </p>

            <button className='login_register_btn'>Create New Account</button>

        </div>

    </div>
  )
}

export default Login