import React from 'react'
import Footer from '../components/Footer'
import HeaderContent from '../components/HeaderContent'
import Landing from '../components/Landing'
import Section from '../components/Section'
import SectionTwo from '../components/SectionTwo'
import Subscribe from "../components/Subscribe"
import Carousel from '../components/Carousel';

function Home() {
  return (
    <div className='home'>
<Landing/>
<HeaderContent />
<Section/>
<Carousel/>
<SectionTwo/>
<Subscribe/>
<Footer/>   
 </div>
  )
}

export default Home