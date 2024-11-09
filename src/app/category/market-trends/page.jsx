"use client";
import Category from "@/components/Category";
import card1 from '@/assets/card1.webp'
import card2 from "@/assets/card2.jpg";
import card3 from "@/assets/card3.jpg";
import card4 from "@/assets/card4.webp";


function page() {
  const recommendeddata = {
    image: card1,
    category: "Analysis",
    author : "TechInsider",
    title: "The Remarkable Developments Pushing the Limits of Innovation",
    date: "January 31, 2024",
  }

  const mustReaddata = [
    {
        image: card1,
        category: "Startups",
        title: "18 Top Fall Fashion Trends from New York Fashion",
        date: "January 31, 2024",
    },
    {
        image: card2,
        category: "Startups",
        title:
        "12 Summer Outfit Formulas for Lazy Girls Everywhere",
        date: "January 31, 2024",
    },
    {
        image: card3,
        category: "Market Trends",
        title: "Closer Look at Innovative Ventures Influencing Market Trends",
        date: "January 31, 2024",
    },
    {
        image: card4,
        category: "Startups",
        title: "Hidden Ways To Save Money That You Might Be Missing",
        date: "January 31, 2024",
    },
    {
        image: card2,
        category: "Startups",
        title:
        "12 Summer Outfit Formulas for Lazy Girls Everywhere",
        date: "January 31, 2024",
    },
    {
        image: card3,
        category: "Market Trends",
        title: "Closer Look at Innovative Ventures Influencing Market Trends",
        date: "January 31, 2024",
    },
    {
        image: card4,
        category: "Startups",
        title: "Hidden Ways To Save Money That You Might Be Missing",
        date: "January 31, 2024",
    },
    {
        image: card2,
        category: "Startups",
        title:
        "12 Summer Outfit Formulas for Lazy Girls Everywhere",
        date: "January 31, 2024",
    },
    {
        image: card3,
        category: "Market Trends",
        title: "Closer Look at Innovative Ventures Influencing Market Trends",
        date: "January 31, 2024",
    },
    {
        image: card4,
        category: "Startups",
        title: "Hidden Ways To Save Money That You Might Be Missing",
        date: "January 31, 2024",
    },
    ];

  return (
    <>
       <Category
      category = "Market Trends"
      para = "And then there is the most dangerous risk of all — the risk of spending your life not doing what you want on the bet you can buy yourself the freedom to do it later."
      recommendeddata={recommendeddata}
      mustReaddata={mustReaddata}
      />
    </>
  )
}

export default page
