import React from 'react'
import Footer from '../components/Footer'
import HeaderContent from '../components/HeaderContent'
import Landing from '../components/Landing'
import Section from '../components/Section'
import SectionTwo from '../components/SectionTwo'
import Testimonial from '../components/Testimonial'

function Home() {
  return (
    <div className='home'>
<Landing/>
<HeaderContent />
<Section/>
<SectionTwo/>
<Testimonial/>
<Footer/>   
 </div>
  )
}

export default Home