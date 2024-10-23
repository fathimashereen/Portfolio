import React from 'react'
import Header from '../../components/header'
import { BsInfoCircleFill } from 'react-icons/bs'
import { Animate } from 'react-simple-animate'
import './style.scss'
import { DiApple,DiAndroid } from 'react-icons/di'
import { FaDev,FaDatabase } from 'react-icons/fa'

const About = () => {
  const personalDetails=[{
    'Label':'Name',
    'Value':'Fathima shereen E'
  },{
    'Label':'Phone',
    'Value':'+971 50 641 5275'
  },{
    'Label':'Email',
    'Value':'fathimashereene2@gmail.com'
  }
]
  
  const aboutMe = "I am a recent Master of Computer Applications graduate with a Bachelor's degree and strong analytical and problem-solving skills. Proficient in React, Django, and Node.js for web development, I am currently expanding my knowledge in these technologies. Additionally, I have hands-on experience with the automation tool Power Automate Desktop, which I utilized for Robotic Process Automation (RPA).\n\n" +
  "Let's connect and create something amazing together!";
  return (
    <section id='about' className='about'> 
      <Header
        headerText='About Me'
        icon={<BsInfoCircleFill size={40}/>}
        />
        <div className='about__content'>   

          <div className='about__content__personnalWrapper'>
              <Animate
              play
              duration={1.5}
              delay={1}
              start={{transform:'translateX(-990px)'}}
              end={{transform:'translatex(0px)'}}
            >
            <h3 className='personalInformationHeaderText'>Web Developer</h3>
            <p>{aboutMe}</p>
            {/* <p style={"border-bottom: 1px dashed var(--yellow-theme-main-color)"}></p> */}
            </Animate>
            
            <Animate
              play
              duration={1.5}
              delay={0.3}
              start={{transform:'translateX(50%)'}}
              end={{transform:'translatex(0px)'}}
            >
            <h3 className='personalInformationHeaderText'>Personal Informations</h3>
            <ul>
              

              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className='label'>{item.Label}</span>    
                  <span className='value'> {item.Value}</span>
                </li>
              ))}

            </ul>
            </Animate>
            
            </div>  
            <div className='about__content__serviceWrapper'>
            <Animate
              play
              duration={1.5}
              delay={1}
              start={{transform:'translateX(600px)'}}
              end={{transform:'translatex(0px)'}}
            >

              <div className='about__content__serviceWrapper__innerWrapper'>
                <div>
                  <FaDev color='var(--yellow-theme-main-color)' size={60}/>
                </div>
                <div>
                  <FaDatabase color='var(--yellow-theme-main-color)' size={60}/>
                </div>
                <div>
                  <DiAndroid color='var(--yellow-theme-main-color)' size={60}/>  
                </div>
                <div>
                  <DiApple color='var(--yellow-theme-main-color)' size={60}/>
                </div>
              </div>

            </Animate>
             
            </div>  

        </div>
    </section>
  )
}

export default About