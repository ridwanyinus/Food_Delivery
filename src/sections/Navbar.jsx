import React from "react";
import { FiAlignRight } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import logo from "/images/logo.png";
import { navLinks } from "../constant/data";
import { useState } from "react";

const Navbar = () => {
   const [toggleMenu, settoggleMenu] = useState(false);
   return (
      <nav className="flex items-center max-lg:px-10  justify-between lg:justify-around max-lg:py-5 py-4 max-lg:bg-dark">
         <div>
            <a href="/">
               <img src={logo} alt="logo" className="shrink-0" />
            </a>
         </div>

         <div className="flex flex-[0.5] justify-evenly max-lg:hidden">
            {navLinks.map((items) => (
               <ul key={items.label} className="text-[14px] text-dark font-medium leading-[200%]">
                  <li>
                     <a href={items.href} className="hover:border-b-2 hover:border-dark hover:text-primary">
                        {items.label}
                     </a>
                  </li>
               </ul>
            ))}
         </div>

         <div className="flex text-[16px] font-semibold leading-[175%] gap-4 items-center max-lg:hidden">
            <a href="/" className="text-dark">
               Login
            </a>
            <button className="text-white bg-[#E94339] rounded-3xl py-1 px-4 hover:bg-primary">Sign Up</button>
         </div>

         <div className="lg:hidden relative">
            {toggleMenu ? <IoClose size={26} color="#fff" onClick={() => settoggleMenu(false)} /> : <FiAlignRight size={28} color="#fff" onClick={() => settoggleMenu(true)} />}

            {toggleMenu && (
               <ul className="text-[14px] text-white font-medium leading-[200%] w-[180px] px-4 py-4 bg-dark absolute top-[40px] right-0   rounded scale-up-top ">
                  {navLinks.map((items) => (
                     <li className="pb-1" key={items.label}>
                        <a href={items.href}>{items.label}</a>
                     </li>
                  ))}
                  <div className="flex flex-col text-[16px] font-semibold leading-[175%] gap-3  lg:hidden pt-1">
                     <a href="/" className=" text-[#AFAFAF]">
                        Login
                     </a>
                     <button className="text-white bg-[#E94339] rounded-3xl py-1 px-3 hover:bg-primary">Sign Up</button>
                  </div>
               </ul>
            )}
         </div>
      </nav>
   );
};

export default Navbar;
