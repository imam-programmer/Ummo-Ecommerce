
import { FaMapMarkerAlt } from "react-icons/fa";
import ContactForm from "../components/contact/ContactForm";
import Image from "../components/layout/common/Image";
import MapImage from "../assets/images/maps.png"
const PINS = [
  { top: "42%", left: "24%" },
  { top: "76%", left: "48%" },
  { top: "48%", left: "71%" },
];

const STORES = [
  {
    city: "Store in London",
    address: "1418 River Drive, Suite 35 Cottonhall, CA 9622",
    country: "United States",
    email: "sale@ucmo.com",
    phone: "+1 246-345-0695",
  },
  {
    city: "Store in Istanbul",
    address: "1418 River Drive, Suite 35 Cottonhall, CA 9622",
    country: "United States",
    email: "sale@ucmo.com",
    phone: "+1 246-345-0695",
  },
];

export default function ContactPage() {
  return (
    <div className="w-full bg-white ">
     

      {/* Heading */}
      <div className="pt-10 pb-4 lg:pb-8 container pl-2.5 lg:pl-59.25">
        <h1
          className="text-[22px] md:text-[24px] lg:text-[35px] font-bold  text-primary uppercase"
          
        >
          CONTACT US
        </h1>
      </div>

      {/* Map  useing section=============== ===================*/}
<Image className="w-full" src={MapImage} alt="contactimage"/>


      {/* Content */}
      <div className="container">
      <div className="mx-auto max-w-232.5 px-5 md:px-2.5 lg:px-0 py-6 lg:py-12">
        {/* Store info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8  mb-12">
          {STORES.map((store) => (
            <div key={store.city}>
              <h3
                className="text-[16px] md:text-[26px] font-medium mb-3 text-primary"
               
              >
                {store.city}
              </h3>
              <p className="text-[13px] leading-6 " >
                {store.address}
                <br />
                {store.country}
              </p>
              <p className="text-[13px] leading-6 mt-3" style={{ color: "var(--color-gray)" }}>
                {store.email}
                <br />
                {store.phone}
              </p>
            </div>
          ))}
        </div>

        {/* Get in touch */}
     <ContactForm/>
      </div>

      </div>

    
    </div>
  );
}