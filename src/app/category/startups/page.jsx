"use client";
import Category from "@/components/Category"
import card1 from '@/assets/card1.webp'
import card2 from "@/assets/card2.jpg";
import card3 from "@/assets/card3.jpg";
import card4 from "@/assets/card4.webp";
import { useContext, useEffect, useState } from "react";
import PostContext from "@/context/postContext";


function Startups() {
  const [ startupsPosts, setStartupsPosts] = useState([])


  const {posts} = useContext(PostContext);
  
  useEffect(()=>{
    setStartupsPosts(posts.filter((item) => item?.category == "startups"));
  },[posts])


  const recommendeddata = {
    id : startupsPosts[0]?._id,
    image: startupsPosts[0]?.imagePost,
    category: startupsPosts[0]?.category,
    author : startupsPosts[0]?.createdBy,
    title: startupsPosts[0]?.postHeading,
    date: "January 31, 2024",
  }


  return (
    <>
      <Category
      category = "Startups"
      para = "Join us in celebrating the spirit of innovation and creativity within the startup world. Explore our Startups category to witness the birth of ideas, the evolution of businesses, the collective journey of those daring enough."
      recommendeddata={recommendeddata}
      mustReaddata={startupsPosts}
      />
    </>
  )
}

export default Startups