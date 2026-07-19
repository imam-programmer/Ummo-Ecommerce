import React from 'react'

const Title = ({name,namebold}) => {
  return (
    <h2 className='uppercase font-normal text-[35px] text-primary text-center'>{name} <span className='font-bold'>{namebold}</span></h2>
  )
}

export default Title