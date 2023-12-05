import React from "react";
import quote from "/images/quote.svg";
import prevForward from "/images/prevfor.svg";

const Clients = () => {
   return (
      <section className="bg-white padding flex flex-col text-center justify-center items-center">
         <div className="flex justify-center flex-col items-center">
            <h1 className="text-3xl xs:text-4xl sm:text-[44px] font-bold text-[#111111] leading-[122%] pb-6 feedback">Our Clients Feedback</h1>
            <p className="text-base text-black leading-[162.5%] sm:w-[532px] pb-10">
               The food at your doorstep. Why starve when you have us. You hunger partner. Straight out of the oven to your doorstep.
            </p>
            <img src={quote} alt="quote" className="w-[60px] h-[55px] shrink-0 mb-10" />
            <h2 className="lg:w-[787px] text-[20px] xs:text-[24px] font-medium leading-[141.667%] italic pb-10">
               “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
               laboris nisi”
            </h2>
            <h3 className="text-lg text-[#111111] font-semibold tracking-[-0.18px] leading-normal ">Mitchell Marsh</h3>
            <p className="text-[#616161] text-[14px] tracking-[-0.14px] pb-4">CEO, Bexon Agency</p>
            <img src={prevForward} alt="prev-and-forward" />
         </div>
      </section>
   );
};

export default Clients;
