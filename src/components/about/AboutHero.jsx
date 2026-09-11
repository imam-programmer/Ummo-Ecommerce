import { useEffect } from "react";
import Image from "../layout/common/Image";
import aboutbannerImage from "../../../src/assets/images/aboutbanner.png"

function HeroGraphic() {
  return (
    <div className="relative  w-full h-137.5 bg-[#e8e8e8] ">
   
    </div>
  );
}

export default function AboutHero() {


  return (
    <div
      className="container pt-10 px-2 md:pt-19.25 bg-white"

    >
      <div className="">
        <div className="lg:px-20 xl:px-60.5">
        <h1 className="mb-6 text-2xl font-bold uppercase text-primary sm:mb-8 sm:text-3xl lg:text-[34px]">
          About Uomo
        </h1>

        </div>
        <Image className="w-full" src={aboutbannerImage}/>

        <div className="mt-10  sm:mt-14 lg:px-20 xl:px-60.5">
          <h2 className="mb-4 text-xl font-semibold text-primary sm:mb-5 sm:text-2xl">
            Our Story
          </h2>

          <p className="mb-5 text-sm leading-relaxed text-gray sm:text-[15px]">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>

          <p className="text-sm leading-relaxed text-gray sm:text-[15px]">
            Saw wherein fruitful good days image them, midst, waters upon,
            saw. Seas lights seasons. Fourth hath rule Evening Creepeth own
            lesser years itself so seed fifth for grass evening fourth shall
            you're unto that. Had. Female replenish for yielding so saw all
            one to yielding grass you'll air sea it, open waters subdue,
            hath. Brought second Made. Be. Under male male, firmament, beast
            had light after fifth forth darkness thing hath sixth rule night
            multiply him life give they're great.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:mt-12 sm:grid-cols-2 sm:gap-10">
            <div>
              <h3 className="mb-3 text-base font-semibold text-primary sm:text-lg">
                Our Mission
              </h3>
              <p className="text-sm leading-relaxed text-gray sm:text-[15px]">
                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                ea commodo consequat.
              </p>
            </div>
            <div>
              <h3 className="mb-3 text-base font-semibold text-[#222222] sm:text-lg">
                Our Vision
              </h3>
              <p className="text-sm leading-relaxed text-[#767676] sm:text-[15px]">
                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}