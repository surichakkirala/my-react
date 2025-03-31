import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurantList from "../utils/useRestaurantList";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [listOfRestaurants, filteredRestaurant, setFilteredRestaurant] =
    useRestaurantList();
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <h1>
        It looks like you're offline; Please check your internet conenction
      </h1>
    );
  }
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex items-center justify-center">
        <input
          type="text"
          className="w-auto h-10 border border-solid rounded-lg px-1"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="px-4 py-4 m-4 rounded-lg cursor-pointer hover:text-orange-600"
          onClick={() => {
            const filteredSearch = listOfRestaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurant(filteredSearch);
          }}
        >
          Search
        </button>
        <button
          className="px-4 py-4 rounded-lg cursor-pointer hover:text-orange-600"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (restaurant) => restaurant.info.avgRating > 4.5
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="flex flex-wrap grid-flow-row justify-center items-center gap-x-[1.5%] gap-y-[25px]">
        {filteredRestaurant.length !== 0 ? (
          filteredRestaurant.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"/restaurant/" + restaurant.info.id}
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          ))
        ) : (
          <h2>Sorry, we couldn't find any restaurant for "{restaurantName}"</h2>
        )}
      </div>
    </div>
  );
};

export default Body;
