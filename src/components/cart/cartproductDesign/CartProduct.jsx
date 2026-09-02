import React from 'react'
import Image from '../../layout/common/Image'

const CartProduct = () => {
    return (
        <div className='flex gap-61.75 items-center py-7.5 border-b border-[#E4E4E4]'>
            <div className='flex items-center gap-7.5'>
                <Image className='h-30 w-30' src='./images/cartimage.png' />
                <h2 className='text-[16px] font-normal text-primary'>Zessi Dresses</h2>

            </div>
            <div className='flex items-center'>
                <h3 className='mr-25.5 text-[16px] font-normal text-gray'>$99</h3>
                <div className='h-12.5 w-27.5 mr-14.5 leading-12.5  flex justify-between items-center px-3.75 border-3 border-[#E4E4E4]'>
                    <button className='cursor-pointer text-[16px] text-gray font-normal'>-</button>
                    <span className=' text-[16px] text-gray font-normal'>1</span>
                    <button className='cursor-pointer text-[16px] text-gray font-normal'>+</button>
                </div>
                <h3 className='text-[16px] font-medium text-primary'>$399</h3>


                <h2 className='ml-23.5 '>
                    <button className='cursor-pointer'>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.259435 8.85506L9.11449 0L10 0.885506L1.14494 9.74056L0.259435 8.85506Z" fill="#767676" />
                            <path d="M0.885506 0.0889838L9.74057 8.94404L8.85506 9.82955L0 0.97449L0.885506 0.0889838Z" fill="#767676" />
                        </svg>
                    </button>
                </h2>
            </div>
        </div>
    )
}

export default CartProduct