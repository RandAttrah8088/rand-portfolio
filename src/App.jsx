import React from 'react'
import Navbar from './Components/Navbar/navbar'
import Body from './Components/body/body'
import About from './Components/about/about'
import Service from './Components/Services/service'
import Projects from './Components/Myprojects/projects'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Body/>
      <About/>
      <Service/>
      <Projects/>
    </div>
  )
}

export default App
