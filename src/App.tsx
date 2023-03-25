import { useState } from 'react';
import { Routes, Route} from 'react-router-dom';
import { Home} from './components/Home';
import { Navbar } from './components/Navbar';
import { Category } from './components/Category'
import { Resources } from './components/Resources';

import {GraphicsCategory, GraphicsLinks} from './data/GraphicsCategoryData';
import {SoftwareCategory, SoftwareLinks} from './data/SoftwareCategoryData';
import {UiCategory, UiLinks} from './data/UiCategoryData';

import './styles/App.css'
import './styles/Navbar.css'
import './styles/Home.css'
import './styles/Resources.css'
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

        <Route path="/uiux" element={<Resources
          title = 'UI UX Design'
          category = {UiCategory}
          links = {UiLinks}
        />} />
        <Route path="/graphics" element={<Resources 
          title = 'Graphics Design'
          category = {GraphicsCategory}
          links = {GraphicsLinks}
        />} />
        <Route path="/software" element={<Resources
          title = 'Software Development'
          category = {SoftwareCategory}
          links = {SoftwareLinks}
         />} />
      </Routes>

      <div className='bottom-elipse'> <img src="./elipse.png" alt="elipse" className="elipse"/></div>
      <div className='bottom-color'></div>
    </section>
    
  )
}

export default App
