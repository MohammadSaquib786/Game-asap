import React from 'react'
import './Footerdiv.css';

function Footerdiv({ game }) {

  return (
    <div className='Navbar-container'>
      <div className='dowl-list'>
        <img className='image' src={game.thumbnail} alt={game.title} />
        <p style={{marginTop:'10px'}}> {game.title}</p>
      </div> 
    </div>
  )
}
export default Footerdiv
