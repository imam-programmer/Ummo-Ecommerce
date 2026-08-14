import React, { useEffect, useState } from 'react'
import Title from '../common/Title'
import treadydata from "../../../api/treadydata.json"
import Product from '../common/Product'
import axios from 'axios'
const TrendyProducts = () => {
    const [activeCategory, setActiveCategory] = useState("all")
    const [products, setProducts] = useState([])
    const [filterProducts, setFilterProduct] = useState([])
    const [showAllProducts, setshowAllProducts] = useState(false)
    useEffect(() => {
        axios.get('https://dummyjson.com/products').then((res => {
            setProducts(res.data.products)

        })).catch((err) => {
            console.log(err)
        })


    }, [])
    console.log(products)
    function handleTabs(category) {
        setActiveCategory(category)

        let filterProduct = products.filter((item) => item.category == category)
        setFilterProduct(filterProduct)

    }
    function handleProductShow() {
        setshowAllProducts(!showAllProducts)
    }

    return (
        <section className='md:mt-23.5 md:mb-25 mt-9.25'>
            <div className="container  px-3 md:px-0">
                <Title name="our trendy" namebold="products" />
                <ul className='flex justify-center flex-wrap md:gap-13.5  gap-x-8 gap-y-2 mb-10 mt-7.5'>

                    {treadydata.map((item) => (
                        <li key={item.id} >
                            <button onClick={() => handleTabs(item.name)}
                                className={`text-[14px] md:text-base after:bg-primary relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:duration-300 after:content-[""] hover:after:w-[70%] font-medium text-gray cursor-pointer uppercase ${item.name == activeCategory ? 'text-primary' : 'text-gray'}`}>{item.name}</button>
                        </li>
                    ))}

                </ul>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-3 gap-x-3.5 md:gap-x-0'>

                    {filterProducts.length > 0 ?
                        filterProducts.map((item) => (
                            <Product item={item} key={item.id} />
                        ))
                        : !showAllProducts ?
                            products.slice(0, 8).map((item) => (


                                <Product item={item} key={item.id} />


                            )
                            ) : products.map((item) => (
                                <>
                                    <Product item={item} key={item.id} />
                                </>
                            )
                            )
                    }
                </div>
                {filterProducts.length == 0 &&

                    <div className='text-center'>
                        <button onClick={handleProductShow} className='font-medium text-sm relative leading-6 text-primary after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary after:w-0 after:duration-300 after:content-[""] mt-5.5 md:mt-10.25 hover:after:w-[70%] cursor-pointer'>{showAllProducts ? "SEE LESS PRODUCT" : "SEE ALL PRODUCT"}

                        </button>
                    </div>
                }
            </div>
        </section>
    )
}

export default TrendyProducts