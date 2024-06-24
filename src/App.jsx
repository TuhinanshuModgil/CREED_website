import React from 'react'


function App() {
  return (
    <div>
       <Navbar/>
      
      <Hero/>
      <AboutUs/>
      <OurTeam/>
      <FAQ/>
      

       {/* <Services/> */}


       {/* <Services_2/> */}

      {/* <Project/> */}
       {/* <Contact/> */}
       


      <Footer/>


    </div>
  )
}
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import OurTeam from './components/OurTeam'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Project from './components/Project'
import Contact from './components/Contact'
import Services from './components/Services_1'
import Services_2 from './components/Services_2'

export default App
