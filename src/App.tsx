import { useState } from 'react';
import { Routes, Route} from 'react-router-dom';
import { Home} from './components/Home';
import { Navbar } from './components/Navbar';
import { Category } from './components/Category'

import './styles/App.css'
import './styles/Navbar.css'
import './styles/Home.css'
import './styles/Category.css'

function App() {
  const [isActive, setIsActive] = useState(false)

  function toggleActive(){
      setIsActive(isActive ? false : true)
      console.log(isActive)
  }
  return (
    <section className='app'>
      <Navbar isActive={isActive} toggleActive={toggleActive}/>  

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/support" element={<Home />} />
      </Routes>
      <div className='bottom-elipse'> <img src="./elipse.png" alt="elipse" className="elipse"/></div>
      <div className='bottom-color'></div>
    </section>
    
  )
}

export default App
