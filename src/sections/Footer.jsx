import React from "react";
import logo from "/images/logo.png";
import appStore from "/images/footerAppStore.svg";
import googleplay from "/images/footerGooglePlay.svg";
import { footerLinks } from "../constant/data";

const Footer = () => {
   return (
      <footer className="px-12 pb-12">
         <div className="xl:flex xl:gap-16 py-24 ">
            <div className="flex flex-col gap-12">
               <img src={logo} alt="logo" className="w-[42px] h-[42px] shrink-0 " />
               <div className="flex gap-2 xs:gap-6 mt-12">
                  <img src={appStore} alt="appStore" className=" max-xs:w-[40%]" />
                  <img src={googleplay} alt="googleplay" className=" max-xs:w-[40%]" />
               </div>
            </div>
            <section className="flex flex-wrap  xl:flex-1 xl:justify-evenly  justify-between max-xl:mt-16 max-sm:flex-col max-sm:gap-10">
               {footerLinks.map((items) => (
                  <div key={items.id}>
                     <p className="text-white text-[17px] font-semibold leading-[150%] pb-4">{items.title}</p>
                     {items.links.map((list) => (
                        <ul key={list.id}>
                           <li>
                              <a href={list.link} className="text-[#AAA7B1] hover:text-primary text-popping text-[14px] leading-[242.847%]">
                                 {list.name}
                              </a>
                           </li>
                        </ul>
                     ))}
                  </div>
               ))}
            </section>
         </div>
         <div className="w-full h-[1px] bg-[#B5B2B2] bg-opacity-50 md:mt-20 mb-12"></div>

         <div className="flex justify-around items-center  max-md:flex-col-reverse flex-wrap">
            <p className="text-[#B5B2B2] text-[15px] leading-[157%] font-normal">© 2023 pizza.All right reserved</p>
            <div className="flex gap-5 xs:gap-10 mb-2 md:mb-4">
               <p className="text-[17px] leading-[150%] text-[#B5B2B2]">Privacy </p>
               <p className="text-[17px] leading-[150%] text-[#B5B2B2]">Policy </p>
               <p className="text-[17px] leading-[150%] text-[#B5B2B2]">Terms </p>
               <p className="text-[17px] leading-[150%] text-[#B5B2B2]">Services </p>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
