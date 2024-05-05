import React from 'react'
import './body.css'
import randh from '../../assets/randh.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import my_resume from '../../assets/MyResume'

const Body = () => {
  return (
    <div id='home' className='rand'>
    <img src={randh} alt=''/>
     <h1><span> Hi.. This is Rand Attrah,</span> FrontEnd Developer based in the United States. </h1>
      <p>Front-End Web Development Course, 2023. 2024, Developed and contributed to
       various projects utilizing HTML, CSS, JavaScript, and ReactJs, showcased on GitHub:https://github.com/RandAttrah8088</p>
     <div className='actions'>
      <div className='rand-connect'><AnchorLink className='anchor' offset={50} href='#contact'>Contact Me </AnchorLink></div> 
      {my_resume.map((resume, index) => (
          <div className='resume' key={index}>
            <a href={resume.github_repo} target="_blank" rel="noopener noreferrer">My Resume</a>
          </div>
        ))}
   </div>
   </div>
  )
}

export default Body
