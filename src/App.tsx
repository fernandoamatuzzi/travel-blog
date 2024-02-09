import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import About from './views/About/About';
import Contact from './views/Contact/Contact';
import Home from './views/Home/Home';

function App() {
  return (
    <div className='App'>
      <nav>
        <div className='menu'>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
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
