import React from 'react'
import './Footerdiv.css';

function Footerdiv({ game }) {
  // function clickHandler() {
  //   window.open(game.freetogame_profile_url, '_blank');
  // }
  return (
    <div style={{marginTop:'20px'}} className='Navbar-container'>
      <li className='dowl-list'>
        <img className='image' src={game.thumbnail} alt={game.title} width='230px' height='200px'  />
        <p style={{marginTop:'10px'}}> {game.title}</p>
      </li> 
    </div>
  )
}
export default Footerdiv
