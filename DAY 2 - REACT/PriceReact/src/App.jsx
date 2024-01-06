import React from "react";
import PriceCard from "./components/PriceCard";
import "./App.css";

const App = () => {
  const priceRanges = [
    {
      title: "FREE",
      price: 0,
      plans: [
        { name: "Single user", available: true },
        { name: "50 GB storage", available: true },
        { name: "unlimited public projects", available: true },
        { name: "Community access", available: true },
        { name: "unlimited private projects", available: false },
        { name: "Dedicated phone support", available: false },
        { name: "Free subdomain", available: false },
        { name: "Monthly status reports", available: false },
      ],
    },
    {
      title: "PLUS",
      price: 9,
      plans: [
        { name: "Single user", available: true },
        { name: "50 GB storage", available: true },
        { name: "unlimited public projects", available: true },
        { name: "Community access", available: true },
        { name: "unlimited private projects", available: true },
        { name: "Dedicated phone support", available: true },
        { name: "Free subdomain", available: true },
        { name: "Monthly status reports", available: false },
      ],
    },
    {
      title: "PRO",
      price: 49,
      plans: [
        { name: "Single user", available: true },
        { name: "50 GB storage", available: true },
        { name: "unlimited public projects", available: true },
        { name: "Community access", available: true },
        { name: "unlimited private projects", available: true },
        { name: "Dedicated phone support", available: true },
        { name: "Free subdomain", available: true },
        { name: "Monthly status reports", available: true },
      ],
    },
  ];

  return (
    <div className="price-cards">
      {priceRanges.map((range, index) => (
        <PriceCard
          key={index}
          price={range.price}
          plans={range.plans}
          title={range.title}
        />
      ))}
    </div>
  );
};

export default App;