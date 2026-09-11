import React from 'react'
import AboutHero from '../components/about/AboutHero'
import AboutMiddle from '../components/about/AboutMiddle'
import Services from '../components/layout/home/Services'
import AboutBrands from '../components/about/AboutBrands'

const AboutPage = () => {
  return (
    <div className='lg:pb-20.5 pb-10'>
        <AboutHero/>
        <AboutMiddle/>
        <Services/>
        <AboutBrands/>
    </div>
  )
}

export default AboutPage