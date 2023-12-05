import React from "react";
import ProductCard from "../components/ProductCard";
import pizza from "/images/pizza.png";
import burger from "/images/burger.png";
import sushi from "/images/sushi.svg";
import quote from "/images/blackQuote.svg";
import motorcycle from "/images/motorcycle.svg";
import pasta from "/images/pasta.png";

import salad from "/images/salad.png";
import desserts from "/images/desserts.png";

const Products = ({ label, imgUrl }) => {
   return (
      <section className="padding flex-col flex max-xs:justify-center max-xs:items-center w-full">
         <div className="flex items-center justify-center flex-col pb-8">
            <h1 className="text-dark text-3xl xs:text-4xl sm:text-[46px] font-semibold leading-normal sm:leading-[58px] tracking-[-0.46px] md:w-[622px] text-center pb-2">
               More Than <span className="font-bold text-primary">10,000</span> Dishes To order!
            </h1>
            <p className="text-lg leading-[30px] font-normal text-dark tracking-[-0.18px]">Welcome to The Biggest Network of Food Ordering & Delivery</p>
         </div>

         <div className="flex flex-col justify-end items-end">
            <div className="flex gap-8 flex-wrap justify-center items-center">
               <div className="flex gap-4 sm:gap-8 max-xs:flex-col max-xs:w-full">
                  <ProductCard label={"Pizza"} imgUrl={pizza} />
                  <ProductCard label={"Burger"} imgUrl={burger} />
                  <ProductCard label={"Sushi"} imgUrl={sushi} />
               </div>

               <div className="bg-cardBg pt-2 pb-2 px-6 flex flex-col justify-center items-center w-fit rounded-[28px]  ">
                  <div className="flex flex-col justify-end  items-end gap-2 ">
                     <p className="max-sm:text-[20px] text-[25.8px] leading-normal font-medium tracking-[-0.258px] mt-4 text-[#323232] xs:w-[437px] sm:mr-12">
                        Find <span className="text-primary font-semibold ">deals,</span> <span className="font-semibold text-[#009B00]">free delivery,</span> and more from our restaurant partners.
                     </p>
                     <img src={motorcycle} alt="motorcycle" />
                  </div>
               </div>
            </div>
         </div>

         <div className="flex  pt-12 gap-4 flex-wrap">
            <div>
               <img src={quote} alt="quote" />
               <p className="text-lg xs:text-[20px] xl:text-[23px] text-[#494949] leading-[147%]  md:w-[400px]  xl:w-[545px] mt-3 max-lg:mb-3">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”
               </p>
            </div>
            <div className="flex gap-4 sm:gap-8 max-xs:flex-col max-lg:w-full">
               <ProductCard label={"Pasta"} imgUrl={pasta} />
               <ProductCard label={"Salad"} imgUrl={salad} />
               <ProductCard label={"Desserts"} imgUrl={desserts} />
            </div>
         </div>
      </section>
   );
};

export default Products;
