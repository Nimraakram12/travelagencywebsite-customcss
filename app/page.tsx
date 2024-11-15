

import React from 'react'
import Destinations from './components/Destinations'
import Hero from './components/Hero'
import Packages from './components/Packages'
import About from './components/About'
import Contact from './components/Contact'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Destinations/>
      <Packages/>
      <About/>
      <Contact/>
    </div>
  )
}

export default Home