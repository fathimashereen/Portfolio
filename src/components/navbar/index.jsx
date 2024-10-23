import React, { useState } from 'react'
import { FaReact,FaBars } from 'react-icons/fa'
import { HiX } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import './style.scss'

const data=[
  {
    label:'Home',
    to:'/'
  },
  {
    label:'About',
    to:'/about'
  },
  {
    label:'Skills',
    to:'/skills'
  },
  {
    label:'Resume',
    to:'/resume'
  },
  // {
  //   label:'Portfolio',
  //   to:'/portfolio'
  // },
  {
    label:'Contact',
    to:'/contact'
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
          <Link to={"/"} className="navbar__container__logo">
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