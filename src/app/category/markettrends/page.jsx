"use client";
import Category from "@/components/Category";
import card1 from '@/assets/card1.webp'
import card2 from "@/assets/card2.jpg";
import card3 from "@/assets/card3.jpg";
import card4 from "@/assets/card4.webp";
import { useContext, } from "react";
import PostContext from "@/context/postContext";


function MarketTrends() {
    


    const {marketTrendsPosts, handleShowMore} = useContext(PostContext);

  
  
    const recommendeddata = {
      id : marketTrendsPosts[0]?._id,
      image: marketTrendsPosts[0]?.imagePost,
      category: marketTrendsPosts[0]?.category,
      author : marketTrendsPosts[0]?.createdBy,
      title: marketTrendsPosts[0]?.postHeading,
      date: "January 31, 2024",
    }
  


  return (
    <>
       <Category
      category = "Market Trends"
      para = "And then there is the most dangerous risk of all — the risk of spending your life not doing what you want on the bet you can buy yourself the freedom to do it later."
      recommendeddata={recommendeddata}
      mustReaddata={marketTrendsPosts}
      handleShowMore={handleShowMore}
      />
    </>
  )
}

export default MarketTrends
