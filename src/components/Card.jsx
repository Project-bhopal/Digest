"use client";
import Image from 'next/image';
import '../css/swiperbg.css'

const Card = ({ image, category, title, date }) => {
  return (
    <div className="bg-[#04031D] text-white overflow-hidden shadow-md w-full cursor-pointer">
      {/* Image Section */}
      <Image src={image} alt={title} className="w-full h-[320px] object-cover" />

      {/* Content Section */}
      <div className="p-5  relative">
        {/* Category Tag */}
        <span className="absolute top-[-14px] inline-block bg-[#C2FF74] text-[#010328] text-[9px] tracking-[1px] font-bold px-2 uppercase">
          {category}
        </span>

        {/* Title */}
        <h2 className="p text-[28px] leading-tight font-[700] hover:text-black duration-200">
          {title}
        </h2>

        {/* Date */}
        <p className="text-[13px] mt-2">{date}</p>
      </div>
    </div>
  );
};

export default Card;
