import React from "react";

const OrderCard = ({ imgUrl, label }) => {
   return (
      <div className="bg-cardBg py-10 px-6 flex flex-col justify-center items-center w-fit rounded-[28px] max-sm:w-full">
         <img src={imgUrl} alt="/" className="bg-white rounded-[16px] p-4 " />
         <p className="text-[24px] leading-[125%] font-medium tracking-[-0.24px] mt-4 w-[168px] text-center text-[#2E2C49]">{label}</p>
      </div>
   );
};

export default OrderCard;
