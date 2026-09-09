import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa6";
import { LuShare2 } from "react-icons/lu";
import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Reviews from "./Reviews";
import AdditionalInformation from "./AdditionalInformation";

const ShapeArt = ({ className = "" }) => (
  <svg
    viewBox="0 0 400 400"
    className={className}
    preserveAspectRatio="xMidYMid slice"
  >
    <rect width="400" height="400" fill="#EDECE9" />
    <circle cx="150" cy="230" r="120" fill="#D8D6D1" />
    <polygon points="230,90 340,300 120,300" fill="#C7C4BD" />
  </svg>
);



export default function ProductDetails() {
  const detailsProduct = useSelector((state) => state.clickProductDetails.Details)
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="min-h-screen bg-white font-jost text-primary">
      <div className="mx-auto container px-4 py-8 sm:px-4 md:px-0 lg:py-12">


        {/* Main content: gallery + info */}
        <div className="grid grid-cols-1 gap-8  lg:grid-cols-2 lg:gap-25">
          <div className="flex flex-col-reverse gap-4 sm:flex-row">
            <div className="aspect-square w-full  overflow-hidden bg-[#EDECE9]">
              <ShapeArt className="h-full w-full" />
            </div>
          </div>
          {/* Product info */}
          <div>
            <div className="mb-8 flex items-center justify-between text-sm font-medium leading-6 text-primary sm:mb-10">
              <div>
                <span className="cursor-pointer" onClick={() => navigate("/")}>
                  HOME
                </span>
                <span className="ml-1">/</span> THE SHOP
              </div>
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-1 cursor-pointer transition-colors hover:text-primary">
                  <MdOutlineChevronLeft size={14} />
                  PREV
                </button>
                <button className="flex  items-center gap-1 cursor-pointer transition-colors hover:text-primary">
                  NEXT
                  <MdOutlineChevronRight size={14} />
                </button>
              </div>
            </div>




            <div className="flex flex-col">
              <h1 className="text-2xl font-normal sm:text-[26px] text-primary">
                {detailsProduct.title}
              </h1>

              <p className="mt-2 text-lg sm:text-[22px] font-medium text-primary">${detailsProduct.price}</p>

              <p className="mt-6.25  text-sm leading-6 font-normal text-primary">
                {detailsProduct.description}
              </p>

              <button className="mt-7 w-fit cursor-pointer bg-primary px-8 py-3 text-sm font-normal  text-white transition-opacity hover:opacity-90">
                BUY ON AMAZON.COM
              </button>

              <div className="mt-6 flex items-center gap-6  font-medium leading-6 text-[13px] text-primary">
                <button className="flex items-center gap-2 transition-colors hover:text-gray cursor-pointer">
                  <FaRegHeart size={15} strokeWidth={1.5} />
                  ADD TO WISHLIST
                </button>
                <button className="flex items-center gap-2 transition-colors hover:text-gray cursor-pointer">
                  <LuShare2 size={15} strokeWidth={1.5} />
                  SHARE
                </button>
              </div>

              <div className="mt-8 space-y-2 border-t border-gray/15 pt-6 text-xs text-gray">
                <p>
                  SKU: <span className="text-primary">{detailsProduct.sku}</span>
                </p>
                <p>
                  CATEGORIES:{" "}
                  <span className="text-primary">
                    {detailsProduct.category}
                  </span>
                </p>


                <ul className="flex gap-2 ">
                  TAGS:{" "}
                  {detailsProduct.tags?.map((item,id) => (

                    <li key={id} className="text-primary">{item},</li>
                  ))}
                </ul>

              </div>
            </div>


          </div>
        </div>

        {/* Tabs */}
        <div className="mt-14 border-b border-gray/15 sm:mt-20">
          <div className="flex flex-wrap justify-center gap-8 text-center text-xs tracking-wide sm:gap-12">
            {[
              { id: "description", label: "DESCRIPTION" },
              { id: "additional", label: "ADDITIONAL INFORMATION" },
              { id: "reviews", label: "REVIEWS (3)" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative pb-4 cursor-pointer transition-colors ${activeTab === tab.id
                  ? "text-primary"
                  : "text-gray hover:text-primary"
                  }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <span className="absolute bottom-0 left-0 h-px w-full bg-primary" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Tab content */}
        {activeTab === "description" && (
          <div className="mx-auto mt-10 max-w-3xl sm:mt-14">
            <h2 className="text-base font-medium">
              Sed do eiusmod tempor incididunt ut labore
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-gray">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
              in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum. Sed et perspiciatis unde omnis iste natus error sit
              voluptatem accusantium doloremque laudantium, totam rem
              aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
              architecto beatae vitae dicta sunt explicabo.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2">
              <div>
                <h3 className="text-sm font-medium">Why choose product?</h3>
                <ul className="mt-4 space-y-2 text-sm text-gray">
                  {[
                    "Great to buy fabric with soft and smooth",
                    "Simple, Configurable (e.g. size, color, etc.), bundled",
                    "Downloadable/Digital Products, Virtual Products",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gray" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-medium">Sample Number List</h3>
                <ol className="mt-4 space-y-2 text-sm text-gray">
                  {[
                    "Create Storespec.fic attributes on the fly",
                    "Simple, Configurable (e.g. size, color, etc.), bundled",
                    "Downloadable/Digital Products, Virtual Products",
                  ].map((item, i) => (
                    <li key={item} className="flex gap-2">
                      <span className="shrink-0">{i + 1}.</span>
                      {item}
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium">Lining</h3>
              <p className="mt-3 text-sm text-gray">
                100% Polyester, Main: 100% Polyester.
              </p>
            </div>
          </div>
        )}

        {activeTab === "additional" && (
          <div className="mx-auto mt-10 max-w-3xl  text-gray sm:mt-14">
         <AdditionalInformation/>
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="mx-auto mt-10 max-w-3xl text-sm text-gray sm:mt-14">
            <Reviews/>
          </div>
        )}
      </div>
    </div>
  );
}