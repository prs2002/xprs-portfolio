import React from 'react'
import './style/Skills.css'
import {
  SiCplusplus,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiPython,
  SiRedux,
  SiPostman,
  SiGit,
  SiGithub,
  SiVisualstudiocode,
  SiSpringboot ,
  SiFlask,
  SiTensorflow,

} from "react-icons/si";
import Github from './Github';

function Skills() {
  return (
    <div id='skills' className='skills'>
      <h1>Skills and Technologies</h1>
      <div className="skill--card">
        
        <div className='skill--item'>
          <SiCplusplus size="5rem" />
            <p>C++</p>
        </div>
        <div className='skill--item'>
          <SiJavascript size="5rem" />
          <p>JAVASCRIPT</p>
        </div>
        <div className='skill--item'>
          <SiReact size="5rem" />
          <p>REACT</p>
        </div>
        <div className='skill--item'>
          <SiSpringboot  size="5rem" />
          <p>Springboot</p>
        </div>
        <div className='skill--item'>
          <SiNextdotjs size="5rem" />
          <p>NEXTJS</p>
        </div>
        <div className='skill--item'>
          <SiPython size="5rem" />
          <p>PYTHON</p>
        </div>
        <div className='skill--item'>
          <SiGit size="5rem" />
          <p>GIT</p>
        </div>
        <div className='skill--item'>
          <SiGithub size="5rem" />
          <p>GITHUB</p>
        </div>
        <div className='skill--item'>
          <SiRedux size="5rem" />
          <p>REDUX</p>
        </div>
        <div className='skill--item'>
          <SiPostman size="5rem" />
          <p>POSTMAN</p>
        </div>
        <div className='skill--item'>
          <SiVisualstudiocode size="5rem" />
          <p>VS CODE</p>
        </div>
        <div className='skill--item'>
          <SiFlask size="5rem" />
          <p>Flask</p>
        </div>
        <div className='skill--item'>
          <SiTensorflow size="5rem" />
          <p>Tensorflow</p>
        </div>
      </div>
      <Github />
      
    </div>
  )
}

export default Skills