import React from 'react'
import { useSelector } from 'react-redux'
import Product from '../components/layout/common/Product'
import { useNavigate } from 'react-router'

const ClickProductPage = () => {
    const Clickproduct = useSelector((state) => state.clickCategory.categoryProduct)
    console.log(Clickproduct)
    const navigate = useNavigate()

    return (
        <div className='container px-2.5 my-5'>
            <h2 className='capitalize'><span className='cursor-pointer' onClick={()=>navigate("/")}>Home</span> / collection</h2>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.75 mt-3.75'>

            {
                Clickproduct.map((item) => (
                    <Product key={item.id} item={item} />
                ))
            }
            </div>

        </div>
    )
}

export default ClickProductPage