import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Product from "../layout/common/Product";

export default function RelatedProduct() {
  const detailsProduct = useSelector((state) => state.clickProductDetails.Details)
  const [Products, setProducts] = useState([])

  useEffect(() => {
    axios.get('https://dummyjson.com/products?limit=200').then((res) => {
      setProducts(res.data.products)
    }).catch((error) => {
      console.log(error)
    })
  }, [])

  const FilterPro = Products.filter((item) => item.category == detailsProduct.category)

  return (
    <section className="bg-white font-jost text-primary">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl">
          RELATED <span className="font-semibold">PRODUCTS</span>
        </h2>

        <div className="mt-8 grid  justify-center grid-cols-1 xs:grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
          {FilterPro.slice(0,4).map((product) => (
            <Product item={product}/>
          ))}
        </div>
      </div>
    </section>
  );
}