import React from 'react'
import "./SingleGameCard.css"
const SingleGameCard = ({ game }) => {
  return (
    <div>
      <li className='unorderlist'>
        <img className='img' src={game.thumbnail} alt={game.title} />
        <h2 className='game-name'>{game.title}</h2>
        <p>{game.short_description}</p>
      </li>
    </div>
  )
}

export default SingleGameCard
