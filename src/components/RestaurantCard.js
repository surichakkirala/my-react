import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
import { MdStarRate } from "react-icons/md";
const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    name,
    cuisines,
    cloudinaryImageId,
    avgRating,
    costForTwo,
    sla,
    aggregatedDiscountInfoV3,
  } = resData;
  return (
    <div
      data-testid="resCard"
      className="w-[300px] h-[300px] bg-white rounded-lg cursor-pointer overflow-hidden "
    >
      <img
        className="w-full h-[64%] rounded-lg object-cover"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      {/* <div className=" relative font-extrabold text-inherit">
        {aggregatedDiscountInfoV3.header + aggregatedDiscountInfoV3.subHeader}
      </div> */}
      <div className="h-[fit-content] px-[10px]  m-0 ">
        <h3 className="font-bold">
          {name.length > 25 ? name.slice(0, 23) + "..." : name.slice(0, 25)}
        </h3>
        <div className="  flex justify-between items-center font-semibold">
          <h4 className="flex items-center">
            <MdStarRate
              className="text-white w-[18px] h-[18px] rounded-[50%] p-[2px] mr-[3px]"
              style={{ backgroundColor: "green" }}
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
