import { useState } from "react";
import ItemsList from "./ItemsList";

const RestaurantCategory = ({ data }) => {
  const [showAccordion, setShowAccordion] = useState(false);
  const handleClick = () => {
    setShowAccordion(!showAccordion);
  };
  return (
    <div>
      <div
        className="w-6/12 mx-auto my-4 bg-white cursor-pointer shadow-lg p-4"
        onClick={handleClick}
      >
        <div className="flex justify-between">
          <span className="font-bold text-lg">
            {data.title}({data.itemCards.length})
          </span>
          <span>↓</span>
        </div>
        {showAccordion && <ItemsList items={data?.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
