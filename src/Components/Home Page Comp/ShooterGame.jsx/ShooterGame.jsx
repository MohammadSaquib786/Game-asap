import React, { useEffect, useState } from 'react'
import Footerdiv from '../Footer Div/Footerdiv';
import { Link } from 'react-router-dom';
import './ShooterGame.css'
const ShooterGame = () => {
    const [games, setGames] = useState([]);
    const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games?category=shooter';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '46bbaa4692msh1c4158d3dd33361p10421ejsnb9680530003f',
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
            const slicedArray = result.slice(0, 200);
            setGames(slicedArray );
        } catch (error) {
            console.error(error);
        }
    }
    return (<>
    <h3 className='Shooter-Heading'>Shooting Games</h3>
        <div className='shooter-div'>
            {games.map((game) => (
                <Link to={`/detail/${game.id}`}>
                <Footerdiv game={game} />
                </Link> ))}

        </div>
        </>)
}

export default ShooterGame
