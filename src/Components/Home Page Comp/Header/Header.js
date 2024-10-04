import React from 'react';
import './Header.css'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate();
  return (

    <div>
       <div className='nav-bar'>
               <form action="">
                <input className='Search-bar' type="text" placeholder='Quick Search....' />
                </form>
               <button className='login-button' onClick={() => navigate('/login')}>Log In</button>
            </div>
    </div>
  )
}

export default Header
