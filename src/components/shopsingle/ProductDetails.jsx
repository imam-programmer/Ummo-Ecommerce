import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa6";
import { LuShare2 } from "react-icons/lu";
import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";
import { useNavigate } from "react-router";
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

const thumbnails = [1, 2, 3, 4];

export default function ProductDetails() {
  const navigate = useNavigate()
  const [activeThumb, setActiveThumb] = useState(0);
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="min-h-screen bg-white font-jost text-primary">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        {/* Top bar: breadcrumb + prev/next */}


        {/* Main content: gallery + info */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-14">
          {/* Gallery */}
          <div className="flex flex-col-reverse gap-4 sm:flex-row">
            {/* Thumbnails */}
            <div className="flex shrink-0 gap-3 overflow-x-auto sm:w-20 sm:flex-col sm:overflow-visible">
              {thumbnails.map((t, i) => (
                <button
                  key={t}
                  onClick={() => setActiveThumb(i)}
                  className={`h-16 w-16 shrink-0 overflow-hidden border transition-colors sm:h-20 sm:w-full ${activeThumb === i
                      ? "border-primary"
                      : "border-transparent hover:border-gray/40"
                    }`}
                  aria-label={`View image ${i + 1}`}
                >
                  <ShapeArt className="h-full w-full" />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="aspect-square w-full flex-1 overflow-hidden bg-[#EDECE9]">
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
                Lightweight Puffer Jacket With a Hood
              </h1>

              <p className="mt-2 text-lg sm:text-[22px] font-medium text-primary">$130.00 — $170.00</p>

              <p className="mt-6.25  text-sm leading-6 font-normal text-primary">
                Phasellus sed volutpat orci. Fusce eget lore mauris vehicula
                elementum gravida nec dui. Aenean aliquam varius ipsum, non
                ultricies tellus sodales eu. Donec dignissim viverra nunc, ut
                aliquet magna posuere eget.
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
                  SKU: <span className="text-primary">N/A</span>
                </p>
                <p>
                  CATEGORIES:{" "}
                  <span className="text-primary">
                    Casual &amp; Urban Wear, Jackets, Men
                  </span>
                </p>
                <p>
                  TAGS:{" "}
                  <span className="text-primary">biker, black, bomber, leather</span>
                </p>
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
            <ul className="flex flex-col gap-2">
           <li className="flex items-center"> <span className="w-20 block capitalize text-primary">Brand</span> : <span className="ml-5">Black</span></li>
           <li className="flex items-center"><span className="w-20 block capitalize text-primary">stock</span> : <span className="ml-5">Regular</span></li>
           <li className="flex items-center"><span className="w-20 block capitalize text-primary">Weight</span> : <span className="ml-5">650g</span></li>
           <li className="flex items-center"><span className="w-20 block capitalize text-primary">SKU</span> : <span className="ml-5">JKT-001</span></li>
            </ul>
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="mx-auto mt-10 max-w-3xl text-sm text-gray sm:mt-14">
            Reviews content goes here.
          </div>
        )}
      </div>
    </div>
  );
}