import React from 'react'
import './style.scss'
import { useNavigate } from 'react-router-dom'
import { Animate } from 'react-simple-animate'

const Home = () => {
  const navigate=useNavigate()
  const handleNavigateToContactMePage =()=>{
    navigate('./contact')
  }
  
  return (
    <section id='home' className='home'>
      <div className='home__text-wrapper'>
        <h1>Hello, I am Fathima</h1>
        <br/>
        <h1>Web Developer</h1>
      </div>
      <Animate
      play
      duration={1.5}
      delay={1}
      start={{transform:'translateY(550px)'}}
      end={{transform:'translateY(0px)'}}
      >
      <div className='home__contact-me'>     
        <button onClick={handleNavigateToContactMePage}>
          Hire Me
        </button>
      </div>
      </Animate>

    </section>
)}

export default Home
