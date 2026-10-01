import React, { useEffect, useState } from 'react'
import Image from '../../common/Image'
import footerImage from "../../../../assets/images/footerimage.png"
import { useNavigate } from 'react-router'
import { auth } from '../../../../../firebase.config'
import { onAuthStateChanged } from 'firebase/auth'
import { useSelector } from 'react-redux'
const FooterTop5 = () => {
  const navigate = useNavigate()
  const [User, setuser] = useState(null)
  const WishProduct = useSelector((state) => state.wishList.wishProduct)
  function handleHome() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate('/')
  }
  function handleShop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate('/shop')
  }
  function handleWishlist() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate('/wishlist')
  }
  function handlelogin() {
    navigate('/login')
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setuser(user);
      } else {
        setuser(null)
      }
    });
    return () => unsubscribe();
  }, []);
  return (
    <div className='mt-12.5 md:mt-0 relative'>
      <h2 className='text-[18px] font-medium'>SUBSCRIBE</h2>
      <p className='w-68.25 text-[14px] font-normal leading-6 text-primary mt-7.5 mb-3.75'>Be the first to get the latest news about trends,
        promotions, and much more!</p>
      <div className='w-full h-13.75 bg-white flex justify-between px-5 mb-10.25 '>
        <input className='text-[14px] font-normal leading-6 text-primary' type="email" placeholder='Your email address' />
        <button className='text-[14px] font-medium leading-6 text-primary' >JOIN</button>

      </div>
      <h3 className='text-primary text-[15px] font-medium mb-2.75'>Secure payments</h3>
      <Image src={footerImage} alt="footerimage" />


      <div className='md:hidden fixed bottom-0 w-full left-0  z-50  flex justify-between items-center  bg-white pt-2.5 pb-2.25 px-3 mt-5' >
        <button onClick={handleHome} className='flex flex-col items-center text-[13px] font-normal text-[#000000]'>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_171_682)">
              <path d="M17.6977 8.04688L16.1771 6.66134V2.06701C16.1771 1.77469 15.9401 1.53767 15.6477 1.53767H11.9874C11.6951 1.53767 11.4581 1.77465 11.4581 2.06701V2.36141L9.62165 0.68808C9.26717 0.365029 8.73262 0.365064 8.37828 0.688045L0.302275 8.04692C0.0183538 8.30567 -0.0754781 8.70434 0.0632483 9.06254C0.20201 9.42075 0.539861 9.65219 0.924012 9.65219H2.21386V17.0252C2.21386 17.3175 2.45085 17.5545 2.7432 17.5545H7.16983C7.46215 17.5545 7.69917 17.3175 7.69917 17.0252V12.5485H10.3008V17.0252C10.3008 17.3175 10.5378 17.5546 10.8301 17.5546H15.2566C15.5489 17.5546 15.7859 17.3176 15.7859 17.0252V9.65222H17.076C17.4601 9.65222 17.798 9.42075 17.9368 9.06258C18.0755 8.70434 17.9817 8.30567 17.6977 8.04688ZM15.2566 8.59352C14.9642 8.59352 14.7272 8.83051 14.7272 9.12287V16.4959H11.3595V12.0192C11.3595 11.7269 11.1225 11.4898 10.8301 11.4898H7.16983C6.8775 11.4898 6.64048 11.7268 6.64048 12.0192V16.4959H3.27252V9.12287C3.27252 8.83055 3.03553 8.59352 2.74317 8.59352H1.27424L9.00002 1.55384L11.631 3.95118C11.7859 4.09237 12.0096 4.12875 12.2013 4.04413C12.3931 3.9594 12.5168 3.76949 12.5168 3.55989V2.59636H15.1184V6.89513C15.1184 7.04408 15.1811 7.18608 15.2913 7.28642L16.7257 8.59352H15.2566Z" fill="black" />
            </g>
            <defs>
              <clipPath id="clip0_171_682">
                <rect width="18" height="18" fill="white" />
              </clipPath>
            </defs>
          </svg>
          Home
        </button>

        <button onClick={handleShop} className='flex flex-col items-center text-[13px] font-normal text-[#000000]'>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_171_678)">
              <path d="M16.8037 12.0285L11.9362 9.10021C11.2525 8.68891 10.492 8.42785 9.70506 8.32966V7.59618C9.70506 7.18296 9.94168 6.7983 10.3225 6.59217C11.2687 6.08007 11.8258 5.09377 11.7763 4.01807C11.7108 2.59329 10.5588 1.43958 9.13226 1.37408C7.53307 1.30116 6.2246 2.57433 6.2246 4.1484C6.2246 4.53677 6.53949 4.85153 6.92772 4.85153C7.31609 4.85153 7.63085 4.53677 7.63085 4.1484C7.63085 3.37002 8.2778 2.74242 9.06758 2.77882C9.76659 2.81095 10.3394 3.38375 10.3715 4.08276C10.3961 4.61477 10.1208 5.10243 9.65302 5.35552C8.81778 5.80761 8.29881 6.66619 8.29881 7.59618V8.32925C7.51521 8.42648 6.75743 8.68534 6.07559 9.09335L1.20123 12.0104H1.2011C0.461305 12.4531 0.000978114 13.2638 1.68088e-05 14.126C-0.00149381 15.4905 1.1014 16.5962 2.46604 16.5978L15.5281 16.6131H15.5311C16.8911 16.6131 17.9984 15.5073 18 14.1469C18.001 13.2848 17.5426 12.4729 16.8037 12.0285ZM15.5311 15.2068C15.5307 15.2068 15.5302 15.2068 15.5299 15.2068L2.46782 15.1916C1.8817 15.1909 1.40558 14.7137 1.40627 14.1277C1.40668 13.7565 1.60484 13.4075 1.92331 13.2169H1.92317L6.79767 10.3001C8.15613 9.48707 9.85324 9.48831 11.2113 10.3051L16.0789 13.2334C16.3968 13.4247 16.5942 13.7742 16.5938 14.1453C16.5931 14.7308 16.1165 15.2068 15.5311 15.2068Z" fill="black" />
            </g>
            <defs>
              <clipPath id="clip0_171_678">
                <rect width="18" height="18" fill="white" />
              </clipPath>
            </defs>
          </svg>
          Shop
        </button>
        <button onClick={handleWishlist} className='flex flex-col items-center text-[13px] relative font-normal text-[#000000]'>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_171_673)">
              <path d="M14.7146 2.64623C12.9744 0.906571 10.1436 0.906571 8.40394 2.64623L7.99988 3.05006L7.59604 2.64623C5.85639 0.906335 3.02532 0.906335 1.28566 2.64623C-0.418673 4.35057 -0.42974 7.05212 1.26 8.93047C2.80115 10.643 7.34645 14.343 7.5393 14.4996C7.67022 14.606 7.82775 14.6578 7.98434 14.6578C7.98952 14.6578 7.9947 14.6578 7.99964 14.6576C8.16164 14.6651 8.32483 14.6096 8.45999 14.4996C8.65284 14.343 13.1986 10.643 14.7402 8.93024C16.4297 7.05212 16.4187 4.35057 14.7146 2.64623ZM13.69 7.98529C12.4884 9.32017 9.18547 12.0733 7.99964 13.0503C6.81381 12.0735 3.51157 9.32065 2.3102 7.98553C1.13143 6.67537 1.12036 4.8095 2.28453 3.64533C2.87909 3.051 3.65992 2.7536 4.44074 2.7536C5.22156 2.7536 6.00238 3.05077 6.59694 3.64533L7.48514 4.53353C7.59086 4.63925 7.72414 4.70236 7.86401 4.72449C8.091 4.77324 8.33731 4.70989 8.51391 4.53376L9.40258 3.64533C10.5919 2.45644 12.5266 2.45667 13.7152 3.64533C14.8794 4.8095 14.8683 6.67537 13.69 7.98529Z" fill="#222222" />
            </g>
            <defs>
              <clipPath id="clip0_171_673">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <span className="absolute -top-1 right-0 bg-[#B9A16B] h-4 w-4 leading-4 rounded-full text-[10px] text-white">{WishProduct.length}</span>
          Wishlist
        </button>
        {User ?
          <button className=" w-7 rounded-full cursor-pointer flex flex-col items-center" onClick={() => navigate("/profile")}>
            <Image className=" w-full rounded-full" src={User?.photoURL} alt="user Image" />
            <h3 className='flex flex-col items-center text-[13px] font-normal text-[#000000]'>Profile</h3>
          </button>
          :
          <button onClick={handlelogin} className="cursor-pointer flex flex-col items-center">
            <svg
              className="w-3.75 lg:w-5"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_6_29)">
                <path
                  d="M10.0175 11.2652C3.99775 11.2652 0.682495 14.108 0.682495 19.2701C0.682495 19.6732 1.00982 20 1.41369 20H18.6212C19.0251 20 19.3524 19.6732 19.3524 19.2701C19.3524 14.1083 16.0372 11.2652 10.0175 11.2652ZM2.17149 18.5402C2.4591 14.6805 5.09505 12.7251 10.0175 12.7251C14.9399 12.7251 17.5759 14.6805 17.8637 18.5402H2.17149Z"
                  fill="#222222"
                />
                <path
                  d="M10.0174 0C7.25222 0 5.16711 2.12336 5.16711 4.93895C5.16711 7.83699 7.34292 10.1944 10.0174 10.1944C12.6918 10.1944 14.8676 7.83699 14.8676 4.93918C14.8676 2.12336 12.7825 0 10.0174 0ZM10.0174 8.7348C8.14917 8.7348 6.6295 7.03211 6.6295 4.93918C6.6295 2.92313 8.05436 1.45984 10.0174 1.45984C11.949 1.45984 13.4053 2.95547 13.4053 4.93918C13.4053 7.03211 11.8856 8.7348 10.0174 8.7348Z"
                  fill="#222222"
                />
              </g>
              <defs>
                <clipPath id="clip0_6_29">
                  <rect width="20.0348" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <h3 className='flex flex-col items-center text-[13px] font-normal text-[#000000]'>Login</h3>
          </button>
        }

      </div>
    </div>
  )
}

export default FooterTop5