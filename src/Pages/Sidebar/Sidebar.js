import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import logo from './logo.png'
import { FaHome } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import { SiEpicgames } from "react-icons/si";
import { useLocation, useNavigate } from 'react-router-dom';
;
function Sidebar() {
  const [selectedOption, setSelectedOption] = useState("home")
    const navigate = useNavigate();
    const location = useLocation()
    useEffect(()=>{
      if(location.pathname==="/"){
        setSelectedOption("home")
      }else if(location.pathname==="/ZombieGame"){
        setSelectedOption("zombie")
      }else{
        setSelectedOption("horror")
      }
    },[location])
    
  return (
    <div className='sidebar-container'>
      <img className='logo-img' src={logo} alt="" width='100px' height='100px' />
      <div className='button'>
        <button  className='sing-button' onClick={() => navigate('/')}>{<FaHome />} <br /> Home</button>
        <button className='sing-button' onClick={() => navigate('/ZombieGame')} >{<IoGameController />} <br/> Zombie Games</button>
        <button className='sing-button' onClick={() => navigate('/HorrorGame')}>{<SiEpicgames/>} <br/> Horror Games </button>
      </div>
    </div>
  )
}

export default Sidebar
