import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
import { MdStarRate } from "react-icons/md";
const RestaurantCard = (props) => {
  const { resData } = props;
  const { id, name, cuisines, cloudinaryImageId, avgRating, costForTwo, sla } =
    resData?.info;
  return (
    <div className="w-[250px] h-[300px] bg-white rounded-lg cursor-pointer overflow-hidden hover:scale-[0.98]">
      <img
        className="w-full h-[64%] shadow-sm rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="h-[fit-content] px-[10px]  m-0 ">
        <div>
          <h3 className="font-bold">
            {name.length > 25 ? name.slice(0, 23) + "..." : name.slice(0, 25)}
          </h3>
        </div>
        <div className="flex justify-between items-center font-semibold">
          <h4 className="flex items-center">
            <MdStarRate
              className="text-white w-[18px] h-[18px] rounded-[50%] p-[2px] mr-[3px]"
              style={
                avgRating > 4.5
                  ? { backgroundColor: "green" }
                  : { backgroundColor: "red" }
              }
            />
            <span>{avgRating}</span>
          </h4>
          <h4>{sla.slaString} </h4>
        </div>
        <div>{costForTwo}</div>
        <div className="font-normal">
          <h4>
            {cuisines.join(", ").length > 30
              ? cuisines.join(", ").slice(0, 28) + "..."
              : cuisines.join(", ").slice(0, 30)}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
