import { useState } from "react";
import { CDN_URL } from "../utils/constants";
import CardText from "./CardText";

const ItemsList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-300 border-b-1 text-left flex justify-between"
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
              <button className=" p-2 mx-10 rounded-lg font-bold bg-white text-green-600 shadow-lg">
                ADD
              </button>
            </div>
            <img
              src={CDN_URL + item.card.info.imageId}
              className="w-full rounded-lg"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemsList;
