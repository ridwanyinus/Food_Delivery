import React from "react";
import OrderCard from "../components/OrderCard";
import location from "/images/location.png";
import burger from "/images/burger.png";
import house from "/images/house.png";
import choose from "/images/choose.png";

const Order = ({ imgUrl, label }) => {
   return (
      <section className="px-12 py-20 xl:padding flex-col flex max-lg:justify-center max-xs:items-center w-full relative xl:gap-8 ">
         <h1 className="text-[46px] max-xs:text-3xl leading-normal font-semibold  tracking-[0.23px] text-center mb-12 ">How To Order?</h1>
         <div className="flex justify-around gap-64 mt-10 absolute top-[143px] -z-0 max-xl:hidden">
            <h2 className="text-[43px] tracking-[-0.438px] text-primary font-semibold ">01</h2>
            <h2 className="text-[43px] tracking-[-0.438px] text-primary font-semibold ">02</h2>
            <h2 className="text-[43px] tracking-[-0.438px] text-primary font-semibold ">03</h2>
            <h2 className="text-[43px] tracking-[-0.438px] text-primary font-semibold ">04</h2>
         </div>

         <div className="flex xl:justify-between justify-around  z-10 flex-wrap max-lg:gap-8 gap-4 max-sm:flex-col max-sm:w-full">
            <OrderCard imgUrl={location} label={"Choose your location"} />
            <OrderCard imgUrl={choose} label={"Choose what to eat"} />
            <OrderCard imgUrl={burger} label={"Make your first order"} />
            <OrderCard imgUrl={house} label={"Now! Your food in way"} />
         </div>
      </section>
   );
};

export default Order;
