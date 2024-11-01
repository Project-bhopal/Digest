import Image from "next/image";
import '../css/swiperbg.css'
import Advertisement from "./Advertisement";
import Recommendation from "./Recommendation";
import { HiArrowLongRight } from "react-icons/hi2";

function Category({category, para, recommendeddata, mustReaddata}) {

  return (
    <>  
      <div>
        <div className="h-[95vh] w-full flex">
          <div className="h-full w-[45%] flex justify-center items-center border-t border-l-[5px] border-b border-black dark:border-lime">
            <div className="w-[450px] space-y-5 mt-[-120px]">
              <h1 className="text-5xl bg-black dark:bg-white w-fit pb-2 text-white dark:text-black font-bold">
                {category}
              </h1>
              <p className="italic font-medium text-black dark:text-white text-sm leading-6">
                {para}
              </p>
            </div>
          </div>
          <div className="h-full w-[55%]">
            <div className="bg-[#111511] h-full text-white overflow-hidden shadow-md w-full cursor-pointer">
              {/* Image Section */}
              <Image
                src={recommendeddata.image}
                alt={recommendeddata.category}
                className="w-full h-[400px] object-cover"
              />

              {/* Content Section */}
              <div className="p-5  relative">
                {/* Category Tag */}
                <span className="absolute top-[-29.5px] inline-block bg-[#C2FF74] text-[#010328] text-[9px] tracking-[1px] font-bold px-3 py-2 uppercase">
                  {recommendeddata.category}
                </span>

                {/* Title */}
                <h2 className="p text-[52px] leading-tight font-[700] hover:text-black duration-200">
                  {recommendeddata.title}
                </h2>

                
                <div className={`text-white text-xs flex gap-2 mt-3 ms-5`}>
                By <span className="text-white font-bold">{recommendeddata.author}</span> | 
                <h6 className="font-medium">{recommendeddata.date}</h6> |
                <h6 className="font-medium">6 min Read</h6>
              </div>
              </div>
            </div>
          </div>
        </div>
          <Advertisement/>
          <Recommendation
          label={`Latest ${category}`}
          icon = { <HiArrowLongRight/>}
          heading={""}
          cardsData={mustReaddata}
        />
      </div>
    </>
  );
}

export default Category;
