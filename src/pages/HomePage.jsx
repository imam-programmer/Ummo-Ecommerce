import React from 'react'
import Banner from '../components/layout/home/Banner'
import Category from '../components/layout/home/Category'
import TrendyProducts from '../components/layout/home/TrendyProducts'
import SpringCollection from '../components/layout/home/SpringCollection'
import Starting from '../components/layout/home/Starting'

const HomePage = () => {
  return (
   <>
   <Banner/>
   <Category/>
   <TrendyProducts/>
   <SpringCollection/>
   <Starting/>
   </>
  )
}

export default HomePage