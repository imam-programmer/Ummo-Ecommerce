import React, { useState } from 'react'
import LocationCard from './LocationCard';
const STORES = [
  {
    id: "london",
    city: "London",
    address: "1418 River Drive, Suite 35 Cottonhall, CA 9622",
    country: "United States",
    phone: "+1 246-345-0695",
    hours: "10 am - 10 pm EST, 7 days a week",
    pin: { top: "62%", left: "36%" },
  },
  {
    id: "istanbul",
    city: "Istanbul",
    address: "1418 River Drive, Suite 35 Cottonhall, CA 9622",
    country: "United States",
    phone: "+1 246-345-0695",
    hours: "10 am - 10 pm EST, 7 days a week",
    pin: { top: "40%", left: "42%" },
  },
  {
    id: "new-york",
    city: "New York",
    address: "1418 River Drive, Suite 35 Cottonhall, CA 9622",
    country: "United States",
    phone: "+1 246-345-0695",
    hours: "10 am - 10 pm EST, 7 days a week",
    pin: { top: "48%", left: "78%" },
  },
];
const LocationSidebar = () => {
      const [searchinput, setsearchinput] = useState("");
  const [activeId, setActiveId] = useState("istanbul");

const filterlocation=STORES.filter((str)=>str.city.toLowerCase().includes(searchinput.trim().toLowerCase()))
  return (
   <div className="w-full md:w-117 mb-5 md:mb-0">
  

        <div className=" ">
          {/* Sidebar */}
          <div className="flex flex-col">
            {/* Search */}
            <div className=" relative">
              <input
                type="text"
                value={searchinput}
                onChange={(e) => setsearchinput(e.target.value)}
                placeholder="Enter your country or city"
                className="w-full border border-gray-300 py-3 pl-4 pr-10 font-jost text-[13px] text-primary placeholder-gray outline-none focus:border-primary"
              />
              <svg
                className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>

            {/* Store list */}
            <div className="mt-2 max-h-140 overflow-y-auto pr-2">
              
               {filterlocation.length===0?
               <p>Not found</p>
               :
               filterlocation.map((store)=>(

                  <LocationCard
                    key={store.id}
                    store={store}
                    isActive={store.id === activeId}
                    onSelect={() => setActiveId(store.id)}
                  />
               ))}
               
              
             
            </div>
          </div>

          {/* Map */}
        
        </div>
      </div>
  )
}

export default LocationSidebar