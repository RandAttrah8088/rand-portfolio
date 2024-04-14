import React from 'react'
import './service.css'
import patternlogo from "../../assets/patternlogo.png";
import Services_Data from '../../assets/services_data';
import arrow_icon from '../../assets/arrow_icon.svg'
const Service = () => {
  return (
    <div className='services'>
      <div className='title'>
        <h1>My Services</h1>
        <img src={patternlogo} alt=''/>
      </div>
      <div className='container'>
        {Services_Data.map((service,index)=>{

          return <div key={index} className='format'>
            
            <h2>{service.s_name}</h2>
            <p>{service.s_desc}</p>
            <div className='readmore'>
              <p>Read More</p>
              <img src={arrow_icon} alt=''/>
            </div>
        </div>

        })}
         </div>
    </div>
  )
}

export default Service
