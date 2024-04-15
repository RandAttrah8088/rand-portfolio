import React from 'react'
import './contact.css'
import patternlogo from "../../assets/patternlogo.png";
import mail_icon from "../../assets/mail_icon.svg"
import location_icon from "../../assets/location_icon.svg"
import call_icon from "../../assets/call_icon.svg"
const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "acf19ebb-f348-4517-827f-e68ca846defc");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      alert(res.message)
    }
  };
  
  return (
    <div id='contact' className='contact'>
    <div className='title'>
        <h1>Contact Me</h1>
        <img src={patternlogo} alt=''/>
    </div>
    <div className='sections'>
     <div className='left'>
        <h1>Lets Communicate</h1>
        <p>Hi,This is Rand, I am Open For New Exciting Projects,Feel Free To Contact Me Anytime. </p>
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
     <form onSubmit={onSubmit} className='right'>
        <label htmlFor=''>Your Name</label>
        <input type='text' placeholder='Enter Your Name'/>
        <label htmlFor=''>Your Email</label>
        <input type='email' placeholder='Enter Your Email'/>
        <label htmlFor=''> Write Your Message</label>
        <textarea name='message'  rows="8" placeholder='Enter Your Message'></textarea>
        <button type='submit' className='submit'>Submit</button>
     </form>

    </div> 
    </div>
  )
}

export default Contact
