import React from "react";
import { ArrowUpRight } from "lucide-react";

const BulkOrderCard = () => {
  return (
    <div className="bg-gray-100 max-w-9xl mx-auto rounded-2xl shadow-md p-6 md:p-10 relative max-w-xl">
      {/* Top Right Arrow */}
      <div className="absolute top-4 right-4 text-gray-700">
        <ArrowUpRight size={22} />
      </div>

      {/* Content */}
      <h3 className="text-[22px] md:text-[32px] font-bold text-[#E31A4E] mb-3">
        Order in Bulk for Your School
      </h3>
      <p className="text-sm md:text-base text-gray-800 leading-relaxed">
        Whether you're a new school or a long-time
        <br /> partner we've got you covered. <br />
        Place bulk orders quickly and get personalized
        <br /> support every step of the way.
      </p>

      {/* Button */}
      <div className="mt-6 text-right">
        <button className="bg-[#E31A4E] text-right hover:bg-[#E31A4E] text-white text-sm md:text-base font-medium px-3 py-1 rounded-md shadow-md">
          Request Bulk Order
        </button>
      </div>
    </div>
  );
};

export default BulkOrderCard;
