import React from 'react'

const Image = ({src,alt,className}) => {
  return (
   <img className={className} src={src} alt={alt} loading='lazy'/>
  )
}

export default Image