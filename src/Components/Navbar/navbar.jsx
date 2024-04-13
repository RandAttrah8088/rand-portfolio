import React from 'react'
import './navbar.css'
import RandLogo from '../../assets/RandLogo.png'
const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={RandLogo} className='nav-img' alt=''/>
      <ul className='menu'>
        <li>Home</li>
        <li>About Me</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
      <div className='connect'>Connect Me</div>
    </div>
  )
}

export default Navbar
