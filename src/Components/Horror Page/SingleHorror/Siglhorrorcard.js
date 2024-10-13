import React from 'react'
import './Singlhorro.css'
function Siglhorrorcard({horror}) {
  return (
    <div className='zombie-single'>
      <div>
      <div className='zombielist'>
        <img className='CardImg' src={horror.thumbnail} alt={horror.title}/>
        <h4 game-name>{horror.title}</h4>
      </div>

      </div>
    </div>
  )
}

export default Siglhorrorcard
