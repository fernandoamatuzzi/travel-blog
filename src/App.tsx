import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link, Route, Routes } from 'react-router-dom';
import About from './views/About/About';
import Contact from './views/Contact/Contact';
import Home from './views/Home/Home';
import SearchBar from './components/SearchBar/SearchBar';
import BalloonIcon from './assets/logo-balloon.png';

function App() {
  return (
    <div className='App'>
      <nav>
        <div className='menu'>
          <Link to='/'>
            <img src={BalloonIcon} alt='Balloon icon' />
          </Link>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/about'>Lifestyle</Link>
          <Link to='/contact'>Contact</Link>
          <SearchBar />
        </div>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
