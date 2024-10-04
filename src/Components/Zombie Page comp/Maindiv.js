import React, { useState, useEffect } from 'react'
import './Maindiv.css'
import SingleZombie from './Single Zombie Card/SingleZombie';
import { Link } from 'react-router-dom';

function Maindiv() {
  const [zombieData, setZombiData] = useState([]);
  const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games?category=zombie';
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '46bbaa4692msh1c4158d3dd33361p10421ejsnb9680530003f',
      'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };
  useEffect(() => {
    fetchdata();
  },[]);

  async function fetchdata() {
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setZombiData(result);
    } catch (error) {
      console.log('error');
    }

  }
  return (
    <div className='maindiv'>
      {zombieData.map((zombie) => (
         <Link to={`/detail/${zombie.id}`}>
          <SingleZombie zombie={zombie}/>
          </Link>
       ))}
    </div>
  )
}

export default Maindiv
