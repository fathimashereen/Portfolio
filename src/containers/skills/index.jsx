import React from 'react'
import Header from '../../components/header'
import { FaCode } from 'react-icons/fa6'
import { skillsData } from './utils'
import { Animate, AnimateKeyframes } from 'react-simple-animate'
import { Line } from 'rc-progress'
import './style.scss';

const Skills = () => {
  return (
    <section id='skills' className='skills'> 
      <Header
      headerText='My Skills'
      icon={<FaCode size={40}/>}
      />
      <div className='skills__content-wrapper'>
        {
          skillsData.map((item,i)=>(
            <div key={i} className='skills__content-wrapper__inner-content'>
              <Animate
              play
              duration={1}
              delay={0.3}
              start={{
                transform:'translateX(-200px)'

              }}
              end={{
                transform:'translateX(0px)'
              }}
              >
                <h3 className='skills__content-wrapper__inner-content__category-text'>{item.Label}</h3>
                <div className='skills__content-wrapper__inner-content__progressbar-container'>
                  {item.Data.map((skillItem,j)=>(
                    <AnimateKeyframes
                    play
                    keyframes={["opacity:1","opacity:0"]}
                    iterationCount={1}
                    >
                      <div className='progress-wrapper' key={j}>
                        <p>{skillItem.skillName}</p>
                        <Line
                        percent={skillItem.percentage}
                        strokeWidth="2"
                        strokeColor="var(--yellow-theme-main-color)"
                        trailWidth="2"
                        strokeLinecap='square'
                        >
                          
                        </Line>
                      </div>
                    </AnimateKeyframes>
                  ))}
                </div>
              </Animate>
            </div>
          ))
        }
      </div>
    </section>
)

}

export default Skills