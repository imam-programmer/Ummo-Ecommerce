import React from 'react'
import FooterTop from './layout/home/footer/FooterTop'
import FooterBottom from './layout/home/footer/FooterBottom'


const Footer = () => {
  return (
    <footer className='bg-[#E4E4E4] md:pt-25 pt-12.25'>
        <FooterTop/>
        <FooterBottom/>
    </footer>
  )
}

export default Footer