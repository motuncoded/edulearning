import React from 'react'
import Footer from '../components/Footer'
import HeaderContent from '../components/HeaderContent'
import Landing from '../components/Landing'
import Section from '../components/Section'
import SectionTwo from '../components/SectionTwo'
import Subscribe from "../components/Subscribe"
import Carousel from '../components/Carousel';
import Categories from '../components/Categories'

function Home() {
  return (
    <div className='home'>
<Landing/>
<HeaderContent />
<Section/>
<Categories/>
<Carousel/>
<SectionTwo/>
<Subscribe/>
<Footer/>   
 </div>
  )
}

export default Home