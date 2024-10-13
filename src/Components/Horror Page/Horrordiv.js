
import React, {useState, useEffect} from 'react'
import './Horrordiv.css'
import Siglhorrorcard from './SingleHorror/Siglhorrorcard';
import { Link } from 'react-router-dom';

function Horrordiv() {
    const [horrorData, setHorrorData] = useState([]);
    const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games?category=horror';
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
        setHorrorData(result);
      } catch (error) {
        console.log('error');
      }
      
    }
  return (
    <div className='maindiv'>
      {horrorData.map((horror) => (
         <Link to={`/detail/${horror.id}`}>
         <Siglhorrorcard horror={horror}/>
       </Link>
      ))}
    </div>
  )
}

export default Horrordiv
