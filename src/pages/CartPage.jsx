import React from 'react'
import CartProduct from '../components/cart/cartproductDesign/CartProduct'

const CartPage = () => {
  return (
    <div className='container mt-16.25'>
      <h2 className='text-[35px] font-bold text-primary uppercase'>Cart</h2>

      <div className='mt-12 pb-2.5 flex '>
        <div className='flex gap-2.5 w-117.5  relative before:absolute before:-bottom-2.5 before:left-0 before:h-0.5 before:w-full before:bg-primary'>
          <h3 className='text-[18px] font-medium text-primary'>01</h3>
          <div>
            <h3 className='text-[18px] font-medium text-primary'>SHOPPING BAG</h3>

            <h4 className='text-[14px] font-normal leading-7.5 text-gray'>Manage Your Items List</h4>
          </div>
        </div>



        <div className='flex gap-2.5 w-117.5  relative before:absolute before:-bottom-2.5 before:left-0 before:h-0.5 before:w-full before:bg-[#E4E4E4]'>
          <h3 className='text-[18px] font-medium text-gray'>02</h3>
          <div>
            <h3 className='text-[18px] font-medium text-gray'>SHIPPING AND CHECKOUT</h3>

            <h4 className='text-[14px] font-normal leading-7.5 text-gray'>Checkout Your Items List</h4>
          </div>
        </div>


                <div className='flex gap-2.5 w-117.5  relative before:absolute before:-bottom-2.5 before:left-0 before:h-0.5 before:w-full before:bg-[#E4E4E4]'>
          <h3 className='text-[18px] font-medium text-gray'>03</h3>
          <div>
            <h3 className='text-[18px] font-medium text-gray'>CONFIRMATION</h3>

            <h4 className='text-[14px] font-normal leading-7.5 text-gray'>Review And Submit Your Order</h4>
          </div>
        </div>
      </div>


      <CartProduct/>
    </div>
  )
}

export default CartPage