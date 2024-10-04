import React from 'react'
import Topdiv from '../../Components/Home Page Comp/Topdiv/Topdiv'
import './Home.css'
import Header from '../../Components/Home Page Comp/Header/Header'
import ShooterGame from '../../Components/Home Page Comp/ShooterGame.jsx/ShooterGame'
const Home = () => {
  return (
    <div className='Home'>
        <div className='RightDiv'>
        <Header/>
        <Topdiv/>
        <ShooterGame/>
        </div>
    </div>
  )
}

export default Home
