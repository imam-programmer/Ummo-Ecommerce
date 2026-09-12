import React from 'react'

const ContactForm = () => {
  return (
    <div>
         <h3
          className="text-[16px] font-medium mb-5 text-primary"
          
        >
          Get In Touch
        </h3>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="max-w-232.5 flex flex-col gap-4"
        >
          <div>
            <label
              className="block text-[12px] mb-1.5 text-primary"
            
            >
              Name *
            </label>
            <input
              type="text"
              placeholder="Name"
              className="w-full border px-3 py-2.5 text-[13px] outline-none text-primary border-[#dcdcdc] focus:border-primary transition-colors"

            />
          </div>

          <input
            type="email"
            placeholder="Email address *"
            className="w-full border px-3 py-2.5 text-[13px] outline-none border-[#dcdcdc] text-primary focus:border-primary transition-colors"
           
          />

          <textarea
            placeholder="Your Review"
            rows={5}
            className="w-full border px-3 py-2.5 text-primary border-[#dcdcdc] text-[13px] outline-none resize-none focus:border-primary transition-colors"
     
          />

          <button
            type="submit"
            className="self-start px-8 py-3 lg:px-18.5 lg:py-5.5 bg-primary text-[14px] tracking-[0.08em] font-medium text-white mt-1"

          >
            SUBMIT
          </button>
        </form>
    </div>
  )
}

export default ContactForm