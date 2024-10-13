import React from 'react'
import Maindiv from '../../Components/Zombie Page comp/Maindiv';
import { GoSidebarCollapse } from 'react-icons/go';
import './Game.css';
function Game({show, setShow}) {
  return (
   <div className='game-div'>
      <GoSidebarCollapse style={{cursor:'pointer'}} onClick={()=>setShow(!show)}  className='side-button'/>
      <h1 className='zombie-heading'>Zombie Games</h1>
      <h3 className='zombie-heading2'>Zombie Games</h3>
      <Maindiv/>
    </div>
  )
}
export default Game
