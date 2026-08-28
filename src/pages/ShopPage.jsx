import React, { useState } from 'react'
import ShopBanner from '../components/shop/ShopBanner'
import ShopFilter from '../components/shop/ShopFilter'
import ShopAllProducts from '../components/shop/ShopAllProducts'

const ShopPage = () => {
   const [currentPage, setCurrentPage] = useState(1);
  return (
    <>
      <ShopBanner />
      <div className='container flex justify-between mt-9 gap-15'>
        <ShopFilter currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <ShopAllProducts currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>

    </>
  )
}

export default ShopPage