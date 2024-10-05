import React, { useState } from 'react';
import './Header.css'
import { useNavigate } from 'react-router-dom'
import { ImCross } from "react-icons/im";

const Header = ({setInputFocused, allGames, setFilteredGames}) => {
    const navigate = useNavigate();
    const [searchInput, setSearchInput] = useState()

      function clickhandle(event) {
        event.preventDefault(); 
        const filtered = allGames.filter(game => 
          game?.title?.toLowerCase()?.includes(searchInput?.toLowerCase())
        );
        setFilteredGames(filtered);
      }
      const ClearState=()=>{
        setSearchInput('')
        setFilteredGames('')
      }
  return (
    <div>
       <div className='nav-bar'>
               <form action='' onSubmit={clickhandle}>
                <input value={searchInput} onBlur={()=>setInputFocused(false)} onFocus={()=>setInputFocused(true)} onChange={(e) => setSearchInput(e.target.value)} className='Search-bar' type="text" placeholder='Quick Search....' />
                <ImCross onClick={ClearState} color='white' style={{left:'-30px', position:'relative' , zIndex:'99', cursor:'pointer'}} />
                </form>
               <button className='login-button' onClick={() => navigate('/login')}>Log In</button>
            </div>
            
    </div>
  )
}

export default Header
