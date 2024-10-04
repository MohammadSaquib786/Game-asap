import './App.css';
import { Routes, Route, useLocation} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Sidebar from './Pages/Sidebar/Sidebar';
import Game from './Pages/Zombie/Game';
import Horror from './Pages/Horror/Horror';
import Login from './Components/Login Page/Login';
import DetailPage from './Pages/DetailPage'


function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname !== '/login' && <Sidebar />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ZombieGame' element={<Game />} />
        <Route path='/HorrorGame' element={<Horror />} />
        <Route path='/login' element={<Login />} />
        <Route path='/detail/:id' element={<DetailPage/>}/>
      </Routes>
      <Routes>
     
      </Routes>
    </div>
  );
}

export default App;
