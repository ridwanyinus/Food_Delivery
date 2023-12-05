import React from "react";
import pizza from "/images/pizza.png";

const ProductCard = ({ imgUrl, label }) => {
   return (
      <div className="bg-cardBg py-8 px-6 flex flex-col justify-center items-center w-fit rounded-[28px] max-xs:w-full">
         <img src={imgUrl} alt="/" className="bg-white rounded-full p-4 " />
         <p className="text-[24px] leading-normal font-medium tracking-[-0.24px] mt-4 text-dark">{label}</p>
      </div>
   );
};

export default ProductCard;
