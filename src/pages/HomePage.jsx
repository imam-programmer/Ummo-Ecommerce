import React from 'react'
import Banner from '../components/layout/home/Banner'
import Category from '../components/layout/home/Category'
import TrendyProducts from '../components/layout/home/TrendyProducts'
import SpringCollection from '../components/layout/home/SpringCollection'
import Starting from '../components/layout/home/Starting'
import LimitedEdition from '../components/layout/home/LimitedEdition'
import Sponcer from '../components/layout/home/Sponcer'

const HomePage = () => {
  return (
   <>
   <Banner/>
   <Category/>
   <TrendyProducts/>
   <SpringCollection/>
   <Starting/>
   <LimitedEdition/>
   <Sponcer/>
   </>
  )
}

export default HomePage