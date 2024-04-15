import React from 'react'
import './projects.css'
import patternlogo from "../../assets/patternlogo.png";
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg'

const Projects = () => {
  return (
    <div id='projects' className='projects'>
    <div className='pro-title'>
        <h1>My Projects</h1>
        <img src={patternlogo} alt=''/>
    </div>
     <div className='pro-container'>
      {mywork_data.map((project,index)=>{
        return <img key={index} src={project.w_img} alt=''/>
      })}
     </div> 
     <div className='showmore'>
        <p>Show More</p>
        <img src={arrow_icon} alt=''/>
     </div>
    </div>
  )
}

export default Projects
