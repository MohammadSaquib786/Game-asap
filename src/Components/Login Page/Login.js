import React from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'
import { SiGamejolt } from "react-icons/si";
function Login() {
    const navigate = useNavigate();
    return (
        <div className='login-div'>
            <div className="head-login">
                <h2 style={{color:'yellow'}} className='h2-div'> {<SiGamejolt/>}GAME asap</h2>
                <h4 style={{color:'yellow'}} className='h4-div'> {<SiGamejolt/>}GAME asap</h4>
                <button onClick={() => navigate('/')} className='button-singup'>Skip Login </button>
            </div>
          
            <div className="login-heading">
                <h1>Log In</h1>
                <h3>Let`s get Started!</h3>
            </div>
            <form action="" className='form'>
                <div className="input-box">
                    <input type="email" placeholder='Enter Your Email' className='input-text' />
                    <input type="password" placeholder='Password' className='input-text' />
                </div>
                <input type="button" value="Log In" className='button-singup' />
            </form>
        </div>
    )
}

export default Login
