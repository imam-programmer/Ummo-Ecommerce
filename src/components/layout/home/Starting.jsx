import React from 'react'
import startingimage2 from "../../../assets/images/startingimage2.png"
import startingimage from "../../../assets/images/startingimage.png"
import Image from '../common/Image'
import { Link } from 'react-router'
const Starting = () => {
    return (
        <section className='md:mt-25 mt-3.75'>
            <div className="container">
                <div className='flex justify-between gap-y-3.75 flex-col md:flex-row '>
                    <div className='md:w-172.5 h-77.5 md:h-99.5  bg-[#D6001C] flex justify-between md:pl-12.5 pl-5.75 md:pr-2.5 items-end'>

                        <div className='mb-12.75'>

                            <h3 className='text-[18px] whitespace-nowrap font-medium  text-white'>STARTİNG AT $39</h3>
                            <h2 className='md:text-[26px] whitespace-nowrap text-[22px]  font-medium  shrink-0 text-white mb-3.75 mt-2'>Women’s T-Shirts</h2>
                            <Link className='uppercase text-white text-sm leading-6 after:content-[""] after:w-0 after:duration-300 hover:after:w-12.5 after:h-0.5 after:bg-white after:absolute after:bottom-0 relative after:left-0 font-medium'>
                                SHOP NOW
                            </Link>
                        </div>

                        <div className='h-full relative'>
                            <Image className="h-full " src={startingimage} alt="startingimage" />
                            <div className='h-full bg-[#d6001dda]   absolute w-full top-0 left-0'></div>
                        </div>
                        
                    </div>

                    <div className='md:w-172.5 h-77.5 md:h-99.5 relative'>
                        <Image className="w-full h-full" src={startingimage2} alt="startingimage2" />
                        <div className='absolute bottom-12.75 md:left-12.5 left-5.75'>
                            <h3 className='text-lg font-medium text-primary '>STARTİNG AT $39</h3>
                            <h2 className='text-[22px] md:text-[26px] font-medium text-primary  mb-3.75 mt-2'>Men’s Sportswear</h2>
                            <Link className='uppercase text-primary text-sm leading-6 after:content-[""] after:w-0 after:duration-300 hover:after:w-12.5 after:h-0.5 after:bg-primary after:absolute after:bottom-0 relative after:left-0 font-medium'>
                                SHOP NOW
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Starting