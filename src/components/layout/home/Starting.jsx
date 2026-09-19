import React from 'react'
import startingimage2 from "../../../assets/images/startingimage2.png"
import startingimage from "../../../assets/images/startingimage.png"
import Image from '../common/Image'
import { Link } from 'react-router'
const Starting = () => {
    return (
        <section className='md:mt-25 mt-3.75'>
            <div className="container">
                <div className='flex justify-between gap-y-3.75 flex-col md:flex-row md:gap-2 '>
                    <div className='md:w-172.5 h-77.5 md:h-99.5  bg-[#D6001C] flex justify-between lg:pl-12.5 pl-5.75 md:pr-2.5 items-end'>

                        <div className='mb-12.75'>

                            <h3 className='lg:text-[18px] whitespace-nowrap font-medium  text-white'>STARTİNG AT $39</h3>
                            <h2 className='lg:text-[26px] whitespace-nowrap text-[22px]  font-medium  shrink-0 text-white lg:mb-3.75 lg:mt-2'>Women’s Dresses</h2>
                            <Link className='uppercase text-white text-[12px] lg:text-sm leading-6 after:content-[""] after:w-0 after:duration-300 hover:after:w-12.5 after:h-0.5 after:bg-white after:absolute after:bottom-0 relative after:left-0 font-medium'>
                                SHOP NOW
                            </Link>
                        </div>

                        <div className='h-full relative '>
                            <Image className="h-full w-full object-cover" src='../images/startingImage1.png' alt="startingimage" />
                            <div className='h-full    absolute w-full top-0 left-0'></div>
                        </div>

                    </div>

                    <div className='md:w-172.5 h-77.5 md:h-99.5 relative'>
                        <Image className="w-full h-full object-cover" src='./images/startingImage2.png' alt="startingimage2" />
                        <div className='absolute bottom-12.75 lg:left-12.5 left-5.75'>
                            <h3 className='lg:text-lg font-medium text-black '>STARTİNG AT $39</h3>
                            <h2 className='text-[22px] lg:text-[26px] font-medium text-black  lg:mb-3.75 lg:mt-2 '>Men’s Sportswear</h2>
                            <Link className='uppercase text-black text-[12px] lg:text-sm leading-6 after:content-[""] after:w-0 after:duration-300 hover:after:w-12.5 hover:text-white transition-all after:h-0.5 after:bg-white after:absolute after:bottom-0 relative after:left-0 font-medium'>
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