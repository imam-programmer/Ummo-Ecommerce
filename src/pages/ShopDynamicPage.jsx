
import Countdown from 'react-countdown';
import Header from '../components/layout/Header';
function GrayBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10 bg-white">
      {/* Diamond grid pattern, top-left */}
      <div
        className="absolute -top-10 -left-10 w-72 h-72 xs:w-80 xs:h-80 opacity-70"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #ececec 0px, #ececec 1px, transparent 1px, transparent 14px), repeating-linear-gradient(-45deg, #ececec 0px, #ececec 1px, transparent 1px, transparent 14px)",
          maskImage:
            "radial-gradient(circle at 30% 30%, black 0%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(circle at 30% 30%, black 0%, transparent 70%)",
        }}
      />

      {/* Zigzag pattern, right-middle */}
      <svg
        className="absolute top-[42%] right-[8%] w-40 h-16 opacity-70 hidden bmd:block"
        viewBox="0 0 160 40"
        fill="none"
      >
        <polyline
          points="0,30 15,10 30,30 45,10 60,30 75,10 90,30 105,10 120,30 135,10 150,30"
          stroke="#dcdcdc"
          strokeWidth="2"
        />
      </svg>

      {/* Concentric rings, top-right */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border-[36px] border-[#ececec]" />
      <div className="absolute top-4 right-20 w-32 h-32 rounded-full border-[8px] border-[#e2e2e2] hidden xs:block" />

      {/* Concentric rings, bottom-right */}
      <div className="absolute -bottom-32 -right-16 w-[26rem] h-[26rem] rounded-full border-[44px] border-[#efefef]" />
      <div className="absolute bottom-16 right-24 w-16 h-16 rounded-full border-[6px] border-[#e2e2e2] hidden xs:block" />

      {/* Faint dot near diamond */}
      <div className="absolute top-[46%] left-[4%] w-2 h-2 rounded-full bg-[#dcdcdc] hidden bmd:block" />
    </div>
  );
}





export default function ShopDynamicPage() {

  const Completionist = () => <span>You are good to go!</span>;
  const renderer = ({ hours, minutes, seconds, days }) => {

    return (
      <div className='flex gap-3 md:gap-6.25 mx-w-[340px] mt-11.25'>
        <div>
          <h3 className='text-[30px] leading-7.5 font-normal text-primary'>{days}</h3>
          <h3 className='text-base font-bold leading-7.5 text-gray'>DAYS</h3>
        </div>
        <h4 className='text-[30px] font-normal leading-7.5 text-primary'>:</h4>
        <div >
          <h3 className='text-[30px] leading-7.5 font-normal text-primary'>{hours}</h3>
          <h3 className='text-base font-bold leading-7.5 text-gray'>HOURS</h3>
        </div>
        <h4 className='text-[30px] font-normal leading-7.5 text-primary'>:</h4>
         <div >
          <h3 className='text-[30px] leading-7.5 font-normal text-primary'>{minutes}</h3>
          <h3 className='text-base font-bold leading-7.5 text-gray'>MINS</h3>
        </div >
        <h4 className='text-[30px] font-normal leading-7.5 text-primary'>:</h4>
         <div >
          <h3 className='text-[30px] leading-7.5 font-normal text-primary'>{seconds}</h3>
          <h3 className='text-base font-bold leading-7.5 text-gray'>SEC</h3>
        </div>
  
      </div>
    )
  }
    ;
  return (
    <>
  <Header/>
    <div className="font-jost  min-h-screen flex flex-col  justify-center items-center px-1">
      <GrayBackground />

      <h2 className='text-[35px] xs:text-[45px] sm:text-[70px] md:text-[90px] lg:text-[100px] font-bold text-primary uppercase'>Coming Soon</h2>
      <p className='max-w-119 text-center text-sm font-normal leading-6 text-primary'>Sorry, we couldn't find the page you where looking for. We suggest that you return to home page.</p>
      <Countdown
        date={"2026-09-31T14:22:56.397+00:00"}
        renderer={renderer}
      />

    </div>
    </>
  );
}

