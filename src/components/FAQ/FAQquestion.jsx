import React, { useState } from 'react'
import { FiMinus } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
const FAQquestion = ({Ftitle,Fdes,Stitle,Sdes,Ttitle,Tdes}) => {
    const [showFirstAns, setshowFirstAns] = useState(false)
    const [showsecondAns, setshowsecondAns] = useState(false)
    const [showthirdAns, setshowthirdAns] = useState(false)
    function handlefirstshowDetails() {
        setshowFirstAns(!showFirstAns)
        setshowsecondAns(false)
        setshowthirdAns(false)
    }
       function handlesecondshowDetails() {
        setshowsecondAns(!showsecondAns)
        setshowFirstAns(false)
         setshowthirdAns(false)
    }
      function handlethirdshowDetails() {
        setshowthirdAns(!showthirdAns)
        setshowsecondAns(false)
        setshowFirstAns(false)
    }
    return (
        <div>
            <div className='mb-8'>
                <div className={`flex justify-between ${showFirstAns ? "border-b border-black":"border-b border-[#E4E4E4]"} mb-2 md:mb-7`}>
                    <h4 className='text-sm text-primary'>{Ftitle}</h4>
                    <button className='cursor-pointer' onClick={handlefirstshowDetails}>
                        {showFirstAns ?
                            <FiMinus />
                            :
                            <GoPlus />
                        }
                    </button>

                </div>
                {showFirstAns&&
                <p className='text-[12px] md:text-sm text-primary font-normal'>{Fdes} </p>
                }
            </div>

              <div  className='mb-8'>
                <div className={`flex justify-between ${showsecondAns ? "border-b border-black":"border-b border-[#E4E4E4]"}  mb-2 md:mb-7`}>
                    <h4 className='text-sm text-primary'>{Stitle}</h4>
                    <button className='cursor-pointer' onClick={handlesecondshowDetails}>
                        {showsecondAns ?
                            <FiMinus />
                            :
                            <GoPlus />
                        }
                    </button>

                </div>
                {showsecondAns&&
                <p className='text-[12px] md:text-sm text-primary font-normal'>{Sdes} </p>
                }
            </div>

              <div className='mb-8'>
                <div className={`flex justify-between ${showthirdAns ? "border-b border-black":"border-b border-[#E4E4E4]"} mb-2 md:mb-7`}>
                    <h4 className='text-sm text-primary'>{Ttitle}</h4>
                    <button className='cursor-pointer' onClick={handlethirdshowDetails}>
                        {showthirdAns ?
                            <FiMinus />
                            :
                            <GoPlus />
                        }
                    </button>

                </div>
                {showthirdAns&&
                <p className='text-[12px] md:text-sm text-primary font-normal'>{Tdes}</p>
                }
            </div>

        </div>
    )
}

export default FAQquestion