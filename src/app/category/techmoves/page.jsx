"use client";
import Category from "@/components/Category"
import card1 from '@/assets/card1.webp'
import card2 from "@/assets/card2.jpg";
import card3 from "@/assets/card3.jpg";
import card4 from "@/assets/card4.webp";
import { useContext, useEffect, useState } from "react";
import PostContext from "@/context/postContext";


function TechMoves() {
  const [ techMovesPosts, setTechMovesPosts] = useState([])


  const {posts} = useContext(PostContext);
  useEffect(()=>{
    setTechMovesPosts(posts.filter((item) => item?.category == "tech moves"));
  },[posts]);


  const recommendeddata = {
    id: techMovesPosts[0]?._id,
    image: techMovesPosts[0]?.imagePost,
    category: techMovesPosts[0]?.category,
    author : techMovesPosts[0]?.createdBy,
    title: techMovesPosts[0]?.postHeading,
    date: "January 31, 2024",
  }


  return (
    <>
      <Category
      category = "Tech Moves"
      para = "Explore in-depth articles that unravel the latest marketing campaigns, dissecting the strategies employed by industry giants to captivate audiences and establish brand resonance. The multifaceted world of promotional endeavors."
      recommendeddata={recommendeddata}
      mustReaddata={techMovesPosts}
      />
    </>
  )
}

export default TechMoves