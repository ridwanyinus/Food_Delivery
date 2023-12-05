import React from "react";
import appstore from "/images/AppStore.svg";
import googlePlay from "/images/GooglePlay.svg";
import hero from "/images/hero.png";

const Hero = () => {
   return (
      <section className="px-12 py-16 xs:py-20 xl:padding bg-white flex items-start gap-16 xl:gap-20 max-lg:flex-col w-full max-lg:items-center" id="aboutUs">
         <div className="flex-1 ">
            <h1 className="text-3xl xs:text-4xl sm:text-5xl  xl:text-[61px] leading-[120%] font-bold sm:w-[585px] text-dark mb-6">Your Favorite Food Delivery Partner</h1>
            <h3 className="text-lg font-normal leading-[167%] tracking-[-0.18px] text-dark sm:w-[528px]">
               The food at your doorstep. Why starve when you have us. You hunger partner. Straight out of the oven to your doorstep.
            </h3>

            <div className="bg-[#F6F6F6] rounded-[56px] mt-8 sm:w-[80%] pl-4 py-1 pr-0 flex justify-between   xl:gap-20 ninety-sreen ">
               <input
                  type="text"
                  name="location"
                  id="1"
                  placeholder="Enter your delivery location"
                  className="placeholder:border-none outline-none text-[14px] placeholder:text-[#AFAFAF] placeholder:xs:text-[14px] placeholder:font-medium placeholder:tracking-[0.07px] bg-[#F6F6F6] max-xl:w-[60%]   max-xs:placeholder:text-[12px] "
               />
               <button className="text-white bg-primary rounded-[56px] px-2 py-2  xs:py-3 xs:px-5 hover:bg-primary xs:text-[15px] xl:text-lg font-semibold leading-normal button-shadow text-small ">
                  Order Now
               </button>
            </div>

            <div className="flex gap-6 pt-8 ">
               <img src={appstore} alt="AppStore" className="max-xs:w-[45%]" />
               <img src={googlePlay} alt="AppStore" className="max-xs:w-[45%]" />
            </div>
         </div>

         <div className="flex-1 bg-[#F2EBDA] rounded-3xl xs:rounded-[36px] px-8 pt-8  max-xl:flex-[0.8]">
            <img src={hero} alt="hero" className="" />
         </div>
      </section>
   );
};

export default Hero;
