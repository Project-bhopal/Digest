"use client";
import Category from "@/components/Category"
import { useContext, useEffect, useState } from "react";
import PostContext from "@/context/postContext";


function Advertising() {
  const [ advertisingPosts, setAdvertisingPosts] = useState([])


  const {posts} = useContext(PostContext);
  useEffect(()=>{
    setAdvertisingPosts(posts.filter((item) => item?.category == "advertising"));
  },[posts]);


  const recommendeddata = {
    id : advertisingPosts[0]?._id,
    image: advertisingPosts[0]?.imagePost,
    category: advertisingPosts[0]?.category,
    author : advertisingPosts[0]?.createdBy,
    title: advertisingPosts[0]?.postHeading,
    date: "January 31, 2024",
  }




  return (
    <>
      <Category
      category = "Advertising"
      para = "Modern technology has become a total phenomenon for civilization, the defining force of a new social order in which efficiency is no longer an option but a necessity imposed on all human activity."
      recommendeddata={recommendeddata}
      mustReaddata={advertisingPosts}
      />
    </>
  )
}

export default Advertising