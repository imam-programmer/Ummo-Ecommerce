import { useState } from "react";
import { LuSlidersHorizontal } from "react-icons/lu";
import { useSelector } from "react-redux";
import Product from "../layout/common/Product";

const ShopResponsive = () => {
  const [Dropshowhide, setDropshowhide] = useState(false)
  const [Dropdown, setDropdown] = useState("Default Select")
  const [FilterOpen, setFilterOpen] = useState(false)
  const [InitialPage, setInitialPage] = useState(1)
  const AllProduct = useSelector(state => state.Products.products)

const productPerPage=Math.ceil(AllProduct.length/20)


const lastIdx=InitialPage * productPerPage;
const firstIdx=lastIdx - productPerPage
 function pagination(){
  if(lastIdx<=AllProduct.length){
    setInitialPage(InitialPage+1)
  }
 }

  return (
    <div className="container px-2.5">
      <div className="flex items-center justify-between border-b border-neutral-200 py-4">
        <button
          onClick={() => setFilterOpen(true)}
          className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] hover:opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
        >
          <LuSlidersHorizontal className="h-4 w-4" />
          Filter
        </button>

        <div className='relative'>
          <div onClick={() => setDropshowhide(!Dropshowhide)} className='flex cursor-pointer  items-center w-27 border-b-2  justify-between'>
            <button className='cursor-pointer text-[12px] font-medium uppercase whitespace-nowrap font-jost ' >{Dropdown}</button>
            <span>

              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.64332 5.84071C4.83765 6.05309 5.16231 6.05309 5.35713 5.84071L9.85239 0.940372C10.0492 0.725269 10.0492 0.376431 9.85239 0.161873C9.65557 -0.0532294 9.33589 -0.0532294 9.13908 0.161873L5 4.67294L0.861423 0.161327C0.664109 -0.0537752 0.344925 -0.0537752 0.147611 0.161327C-0.0492043 0.37643 -0.0492044 0.725267 0.147611 0.939826L4.64332 5.84071Z" fill="#222222" />
              </svg>

            </span>
          </div>
          {Dropshowhide &&
            <div className=' bg-[#bebebe]  px-2 absolute w-full z-10 py-2 flex flex-col gap-2.5'>
              <h3 className='cursor-pointer text-[12px]  font-medium uppercase  whitespace-nowrap font-jost' onClick={() => {
                setDropdown("Default Select")
                setDropshowhide(false)
              }}>Default Select</h3>

              <h3 className='cursor-pointer text-[12px]  font-medium uppercase  whitespace-nowrap font-jost' onClick={() => {
                setDropdown("low to high")
                setDropshowhide(false)
              }}>low to high</h3>
              <h3 className='cursor-pointer text-[12px] font-medium uppercase  whitespace-nowrap font-jost' onClick={() => {
                setDropdown("high to low")
                setDropshowhide(false)
              }}>high to low</h3>
            </div>
          }
        </div>
      </div>

      <div className="grid gap-x-2 grid-cols-2 sm:grid-cols-3 mt-5">

        {
          AllProduct.slice(firstIdx,lastIdx).map((item) => (
            <Product item={item} />
          ))
        }
      </div>


      <div className="text-center mt-5">
        <h3><span>SHOWING</span> <span>{Math.min(lastIdx,AllProduct.length)}</span> of <span>{AllProduct.length}</span> Items</h3>
 

        <div className="w-full sm:w-75 mx-auto h-1.5 bg-[#E4E4E4] rounded-2xl relative overflow-hidden ">
          <div className="absolute top-0 left-0 bg-amber-600 h-1.5 w-5"></div>
        </div>
    
        <button onClick={pagination} className=" text-sm font-medium relative leading-6 text-primary mt-4.25 after:content-[''] after:absolute after:h-0.5 after:w-0 after:bg-primary hover:after:w-full after:duration-300 cursor-pointer after:transition-all after:bottom-0 after:left-0 pb-1">SHOW MORE</button>
      </div>
    </div>
  )
}

export default ShopResponsive
