import React from 'react'
import ShopBanner from '../components/shop/ShopBanner'
import ShopFilter from '../components/shop/ShopFilter'
import ShopAllProducts from '../components/shop/ShopAllProducts'

const ShopPage = () => {
  return (
    <>
      <ShopBanner />
      <div className='container flex justify-between'>
        <ShopFilter/>
        <ShopAllProducts/>
      </div>

    </>
  )
}

export default ShopPage