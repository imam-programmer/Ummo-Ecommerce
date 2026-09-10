import React from "react";
import Header from "../components/layout/Header";
import { useNavigate } from "react-router";


export default function NotFoundPage() {
  const navigate=useNavigate()
  function handleGoHome(){
    navigate('/')
  }
  return (
    <div>
<Header/>
    <div className="font-jost relative min-h-screen flex items-center justify-center overflow-hidden">
  

      <div className="container px-6">
        <div className="flex flex-col items-center text-center max-w-xl mx-auto py-24">
          <h1 className="text-primary text-6xl xs:text-7xl bmd:text-[100px] font-bold tracking-tight">
            OOPS!
          </h1>

          <p className="text-primary text-lg xs:text-[26px]">
            Page not found.
          </p>

          <p className="text-primary font-normal text-xs xs:text-sm mt-3.25 leading-6 max-w-119">
            Sorry, we couldn't find the page you where looking for. We suggest that you return to home page.
          </p>

          <button onClick={handleGoHome} className="mt-8 cursor-pointer bg-primary text-white text-xs xs:text-sm tracking-wide px-20 xs:px-35 py-3.5 hover:opacity-90 transition-opacity duration-200">
            GO BACK
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}