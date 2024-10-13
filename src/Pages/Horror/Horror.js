import React from 'react'
import Horrordiv from '../../Components/Horror Page/Horrordiv'
import './Horror.css'
import { GoSidebarCollapse } from 'react-icons/go';
function Horror({show, setShow}) {
  return (
    <div className='game-div'>
       <GoSidebarCollapse style={{cursor:'pointer'}} onClick={()=>setShow(!show)}  className='side-button'/>
        <h1 className='zombie-heading'>Horror Games</h1>
        <h3 className='zombie-heading2'>Horror Games</h3>
      <Horrordiv />
    </div>
  )
}

export default Horror
