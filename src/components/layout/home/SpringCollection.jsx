import React from 'react'
import SpringImage from "../../../assets/images/SpringCollection.png"
import Image from '../common/Image'
import { Link } from 'react-router'
import Countdown from 'react-countdown';
const SpringCollection = () => {
    const Completionist = () => <span>You are good to go!</span>;


    const renderer = ({ days, hours, minutes, seconds }) => {

        return (
            <div className='flex gap-3.5 md:gap-6.25 md:mt-29.75 mt-[25.69px]'>
                <div>

                    <h2 className='md:text-[30px] text-[18px] font-normal text-primary'>{days}</h2>
                    <h3 className='md:text-[16px] text-[14px] font-bold text-gray uppercase'>DAYS</h3>
                </div>

                <h2 className='md:text-[30px] text-[18px] leading-7.5 font-normal text-primary'>:</h2>
                <div>

                    <h2 className='md:text-[30px] text-[18px] font-normal text-primary'>{hours}</h2>
                    <h3 className='md:text-[16px] text-[14px] font-bold text-gray uppercase'>HOURS</h3>
                </div>

                <h2 className='md:text-[30px] text-[18px] leading-7.5 font-normal text-primary'>:</h2>
                <div>

                    <h2 className='md:text-[30px] text-[18px] font-normal text-primary'>{minutes}</h2>
                    <h3 className='md:text-[16px] text-[14px] font-bold text-gray uppercase'>MINS</h3>
                </div>

                <h2 className='md:text-[30px] text-[18px] leading-7.5 font-normal text-primary'>:</h2>
                <div>

                    <h2 className='md:text-[30px] text-[18px] font-normal text-primary'>{seconds}</h2>
                    <h3 className='md:text-[16px] text-[14px] font-bold text-gray uppercase'>SEC</h3>
                </div>


            </div>
        )

    };



    return (
        <section className='bg-[#ebebeb] md:py-7 mt-12.5 md:mt-0'>
            <div className="container">
                <div className='flex pl-7.75 md:pl-auto pt-18.5 md:pt-auto pb-6 md:pb-auto md:p-11.5 justify-between items-end'>
                    <div>
                        <h3 className='text-sm font-medium leading-6 text-[#c32929]  after:content-[""] after:duration-300 after:w-10 after:h-0.5 after:bg-[#c32929] after:absolute after:top-2 relative after:-left-15 ml-15'>DEAL OF THE WEEK</h3>
                        <h2 className='uppercase text-[30px] w-43 md:w-auto  md:text-[70px] font-normal text-primary'><span className='font-bold'>Spring</span> Collection</h2>
                        <Link className='uppercase text-primary text-sm leading-6 after:content-[""] after:w-0 after:duration-300 hover:after:w-12.5 after:h-0.75 after:bg-primary after:absolute after:bottom-0 relative after:left-0 font-normal'>
                            SHOP NOW
                        </Link>


                        <Countdown
                            date={"2026-12-31T14:22:56.397+00:00"}
                            renderer={renderer}
                        />
                    </div>
                    <div className='hidden md:block'><Image src={SpringImage} alt="springimage" /></div>
                </div>


            </div>
        </section>
    )
}

export default SpringCollection