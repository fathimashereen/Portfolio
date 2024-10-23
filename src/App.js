import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './containers/home'
import About from './containers/about'
import Resume from './containers/resume'
import Skills from './containers/skills'
import Portfolio from './containers/portfolio'
import Contact from './containers/contact'
import NavBar from './components/navbar'
import ParticleBackground from './components/utils/particles'
import './App.scss'


const App = () => {
  return (
 
    <div className='App'>
      {/* particles */}
        <ParticleBackground/>

      {/* navbar*/}

        <NavBar/>

      {/*mainpage */}
      <div className='App__main-page-content'> 
        <Routes>
          <Route index path="/" element={<Home/>} ></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/resume" element={<Resume/>}></Route>
          <Route path="/skills" element={<Skills/>}></Route>
          {/* <Route path="/portfolio" element={<Portfolio/>}></Route> */}
          <Route path="/contact" element={<Contact/>}></Route>
        </Routes>
      </div>

    </div>
   
  )
}

export default App