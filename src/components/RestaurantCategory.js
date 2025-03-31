import { useState } from "react";
import ItemsList from "./ItemsList";

const RestaurantCategory = ({ data, showAccordion, setShowIndex }) => {
  // const [showAccordion, setShowAccordion] = useState(false);
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-50  shadow-lg p-4">
      <div className="flex justify-between">
        <span className="font-bold ">
          {data.title}({data.itemCards.length})
        </span>
        <span className="cursor-pointer" onClick={handleClick}>
          ↓
        </span>
      </div>
      {showAccordion && <ItemsList items={data?.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
