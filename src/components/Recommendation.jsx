"use client";
import Card from "./Card";


function Recommendation({label, icon, heading, cardsData}) {
  
  return (
    <>
      <div>
        <div className="space-y-3 py-7">

        <h1 className="text-6xl font-bold flex items-center gap-5">{label}  {icon}</h1>
        <h2 className="text-xl italic font-[350]">
            {heading}
        </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[3px]">
          {cardsData.map((card, index) => (
            <Card
              key={index}
              image={card.image}
              category={card.category}
              title={card.title}
              date={card.date}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Recommendation;
