import React, { useEffect, useState } from 'react'
import Title from '../common/Title'
import treadydata from "../../../api/treadydata.json"
import Product from '../common/Product'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { Allitem } from '../../../slices/AllProductSlice'

const TrendyProducts = () => {
    const [activeCategory, setActiveCategory] = useState("all")
    const [products, setProducts] = useState([])
    const [filterProducts, setFilterProduct] = useState([])
    const [showAllProducts, setShowAllProducts] = useState(false)
    const dispatch=useDispatch()

    useEffect(() => {
        axios.get('https://dummyjson.com/products?limit=200')
            .then((res) => {
                setProducts(res.data.products)
                dispatch(Allitem(res.data.products))
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    function handleTabs(category) {
        setActiveCategory(category)

        if (category === "all") {
            setFilterProduct([])
            return
        }

        const filtered = products.filter((item) => item.category === category)
        setFilterProduct(filtered)
    }

    function handleProductShow() {
        setShowAllProducts(!showAllProducts)
    }

    return (
        <section className='mt-9 mb-12 md:mt-20 md:mb-24 px-4 sm:px-6 xl:px-0 overflow-x-hidden'>
            <div className="container mx-auto">
                <Title name="our trendy" namebold="products" />

                <ul className='flex justify-center flex-wrap gap-x-4 sm:gap-x-8 md:gap-x-12 gap-y-2 mb-5 lg:mb-10 mt-3 lg:mt-7'>
                    {treadydata.map((item) => (
                        <li key={item.id}>
                            <button
                                onClick={() => handleTabs(item.name)}
                                className={`text-[13px] sm:text-sm md:text-base after:bg-primary relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:duration-300 after:content-[""] hover:after:w-[70%] font-medium cursor-pointer uppercase whitespace-nowrap ${item.name === activeCategory ? 'text-primary' : 'text-gray'
                                    }`}
                            >
                                {item.name}
                            </button>
                        </li>
                    ))}
                </ul>

                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5 justify-center'>
                    {filterProducts.length > 0
                        ? filterProducts.slice(0,8).map((item) => (
                            <Product item={item} key={item.id} />
                        ))
                        : !showAllProducts
                            ? products.slice(0, 8).map((item) => (
                                <Product item={item} key={item.id} />
                            ))
                            : products.slice(0,20).map((item) => (
                                <Product item={item} key={item.id} />
                            ))
                    }
                </div>

                {filterProducts.length === 0 && (
                    <div className='text-center'>
                        <button
                            onClick={handleProductShow}
                            className='font-medium text-xs sm:text-sm relative leading-6 text-primary after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary after:w-0 after:duration-300 after:content-[""] mt-6 md:mt-10 hover:after:w-[70%] cursor-pointer'
                        >
                            {showAllProducts ? "SEE LESS PRODUCT" : "SEE ALL PRODUCT"}
                        </button>
                    </div>
                )}
            </div>
        </section>
    )
}

export default TrendyProducts