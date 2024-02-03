import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';

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
    // <BrowserRouter>
    //   <>
    //     <h1 style={{fontStyle: 'italic'}}><span className={'bismuth'} style={{color: '#9551ff', fontStyle: 'normal'}}>Travel Blog - 40 countries!</span></h1>
    //     <p>
    //       Come travel with me!
    //     </p>
    //   </>  
    // </BrowserRouter>
  )
}

export default App
