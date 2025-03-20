import { useEffect, useState } from "react";
import { RESTAURANT_LIST_URL } from "./constants";

const useRestaurantList = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_LIST_URL);
    const json = await data.json();
    const restaurantData =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRestaurants(restaurantData);
    setFilteredRestaurant(restaurantData);
  };
  return [listOfRestaurants, filteredRestaurant, setFilteredRestaurant];
};

export default useRestaurantList;
