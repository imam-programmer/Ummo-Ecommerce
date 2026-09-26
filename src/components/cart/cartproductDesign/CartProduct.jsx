import { useDispatch, useSelector } from 'react-redux'
import Image from '../../layout/common/Image'
import { quentityDecrease, quentityIncrease, RemoveItem } from '../../../slices/cartSlice'

const CartProduct = (props) => {
    const dispatch = useDispatch()

    const handleIncrease = (incres) => {
        dispatch(quentityIncrease(incres))
    }
    const handleDecrease = (decr) => {
        dispatch(quentityDecrease(decr))
    }
    const handleRemove=(Remove)=>{
        dispatch(RemoveItem(Remove))
    }

    return (
        <>
        {/* //Desktop cart side design============================= */}
        <div className='sm:flex gap-15 hidden w-full xl:w-230  items-center py-7.5 border-b border-[#E4E4E4]'>
            <div className='flex items-center gap-7.5'>
                <Image className='h-30 w-30 ' src={props.image} />
                <h2 className='text-[16px] font-normal text-primary w-70  '>{props.title}</h2>

            </div>
            <div className='flex items-center'>
                <h3 className='mr-15 text-[16px] font-normal text-gray'>${props.price}</h3>
                <div className='h-12.5 w-27.5 mr-20.5 leading-12.5  flex justify-between items-center px-3.75 border-3 border-[#E4E4E4]'>
                    <button className='  px-2 cursor-pointer text-[16px] text-gray font-normal' onClick={() => handleDecrease(props)}>-</button>
                    <span className=' text-[16px] text-gray font-normal'>{props.quantity}</span>
                    <button className=' px-2 cursor-pointer text-[16px] text-gray font-normal' onClick={() => handleIncrease(props)}>+</button>
                </div>
                <h3 className='text-[16px] font-medium text-primary'>${(props.quantity * props.price).toFixed(2)}</h3>


                <h2 className='ml-15 '>
                    <button className='cursor-pointer' onClick={() => handleRemove(props)}>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.259435 8.85506L9.11449 0L10 0.885506L1.14494 9.74056L0.259435 8.85506Z" fill="#767676" />
                            <path d="M0.885506 0.0889838L9.74057 8.94404L8.85506 9.82955L0 0.97449L0.885506 0.0889838Z" fill="#767676" />
                        </svg>
                    </button>
                </h2>
            </div>
        </div>
        

        {/* /* // responsive cart side design============================= */ }
              <div className='flex sm:hidden  relative gap-3 w-full items-center py-7 border-b border-[#E4E4E4]'>
            <div className=' w-2/4 '>
                <Image className='h-30 w-30 ' src={props.image} />
                <h2 className='sm:text-[16px] text-[14px] font-normal text-primary w-full  '>{props.title}</h2>

            </div>
            <div className=' w-2/4 '>
                <h3 className=' text-[16px] font-normal text-gray'>${props.price}</h3>
                <div className=' flex items-center gap-5  mt-5'>

                <div className=' px-2  w-15 flex justify-between items-center  border-2 border-[#E4E4E4]'>
                    <button className='  cursor-pointer text-[16px] text-gray font-normal' onClick={() => handleDecrease(props)}>-</button>
                    <span className=' text-[16px] text-gray font-normal'>{props.quantity}</span>
                    <button className='  cursor-pointer text-[16px] text-gray font-normal' onClick={() => handleIncrease(props)}>+</button>
                </div>
                <h3 className='text-[16px] font-medium text-primary'>${(props.quantity * props.price).toFixed(2)}</h3>
                </div>

                <h2 className='absolute right-0 top-10'>
                    <button className='cursor-pointer' onClick={() => handleRemove(props)}>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.259435 8.85506L9.11449 0L10 0.885506L1.14494 9.74056L0.259435 8.85506Z" fill="#767676" />
                            <path d="M0.885506 0.0889838L9.74057 8.94404L8.85506 9.82955L0 0.97449L0.885506 0.0889838Z" fill="#767676" />
                        </svg>
                    </button>
                </h2>
            </div>
        </div>

        </>
    )
}

export default CartProduct