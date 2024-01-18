import React, { useState } from "react";
import Card from "../components/Card";
import { data } from "../assets/data";

const Filament = () => {
  const sneakers = data.sneakers;

  const filteredItems = sneakers.filter(
    (s) => s.retail_price_cents !== null && s.story_html !== null
  );

  const items = filteredItems.map((item) => {
    return { ...item, qty: 1 };
  });

  // State for managing sorting order
  const [sortOrder, setSortOrder] = useState("default");

  // Function to handle sorting
  const handleSort = (order) => {
    setSortOrder(order);
  };

  // Function to compare prices for sorting
  const comparePrices = (a, b) => {
    if (sortOrder === "lowToHigh") {
      return a.retail_price_cents - b.retail_price_cents;
    } else if (sortOrder === "highToLow") {
      return b.retail_price_cents - a.retail_price_cents;
    } else {
      return 0; // Default case
    }
  };

  // Apply sorting to items
  const sortedItems = [...items].sort(comparePrices);

  return (
    <div className="">
      <div className="w-full min-h-fit p-10 md:p-20">
        <div className="flex justify-end mb-4">
          <br></br>
          <label className="mr-2">Sort by:</label>
          <select
            onChange={(e) => handleSort(e.target.value)}
            value={sortOrder}
            className="border rounded-md p-2"
          >
            <option value="default">Default</option>
            <option value="lowToHigh">Price: Low to High</option>
            <option value="highToLow">Price: High to Low</option>
          </select>
        </div>
        <div className="grid grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-6 lg:grid-cols-3 lg:gap-8 xl:grid-cols-4 xl:gap-10 mx-auto">
          {sortedItems.map((shoe, idx) => (
            <Card key={shoe.id} shoe={shoe} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filament;