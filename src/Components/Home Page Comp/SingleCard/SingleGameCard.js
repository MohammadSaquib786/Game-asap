import React from 'react'
import "./SingleGameCard.css"
const SingleGameCard = ({ game }) => {
  return (
    <div>
      <div className='unorderlist'>
        <img className='img' src={game.thumbnail} alt={game.title} />
        <h2 className='game-name'>{game.title}</h2>
        <p>{game.short_description}</p>
      </div>
    </div>
  )
}

export default SingleGameCard
