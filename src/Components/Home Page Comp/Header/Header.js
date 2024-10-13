import React, { useState } from 'react';
import './Header.css'
import { useNavigate } from 'react-router-dom'
import { ImCross } from "react-icons/im";
import { GoSidebarCollapse } from 'react-icons/go';

const Header = ({setInputFocused, allGames, setFilteredGames, show, setShow}) => {
    const navigate = useNavigate();
    const [searchInput, setSearchInput] = useState();

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
               <form  className='form-input' action='' onSubmit={clickhandle}>
                <input value={searchInput} onBlur={()=>setInputFocused(false)} onFocus={()=>setInputFocused(true)} onChange={(e) => setSearchInput(e.target.value)} className='Search-bar' type="text" placeholder='Quick Search....' />
                <ImCross onClick={ClearState} color='white' style={{left:'-30px', position:'relative' , zIndex:'99', cursor:'pointer'}} />
                </form>
               <button className='login-button' onClick={() => navigate('/login')}>Log In</button>
               <GoSidebarCollapse style={{cursor:'pointer'}}  onClick={()=>setShow(!show)}  className='side-button'/>  
            </div>
            
    </div>
  )
}

export default Header
