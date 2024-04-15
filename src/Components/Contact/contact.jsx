import React from 'react'
import './contact.css'
import patternlogo from "../../assets/patternlogo.png";
import mail_icon from "../../assets/mail_icon.svg"
import location_icon from "../../assets/location_icon.svg"
import call_icon from "../../assets/call_icon.svg"
const Contact = () => {
  return (
    <div className='contact'>
    <div className='title'>
        <h1>Contact Me</h1>
        <img src={patternlogo} alt=''/>
    </div>
    <div className='sections'>
     <div className='left'>
        <h1>Let's Communicate</h1>
        <p>Hi,This is Rand, I'm Open For New Exciting Projects,Feel Free To Contact Me Anytime. </p>
        <div className='details'>
        <div className='detail'>
         <img src={mail_icon} alt=''/><p>rand.h.attrah@gmail.com</p>
        </div>
        <div className='detail'>
         <img src={location_icon} alt=''/><p>AZ,United States</p>
        </div>
        <div className='detail'>
         <img src={call_icon} alt=''/><p>+6024005611</p>
        </div>
        </div>
     </div>
     <form className='right'>
        <label htmlFor=''>Your Name</label>
        <input type='text' placeholder='Enter Your Name'/>
        <label htmlFor=''>Your Email</label>
        <input type='email' placeholder='Enter Your Email'/>
        <label htmlFor=''> Writ Your Message</label>
        <textarea name='message'  rows="8" placeholder='Enter Your Message'></textarea>
        <button type='submit' className='submit'>Submit</button>
     </form>

    </div> 
    </div>
  )
}

export default Contact
