import React, { useState, useEffect } from 'react'
import './Topdiv.css'
import SingleGameCard from '../SingleCard/SingleGameCard';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
function Topdiv() {
    const [games, setGames] = useState([]);
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
    };
    const settings2 = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
    };

    const settings3 = {
        dots: true,
        infinite: true,
        speed: 1100,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };
    const url = 'https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=3d.mmorpg.fantasy.pvp&platform=pc';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '46bbaa4692msh1c4158d3dd33361p10421ejsnb9680530003f',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    async function fetchdata() {
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            const slicedArray = result.slice(0, 10);
            setGames(slicedArray);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        fetchdata();
    }, []);
    return (
        <div className='CardDiv'>
            <div className="top-container">
                <div className='Game-list'>
                    <Slider {...settings} className='slider'>
                        {games.map((game) => (
                            <Link to={`/detail/${game.id}`}>
                                <SingleGameCard game={game} />
                            </Link>))}
                    </Slider>
                </div>
                <div className='Game-list2'>
                    <Slider {...settings2} className='slider2'>
                        {games.map((game) => (
                            <Link to={`/detail/${game.id}`}>
                                <SingleGameCard game={game} />
                            </Link>))}
                    </Slider>
                </div>
                <div className="Game-list3">
                    <Slider {...settings3} className='slider3'>
                        {games.map((game) => (
                            <Link to={`/detail/${game.id}`}>
                                <SingleGameCard game={game} />
                            </Link>))}
                    </Slider>
                </div>
            </div>

        </div>

    )
}
export default Topdiv
