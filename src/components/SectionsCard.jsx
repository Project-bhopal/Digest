"use client";
import { AiFillThunderbolt } from "react-icons/ai";
import '../css/swiperbg.css'
import Image from "next/image";




const SectionsCard = ({Items, section, icon, withImage, imageFirst  }) => {

  
  return (
    <div className={`px-6 py-8 ${imageFirst ? 'w-[45%]' : 'w-[50%]'} border-t-[3px] border-black dark:border-white`}>
      <section>
        <h2 className="text-3xl font-bold mb-6 flex items-center">
        {icon}<span className=" px-2 text-5xl">{section}</span> 
        </h2>
        <ul className="space-y-4">
          {Items.map((item, index) => (
            <li key={index} className={`border-b border-gray-300 pb-4 flex gap-3 list-inside ${imageFirst ? 'flex-row' : 'flex-row-reverse'}`}>
              {withImage&&<Image src={item.image} className="h-[135px] w-[180px]"/>}
              <div>
              <div className="flex items-center">
                {!withImage&&<span className="text-2xl mr-2 -rotate-[13deg]"><AiFillThunderbolt /></span>}
              <p className="p hover:text-wite dark:hover:text-black duration-200 text-3xl font-[600] cursor-pointer">
                <span>{item.title}</span>
              </p>

              </div>
              <div className={`text-gray-500 dark:text-white text-xs flex gap-2 mt-3 ${withImage ? "ms-2" : "ms-5"}`}>
                By <span className="text-black dark:text-white font-bold">{item.author}</span> | 
                <h6 className="font-medium">{item.date}</h6>
              </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default SectionsCard;
