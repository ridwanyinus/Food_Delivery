import React from "react";

const Newsletter = () => {
   return (
      <section className="px-12 py-24 flex w-full xl:justify-between max-xl:flex-col" id="contact">
         <div className="flex-1">
            <h1 className="text-popping max-xs:text-4xl max-lg:pb-2 text-[46px] font-semibold text-black leading-[126.087%] tracking-[0.23px]">Subscribe to our newsletter</h1>
            <p className="text-popping text-base text-black leading-[162.5%] tracking-[0.08px] ">Browse local restaurants and businesses for delivery by entering your address blow.</p>
         </div>
         <div className="contain flex justify-end">
            <div className="bg-white rounded-[31.5px] mt-8 sm:w-[80%] pl-4 py-1 xs:py-2 pr flex justify-between w-full ">
               <input
                  type="email"
                  name="location"
                  id="2"
                  placeholder="Enter your email address..."
                  className="placeholder:border-none outline-none text-[14px] placeholder:text-[#ABACB4] placeholder:xs:text-[14px] placeholder:font-light placeholder:tracking-[0.07px] max-xs:placeholder:text-[12px] placeholder:leading-[100%]"
               />
               <button className="text-white bg-primary rounded-[56px] px-2 py-2  xs:py-2 xs:px-3 hover:bg-primary xs:text-[15px] xl:text-lg font-semibold leading-normal button-shadow text-small">
                  Send
               </button>
            </div>
         </div>
      </section>
   );
};

export default Newsletter;
