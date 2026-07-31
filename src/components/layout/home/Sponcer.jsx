import React from 'react'
import Title from '../common/Title'
import sponcerData from "../../../api/sponcerdata.json"
import Image from '../common/Image'
const Sponcer = () => {
  return (
    <section className='md:mt-20.75 mt-12.5 px-2 md:px-0'>
      <div className="container">

        <Title name="@UOMO" />
        <div className='flex flex-wrap gap-x-2 justify-center  md:mt-8.5 mt-0'>
{
  sponcerData.map((item)=>(
<Image key={item.id} className="md:h-30 h-20 w-20 md:w-40 object-contain" src={item.image}/>
  ))
}
        </div>
      </div>
    </section>
  )
}

export default Sponcer