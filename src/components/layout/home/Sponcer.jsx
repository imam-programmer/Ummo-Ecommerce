import React from 'react'
import Title from '../common/Title'
import sponcerData from "../../../api/sponcerdata.json"
import Image from '../common/Image'
const Sponcer = () => {
  console.log(sponcerData)
  return (
    <section className='mt-20.75'>
      <div className="container">

        <Title name="@UOMO" />
        <div className='grid grid-cols-8 items-center mt-8.5'>
{
  sponcerData.map((item)=>(
<Image className="h-30 w-30 object-contain" src={item.image}/>
  ))
}
        </div>
      </div>
    </section>
  )
}

export default Sponcer