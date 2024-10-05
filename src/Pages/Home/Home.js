import React, { useState } from 'react'
import Topdiv from '../../Components/Home Page Comp/Topdiv/Topdiv'
import './Home.css'
import Header from '../../Components/Home Page Comp/Header/Header'
import ShooterGame from '../../Components/Home Page Comp/ShooterGame.jsx/ShooterGame'
const Home = () => {
  const [inputFocused, setInputFocused] = useState(false);
  const [allGames, setAllGames] = useState([]);
  const [filteredGame,   setFilteredGames] = useState([]);

  return (
    <div className='Home'>
        <div className='RightDiv'>
        <Header setFilteredGames={setFilteredGames} allGames={allGames} setInputFocused={setInputFocused}/>
        {!inputFocused && filteredGame.length===0 ?  <Topdiv/>:''}
        <ShooterGame filteredGame={filteredGame} setAllGames={setAllGames} inputFocused={inputFocused}/>
        </div>
    </div>
  )
}

export default Home
