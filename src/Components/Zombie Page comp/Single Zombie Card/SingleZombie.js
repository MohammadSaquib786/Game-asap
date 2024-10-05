import React from 'react'
import './SingleZombie.css'
function SingleZombie({zombie}) {
  return (
    <div className='zombie-single'>
      <div>
        <li className='zombielist'>
        <img className='CardImg' src={zombie.thumbnail} alt={zombie.title} />
        <h3 className='game-name'>{zombie.title}</h3>
      </li>
      </div>
    </div>

  )
}

export default SingleZombie
