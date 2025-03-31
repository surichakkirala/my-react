import { MenuShimmer } from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(null);
  const resInfo = useRestaurantMenu(resId);
  if (resInfo === null) {
    return <MenuShimmer />;
  }
  const { name, cuisines, costForTwoMessage, sla } =
    resInfo?.cards[2]?.card?.card?.info;
  const itemCategories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  const categories = itemCategories.filter(
    (itemCategory) =>
      itemCategory.card?.["card"]?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  return (
    <div className="text-center p-4 m-4">
      <h1 className="font-bold my-4 text-2xl"> {name}</h1>
      <p className="text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showAccordion={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index === showIndex ? null : index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
