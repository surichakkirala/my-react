import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItemsToCart, removeItemsFromCart } from "../slices/cartSlice";

const CheckoutItems = ({ itemInfo }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItemsToCart(item));
  };
  const handleRemoveItem = (item) => {
    dispatch(removeItemsFromCart(item));
  };
  return (
    <div className="p-4 border-gray-300 border-b-1 border-t-1 text-left flex justify-between">
      <div className="w-9/12 h-40">
        <div className="py-2">
          <span className="font-bold">{itemInfo?.name}</span>
        </div>
        <div className="py-2">
          <span className="text-lg">
            ₹
            {itemInfo?.price
              ? itemInfo?.price / 100
              : itemInfo?.defaultPrice / 100}
          </span>
        </div>
      </div>
      <div className="w-3/12 p-4">
        <img
          src={CDN_URL + itemInfo?.imageId}
          className="w-full h-24 rounded-lg"
        />
        <div className="w-10/12 p-2 px-5 mx-3 my-1 bg-white rounded-lg flex items-center justify-between">
          <button
            className="rounded-lg font-bold text-green-600  cursor-pointer"
            onClick={() => handleRemoveItem(itemInfo)}
          >
            -
          </button>
          <span className=" mx-2 font-bold text-green-600">
            {itemInfo?.quantity}
          </span>
          <button
            className="font-bold text-green-600 cursor-pointer"
            onClick={() => handleAddItem(itemInfo)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutItems;
