import React, { useState } from 'react'
import ShopBanner from '../components/shop/ShopBanner'
import ShopFilter from '../components/shop/ShopFilter'
import ShopAllProducts from '../components/shop/ShopAllProducts'
import ShopResponsive from '../components/shop/ShopResponsive'

const ShopPage = () => {
  const [FilterOpen, setFilterOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className='mb-25.25'>
      <ShopBanner />
      <div className='container hidden lg:flex justify-between mt-9 gap-15'>
        <ShopFilter currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <ShopAllProducts currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>

      <div className='lg:hidden'>
        <ShopResponsive />
      </div>
    </div>
  )
}

export default ShopPage