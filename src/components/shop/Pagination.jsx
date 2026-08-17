import React, { useEffect, useState } from 'react'


const Pagination = ({item,ProductPerPage,CurrPage}) => {
    const [first, setfirst] = useState([])
let arr=[]
    for(let i=1;i<=Math.ceil(item.length/ProductPerPage);i++){
        arr.push(i)
    }

useEffect(() => {
setfirst(arr)
}, [])

  return (
    <div>{first.map((item,idx)=>(
        <button key={idx} onClick={()=>CurrPage(item)} className='text-[18px]   focus:bg-green-700 focus:text-white cursor-pointer  ml-2  w-7 border border-green-400 rounded-sm hover:bg-green-700'>{item}</button>
    ))
    }
    </div>
  )
}

export default Pagination