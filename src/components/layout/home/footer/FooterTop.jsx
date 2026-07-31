import React from 'react'
import Image from '../../common/Image'
import FooterTop1 from './FooterTop1'
import FooterTop2 from './FooterTop2'
import FooterTop3 from './FooterTop3'
import FooterTop4 from './FooterTop4'
import FooterTop5 from './FooterTop5'

const FooterTop = () => {
    return (
        <div className='container flex  justify-between pb-22 border-b-2 border-[#CFCDCD]'>
            <FooterTop1/>
            <FooterTop2/>
            <FooterTop3/>
            <FooterTop4/>
            <FooterTop5/>
            
        </div>
    )
}

export default FooterTop