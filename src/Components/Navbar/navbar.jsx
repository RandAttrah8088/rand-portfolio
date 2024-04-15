import React, { useState, useRef } from 'react'
import './navbar.css'
import RandLogo from '../../assets/RandLogo.png'
import patternlogo from '../../assets/patternlogo.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
const Navbar = () => {
  const[menu,setMenu]=useState("Home");
  const menuRef= useRef();
  const openMenu=()=>{
    menuRef.current.style.right="0";
  }
  const closeMenu=()=>{
    menuRef.current.style.right="-350px";
  }
  return (
    <div className='navbar'>
      <img src={RandLogo} className='nav-img' alt=''/>
      <img src={menu_open} onClick={openMenu} alt='' className='nav-open'/>
      <ul ref={menuRef} className='menu'>
      <img src={menu_close} onClick={closeMenu}className='nav-close'alt=''/>
        <li><AnchorLink className='anchor' offset={50} href='#home'><p onClick={()=>setMenu("Home")}>Home</p></AnchorLink>{menu==="Home"?<img src={patternlogo} width={45} height={30} alt=''/>:<></>}</li>
        <li><AnchorLink className='anchor' offset={50} href='#about'><p onClick={()=>setMenu("About Me")}>About Me</p></AnchorLink>{menu==="About Me"?<img src={patternlogo} width={45} height={30} alt=''/>:<></>}</li>
        <li><AnchorLink className='anchor' offset={50} href='#services'><p onClick={()=>setMenu("Services")}>Services</p></AnchorLink>{menu==="Services"?<img src={patternlogo} width={45} height={30} alt=''/>:<></>}</li>
        <li><AnchorLink className='anchor' offset={50} href='#projects'><p onClick={()=>setMenu("Projects")}>Projects</p></AnchorLink>{menu==="Projects"?<img src={patternlogo} width={45} height={30} alt=''/>:<></>}</li>
        <li><AnchorLink className='anchor' offset={50} href='#contact'><p onClick={()=>setMenu("Contact")}>Contact</p></AnchorLink>{menu==="Contact"?<img src={patternlogo} width={45} height={30} alt=''/>:<></>}</li>
      </ul>
      <div className='connect'><AnchorLink className='anchor' offset={50} href='#contact'>Connect Me</AnchorLink></div>
    </div>
  )
}

export default Navbar 