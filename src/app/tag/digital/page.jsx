"use client";
import Recommendation from "@/components/Recommendation"
import card1 from '@/assets/card1.webp'
import card2 from "@/assets/card2.jpg";
import card3 from "@/assets/card3.jpg";
import card4 from "@/assets/card4.webp";

function page() {

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
    <Recommendation
          label= "Tag: Digital"
          icon = {""}
          heading={""}
          cardsData={mustReaddata}
    />
    </>
  )
}

export default page