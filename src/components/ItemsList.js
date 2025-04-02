import { useState } from "react";
import { CDN_URL } from "../utils/constants";
import CardText from "./CardText";
import { useDispatch, useSelector } from "react-redux";
import { addItemsToCart } from "../slices/cartSlice";

const ItemsList = ({ items }) => {
  //Dispatching action
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItemsToCart(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-4 border-gray-300 border-b-1 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="font-bold">{item.card.info.name}</span>
            </div>
            <div className="py-2">
              <span className="text-lg">
                ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
              <CardText data={item.card.info.description} />
            </div>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button
                className=" p-2 px-5 mx-5 my-20  rounded-lg font-bold bg-white text-green-600 shadow-lg cursor-pointer"
                onClick={() => handleAddItem(item.card.info)}
              >
                ADD
              </button>
            </div>
            <img
              src={CDN_URL + item.card.info.imageId}
              className="w-[120px] h-[100px] rounded-lg"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemsList;
