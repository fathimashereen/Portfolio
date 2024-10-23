import React from 'react'
import Header from '../../components/header'
import { FaFolderOpen } from 'react-icons/fa6'
const Portfolio = () => {
  return (
    <section id='portfolio' className='portflio'> 
      <Header
      headerText='My Projects'
      icon={<FaFolderOpen size={40}/>}
      />
    </section>
  )
}

export default Portfolio