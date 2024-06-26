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
        return <div className='mywork' key={index}>
          <h2>{project.w_name}</h2> 
          <a href={project.github_repo} target="_blank" rel="noopener noreferrer">
        <img key={index} src={project.w_img} alt=''/>
        </a>
        </div>
    
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
