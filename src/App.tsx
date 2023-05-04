import { useState } from 'react';
import { Routes, Route} from 'react-router-dom';
import { Home} from './components/Home';
import { Navbar } from './components/Navbar';
import { Category } from './components/Category'
import { Resources } from './components/Resources';

import {GraphicsCategoryButtons, GraphicsResources} from './data/GraphicsCategoryData';
import {SoftwareCategoryButtons, SoftwareResources} from './data/SoftwareCategoryData';
import {UiCategoryButtons, UiResources} from './data/UiCategoryData';

import './styles/App.css'
import './styles/Navbar.css'
import './styles/Home.css'
import './styles/Resources.css'
import './styles/Category.css'


function App() {
  const [isActive, setIsActive] = useState(false)

  function toggleActive(){
      setIsActive(isActive ? false : true)
  }
  function setToFalse(){
    setIsActive(false)
  }

  return (
    <section className='app'>
      <Navbar isActive={isActive} toggleActive={toggleActive}/>  

      <Routes>
        <Route path="/" element={<Home isActive={isActive} setToFalse={setToFalse}/>} />
        <Route path="/category" element={<Category isActive={isActive} setToFalse={setToFalse}/>} />
        <Route path="/support" element={<Home isActive={isActive} setToFalse={setToFalse}/>} />

        <Route path="/uiux" element={<Resources
          title = 'UI UX Design'
          categorybtn = {UiCategoryButtons}
          resources = {UiResources}
          setToFalse={setToFalse}
          />} />
        <Route path="/graphics" element={<Resources 
          title = 'Graphics Design'
          categorybtn = {GraphicsCategoryButtons}
          resources = {GraphicsResources}
          setToFalse={setToFalse}
          />} />
        <Route path="/software" element={<Resources
          title = 'Software Development'
          categorybtn = {SoftwareCategoryButtons}
          resources = {SoftwareResources}
          setToFalse={setToFalse}
         />} />
      </Routes>
    </section>
    
  )
}

export default App
