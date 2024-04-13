import React from 'react'
import './body.css'
import randh from '../../assets/randh.png'

const Body = () => {
  return (
    <div className='rand'>
    <img src={randh} alt=''/>
     <h1><span> Hi.. This is Rand Attrah,</span> FrontEnd Developer based in the United States. </h1>
      <p>Front-End Web Development Course, 2023. 2024, Developed and contributed to
       various projects utilizing HTML, CSS, JavaScript, and ReactJs, showcased on GitHub:</p>
     <div className='actions'>
      <div className='rand-connect'>Contact Me</div> 
      <div className='resume'>My Resume</div>
   </div>
   </div>
  )
}

export default Body
