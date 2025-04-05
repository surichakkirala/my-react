import { useState } from "react";
import { CDN_URL } from "../utils/constants";
import CardText from "./CardText";
import { useDispatch, useSelector } from "react-redux";
import { addItemsToCart, removeItemsFromCart } from "../slices/cartSlice";

const ItemsList = ({ items }) => {
  //Dispatching action
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItemsToCart(item));
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItemsFromCart(item));
  };
  const newCart = useSelector((store) => store.cart.items);
  const cartItems = Object.values(newCart);

  return (
    <div>
      {items.map((item) => {
        const cartItem = cartItems.find(
          (cartItem) => cartItem.item.id === item.card.info.id
        );
        return (
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
                {cartItem && cartItem.quantity > 0 ? (
                  <div className="w-10/12 p-2 my-20 px-5 mx-4 bg-white rounded-lg flex items-center justify-between">
                    <button
                      className="rounded-lg font-bold text-green-600  cursor-pointer"
                      onClick={() => handleRemoveItem(cartItem.item)}
                    >
                      -
                    </button>
                    <span className=" mx-2 font-bold text-green-600">
                      {cartItem.quantity}
                    </span>
                    <button
                      className="border-0 font-bold text-green-600 cursor-pointer"
                      onClick={() => handleAddItem(cartItem.item)}
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <button
                    className=" w-10/12 p-2 px-5 mx-4 my-20 rounded-lg font-bold bg-white text-green-600 shadow-lg cursor-pointer"
                    onClick={() => handleAddItem(item.card.info)}
                  >
                    ADD
                  </button>
                )}
              </div>
              <img
                src={CDN_URL + item.card.info.imageId}
                className="w-11/12 h-24 rounded-lg"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemsList;
