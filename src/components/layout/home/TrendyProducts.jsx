import React, { useState } from 'react'
import Title from '../common/Title'
import treadydata from "../../../api/treadydata.json"
const TrendyProducts = () => {
    const [activeCategory, setActiveCategory] = useState(1)
    return (
        <section className='mt-23.5'>
            <div className="container">
                <Title name="our trendy" namebold="products" />
                <ul className='flex justify-center gap-13.5'>

                    {treadydata.map((item) => (
                        <li >
                            <button onClick={() => setActiveCategory(item.id)}
                                className={`text-base font-medium text-gray ${item.id == activeCategory ? 'text-primary' : 'text-gray'}`}>{item.name}</button>
                        </li>
                    ))}


                </ul>
            </div>
        </section>
    )
}

export default TrendyProducts