import React, { useEffect, useState } from 'react';
import './style.css';
import { CiStar } from "react-icons/ci";
import Slider from 'react-slick/lib/slider';
import { useParams } from 'react-router-dom';

const Index = () => {
  const [Data, setData] = useState(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
  };
  const {id} = useParams("id");
  // console.log("Data", Data);
  const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '46bbaa4692msh1c4158d3dd33361p10421ejsnb9680530003f',
      'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  async function fetchdata() {
    try {
      const response = await fetch(url, options);
      const result = await response.json();

      setData(result);
    } catch (error) {
      console.log('error');
    }
  }

  const truncateDescription = (description) => {
    const word = description.split('');
    if(word.length > 1000) {
      return word.slice(0, 1000).join('') + '....';
    }
    else if(word.length < 100){
      return description;
    }
    else{
      return word.join('');
    }
  }

  return (
    <div className='main-div'>
      {Data ? (
        <div>
          <div className='topleable-div'>
            <img className='img-thumbnail' src={Data.thumbnail} alt={Data.title} />
            <div className="topleabletext">
              <h1>{Data.title}</h1>
              <h3> Release Date : {Data.release_date}</h3>
              <CiStar style={{ color: 'yellow' }} /> <CiStar style={{ color: 'yellow' }} /> <CiStar style={{ color: 'yellow' }} /> <CiStar style={{ color: 'yellow' }} /> <CiStar />
              <p className='desc-para'>{truncateDescription(Data.description)}</p>
            </div>
          </div>
          <div className='datils-div'>
            <div className="datiles-div-left">
             
              <h4>Genre(s)</h4>
              <p>{Data.genre}</p>
           
              <h4>Status</h4>
              <p>{Data.status}</p>
            
              <h4>Platform</h4>
              <p>{Data.platform}</p>
             
              <h4>Publisher</h4>
              <p>{Data.publisher}</p>
             
              <h4>Developer</h4>
              <p>{Data.developer}</p>

            </div>
            <div className='datiles-div-right'>
             
              <h4>Minimum Operating System</h4>
              <p>{Data?.minimum_system_requirements?.os}</p>
              
              <h4>Processor</h4>
              <p>{Data?.minimum_system_requirements?.processor}</p>
            
              <h4>Memory</h4>
              <p>{Data?.minimum_system_requirements?.memory}</p>
            
              <h4>Graphics</h4>
              <p>{Data?.minimum_system_requirements?.graphics}</p>
              
              <h4>Storage</h4>
              <p>{Data?.minimum_system_requirements?.storage}</p>
            </div>
          </div>
        </div>
      ) : (
        <div class="loader"></div>
      )}

      {Data?.screenshots && Data?.screenshots.length > 0 && (
         <div className="screenshots-container">
          <h1>Screenshots</h1>
          <div className="screenshots-grid">
          <Slider {...settings} className='slider'>
            {Data.screenshots?.map((screenshot) => (
              <img key={screenshot.id} src={screenshot.image} alt={`Screenshot ${screenshot.id}`} className="screenshot-img" />
            ))}
             </Slider>
          </div>
        </div>
        ) }
    </div>
)
}

export default Index
