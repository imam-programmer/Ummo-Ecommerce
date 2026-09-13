import React from 'react'
import Image from "../../components/layout/common/Image"
import MapImage from "../../assets/images/map.png"
const LocationImage = () => {
  return (
      <div className='w-full'>
        <Image className="md:h-150  w-full   object-cover" src={MapImage}/>
          </div>
  )
}

export default LocationImage