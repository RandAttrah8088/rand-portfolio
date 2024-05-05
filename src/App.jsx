import React from 'react'
import Navbar from './Components/Navbar/navbar'
import Body from './Components/body/body'
import About from './Components/about/about'
import Service from './Components/Services/service'
import Projects from './Components/Myprojects/projects'
import Contact from './Components/Contact/contact'
import Footer from './Components/Footer/footer'


const App = () => {
  return (
    
    <div>
      <Navbar/>
      <Body/>
      <About/>
      <Service/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
    

  )
}

export default App
