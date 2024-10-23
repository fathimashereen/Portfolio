import React, { useState } from 'react'
import { FaReact,FaBars } from 'react-icons/fa'
import { HiX } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import './style.scss'

const data=[
  {
    label:'Home',
    to:'Portfolio/'
  },
  {
    label:'About',
    to:'Portfolio/about'
  },
  {
    label:'Skills',
    to:'Portfolio/skills'
  },
  {
    label:'Resume',
    to:'Portfolio/resume'
  },
  // {
  //   label:'Portfolio',
  //   to:'/portfolio'
  // },
  {
    label:'Contact',
    to:'Portfolio/contact'
  },
]

const NavBar = () => {

  const [toggleIcon,setToggleIcon]=useState(false)
  //const [toggleIconForMenu,setToggleIconForMenu]=useState(false)

  const handleToggleIcon=()=>{
    setToggleIcon(!toggleIcon)
  }

  const menuHide=()=>{
    setToggleIcon(!toggleIcon)
  }

  return (
    <div>
      <nav className='navbar'>
        <div className='navbar__container'>
          <Link to={"Portfolio/"} className="navbar__container__logo">
            <FaReact size={30}/>
          </Link>
        </div>
        <ul className={`navbar__container__menu ${toggleIcon ? 'open' : ''}`}>
          {data.map((item,key)=>(
            <li key={key} className='navbar__container__menu__item '>
              <Link to={item.to} 
              className='navbar__container__menu__item__links' onClick={menuHide}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className='nav-icon' onClick={handleToggleIcon}>
          {toggleIcon ? <HiX size={30}/> : <FaBars size={30}/>}
        </div>
      </nav>
    </div>
  )
}

export default NavBar