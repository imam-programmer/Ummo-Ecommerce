import React, { useEffect, useState } from 'react'
import Title from '../common/Title'
import treadydata from "../../../api/treadydata.json"
import Product from '../common/Product'
import axios from 'axios'
const TrendyProducts = () => {
    const [activeCategory, setActiveCategory] = useState("all")
    const [products, setProducts] = useState([])
    const [filterProducts, setFilterProduct] = useState([])
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products').then((res => {
            setProducts(res.data)
        })).catch((err) => {
            console.log(err)
        })


    }, [])
    function handleTabs(category) {
        setActiveCategory(category)

        let filterProduct = products.filter((item) => item.category == category)
        setFilterProduct(filterProduct)

    }

    return (
        <section className='mt-23.5'>
            <div className="container">
                <Title name="our trendy" namebold="products" />
                <ul className='flex justify-center gap-13.5 mb-10 mt-7.5'>

                    {treadydata.map((item) => (
                        <li key={item.id} >
                            <button onClick={() => handleTabs(item.name)}
                                className={`text-base font-medium text-gray cursor-pointer uppercase ${item.name == activeCategory ? 'text-primary' : 'text-gray'}`}>{item.name}</button>
                        </li>
                    ))}

                </ul>
                <div className='grid grid-cols-4 gap-3'>

                    {filterProducts.length > 0 ?
                        filterProducts.map((item) => (
                            <Product item={item} key={item.id} />
                        ))
                        : products.map((item) => (

                            <Product item={item} key={item.id} />
                        ))}
                </div>
            </div>
        </section>
    )
}

export default TrendyProducts