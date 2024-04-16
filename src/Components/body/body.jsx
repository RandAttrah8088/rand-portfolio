import React from 'react'
import './body.css'
import randh from '../../assets/randh.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Body = () => {
  return (
    <div id='home' className='rand'>
    <img src={randh} alt=''/>
     <h1><span> Hi.. This is Rand Attrah,</span> FrontEnd Developer based in the United States. </h1>
      <p>Front-End Web Development Course, 2023. 2024, Developed and contributed to
       various projects utilizing HTML, CSS, JavaScript, and ReactJs, showcased on GitHub:https://github.com/RandAttrah8088</p>
     <div className='actions'>
      <div className='rand-connect'><AnchorLink className='anchor' offset={50} href='#contact'>Contact Me </AnchorLink></div> 
      <div className='resume'>My Resume</div>
   </div>
   </div>
  )
}

export default Body
