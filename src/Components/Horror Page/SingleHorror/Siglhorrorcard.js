import React from 'react'
import './Singlhorro.css'
function Siglhorrorcard({horror}) {
  return (
    <div className='horrogame'>
        <li className='horrorlist'>
        <img className='CardImg' src={horror.thumbnail} alt={horror.title}/>
        <h4 className=''>{horror.title}</h4>
      </li>
    </div>
  )
}

export default Siglhorrorcard
