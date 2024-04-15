import React from 'react'
import './footer.css'
import RandLogo from '../../assets/RandLogo.png'
import user_icon from '../../assets/user_icon.svg'
const Footer = () => {
  return (
    <div className='footer'>
      <div className='top'>
        <div className='footer-left'>
            <img src={RandLogo} alt=''/>
            <p>A Frontend Devloper based in the United States.Front-End Web Development Course, 2023|2024</p>
        </div>
        <div className='footer-right'>
           <div className='email'>
            <img src={user_icon} alt=''/>
            <input type='email' placeholder='Enter Your Email'/>
           </div> 
           <div className='subscribe'>Subscribe</div>
        </div>
      </div>
      <hr/>
      <div className='bottom'>
        <p className='bottom-left'>@ 2024 Rand Attrah. All rights reserved. </p>
        <div className='bottom-right'>
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Contact Me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
