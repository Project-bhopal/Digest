"use client";
import { AiFillThunderbolt } from "react-icons/ai";
import '../css/swiperbg.css'


const trendingItems = [
  {
    title: "Strategies to Elevate Brand Stories and Capture Audience Attention",
    author: "TechInsider",
    date: "February 1, 2024",
  },
  {
    title: "Building Meaningful Connections and Loyalty in Modern Marketing",
    author: "TechInsider",
    date: "February 1, 2024",
  },
  {
    title: "Navigating Optimizing Platforms for Effective Audience Engagement",
    author: "TechInsider",
    date: "February 1, 2024",
  },
  {
    title: "The Remarkable Developments Pushing the Limits of Innovation",
    author: "TechInsider",
    date: "February 1, 2024",
  },
  {
    title: "Creating Valuable and Persuasive for Targeted Audiences",
    author: "TechInsider",
    date: "January 31, 2024",
  },
];

const TrendingSection = () => {
  return (
    <div className="px-6 py-8 w-[45%] ">
      <section>
        <h2 className="text-3xl font-bold mb-6">
          <span className=" px-2 text-5xl">Trending</span> →
        </h2>
        <ul className="space-y-4">
          {trendingItems.map((item, index) => (
            <li key={index} className="border-b border-gray-300 pb-4">
              <div className="flex items-center ">
                <span className="text-3xl mr-2"><AiFillThunderbolt /></span>
              <p className="text-3xl font-[600] p cursor-pointer">
                <span>{item.title}</span>
              </p>

              </div>
              <div className="text-gray-500 text-xs flex gap-2 mt-3 ms-5">
                By <span className="text-black font-bold">{item.author}</span> | 
                <h6 className="font-medium">{item.date}</h6>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default TrendingSection;
