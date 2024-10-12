import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Sidebar from './Pages/Sidebar/Sidebar';
import Game from './Pages/Zombie/Game';
import Horror from './Pages/Horror/Horror';
import Login from './Components/Login Page/Login';
import DetailPage from './Pages/DetailPage'
import { useState } from 'react';


function App() {
  const location = useLocation();
  const[show, setShow] = useState();
  return (
    <div className="App">
      {location.pathname !== '/login' && <Sidebar show={show} setShow={setShow} />}
      <Routes>

        <Route path='/' element={<Home  show={show} setShow={setShow}/>} />
        <Route path='/ZombieGame' element={<Game />} />
        <Route path='/HorrorGame' element={<Horror />} />
        <Route path='/login' element={<Login />} />
        <Route path='/detail/:id' element={<DetailPage />} />
      </Routes>
      <Routes>
      </Routes>
    </div>
  );
}

export default App;
