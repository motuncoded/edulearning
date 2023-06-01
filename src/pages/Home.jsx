import React from 'react'
import Footer from '../components/Footer'
import HeaderContent from '../components/HeaderContent'
import Landing from '../components/Landing'
import Section from '../components/Section'
import SectionTwo from '../components/SectionTwo'
import Testimonial from '../components/Testimonial'
import Carousel from '../components/Carousel';

function Home() {
  return (
    <div className='home'>
<Landing/>
<HeaderContent />
<Section/>
<Carousel/>
<Footer/>   
 </div>
  )
}

export default Home