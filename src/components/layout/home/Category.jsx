import React from 'react'
import categorydata from "../../../api/categorydata.json"
import Image from '../common/Image'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { Click } from '../../../slices/clickCategorySlice'
const Category = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const Alldata = useSelector((state) => state.AllProduct.Products)
  const categore = Alldata.map((item) => item.category)
  const uniqueCategory = [...new Set(categore)];


    // in this section we are filtering the products based on the category and storing them in separate arrays for women collections
  const WomenDressescat = uniqueCategory.find((cat) => cat === "womens-dresses")
  const WomenBagcat = uniqueCategory.find((cat) => cat === "womens-bags")
  const Womenjularycat = uniqueCategory.find((cat) => cat === "womens-jewellery")
  const Womenshowcat = uniqueCategory.find((cat) => cat === "womens-shoes")
  const Womenwatchcat = uniqueCategory.find((cat) => cat === "womens-watches")
  const WomenCollection=Alldata.filter((cat) => cat.category === WomenDressescat || cat.category === WomenBagcat || cat.category === Womenjularycat || cat.category === Womenshowcat || cat.category === Womenwatchcat)


    // in this section we are filtering the products based on the category and storing them in separate arrays for men collections
  const ManShowcat=uniqueCategory.find((cat) => cat === "mens-shoes")
  const ManShirtcat=uniqueCategory.find((cat) => cat === "mens-shirts")
  const Manwatchcat=uniqueCategory.find((cat) => cat === "mens-watches")
  const ManCollection=Alldata.filter((cat) => cat.category === ManShowcat || cat.category === ManShirtcat || cat.category === Manwatchcat)

  function handledispatch(id) {
    if(id==1){
      dispatch(Click(WomenCollection))
      navigate("/clickproduct")
    }
    else if(id==2){
      dispatch(Click(ManCollection))
      navigate("/clickproduct")
    }else{
      alert("No products available for this category")
    }
  
  }
  return (
    <div className='xl:mt-25.25 lg:mt-10 mt-3.75 px-3 xl:px-0 mb-3'>
      <div className="container">
        <div className='flex flex-col md:grid md:grid-cols-4 gap-3.75 md:gap-2 lg:gap-7.5'>
          {
            categorydata.map((item) => (
              <div key={item.id} className={`h-71.25 md:h-auto lg:h-auto w-full relative ${item.id == 1 ? "col-span-2 row-span-2" : item.id == 2 && "col-span-2"}  `}>
                <Image className="h-full w-full object-cover object-[80%]" src={item.image} alt={item.name} />
                <div className=' absolute bottom-10 left-10 md:bottom-3 pr-2 md:left-3 lg:left-5 lg:bottom-5 xl:bottom-10 xl:left-10'>
                  <h3 className='uppercase text-sm md:text-[12px] lg:text-sm leading-6 font-normal text-primary '>hot list</h3>
                  <h2 className='uppercase font-medium text-[22px] md:text-[16px] lg:text-[18px] xl:text-[26px] text-primary'><span className='font-bold block lg:inline'>{item.name}</span> collection</h2>
                  {
                    item.id == 4 && <p className='text-[14px] lg:text-sm md:text-[12px] leading-6 lg:leading-6 md:leading-4  font-normal text-primary max-w-53.25 xl:mt-2 mb-4 xl:mb-4 md:mb-1'>Surprise someone with the gift they
                      really want.</p>
                  }
                  <button className='flex items-center gap-2'>
                    <button onClick={()=>handledispatch(item.id)} className='uppercase text-primary text-sm lg:text-sm cursor-pointer md:text-[12px] leading-6 after:content-[""] after:w-0 after:duration-300 hover:after:w-12.5 after:h-0.5 after:bg-primary after:absolute after:bottom-0 relative after:left-0'>
                      {
                        item.id == 4 ? "DISCOVER MORE" : " SHOP NOW"
                      }
                    </button>
                  </button>
                </div>
              </div>
            )

            )
          }
        </div>
      </div>
    </div>
  )
}

export default Category