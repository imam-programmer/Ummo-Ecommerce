import React, { useState } from 'react'
import ShopBanner from '../components/shop/ShopBanner'
import ShopFilter from '../components/shop/ShopFilter'
import ShopAllProducts from '../components/shop/ShopAllProducts'
import ShopResponsive from '../components/shop/ShopResponsive'
import { LuSlidersHorizontal } from "react-icons/lu";
const ShopPage = () => {
  const [FilterOpen, setFilterOpen] = useState(false)
   const [currentPage, setCurrentPage] = useState(1);
  return (
    <div className='mb-25.25'>
      <ShopBanner />
      <div className='container flex justify-between mt-9 gap-15'>
        <ShopFilter currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <ShopAllProducts currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
<div className=''>
<div className="flex items-center justify-between gap-4 border-b border-neutral-200 py-4">
          <button
            onClick={() => setFilterOpen(true)}
            className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] hover:opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
          >
            <LuSlidersHorizontal className="h-4 w-4" />
            Filter
          
          </button>

          {/* <SortMenu  /> */}
        </div>
<ShopResponsive/>
</div>
    </div>
  )
}

export default ShopPage