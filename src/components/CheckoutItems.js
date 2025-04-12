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
    <div className="flex flex-row items-start md:items-center p-4 border-b-1 border-gray-300 last:border-b-0">
      <div>
        <img
          src={CDN_URL + itemInfo?.imageId}
          alt={itemInfo?.name}
          className="rounded-lg w-30 h-30 md:w-20 md:h-10"
        />
      </div>
      <div className="ml-4 flex w-full flex-col ">
        <h2 className="font-bold">{itemInfo?.name}</h2>
        <span className="text-lg">
          ₹
          {itemInfo?.price
            ? itemInfo?.price / 100
            : itemInfo?.defaultPrice / 100}
        </span>
      </div>
      <div className="bg-white rounded-lg flex items-center justify-between">
        <button
          className="rounded-lg font-bold text-green-600 px-2 py-2 cursor-pointer"
          onClick={() => handleRemoveItem(itemInfo)}
        >
          -
        </button>
        <span className=" mx-2 font-bold text-green-600">
          {itemInfo?.quantity}
        </span>
        <button
          className="font-bold text-green-600 cursor-pointer px-2 py-2"
          onClick={() => handleAddItem(itemInfo)}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CheckoutItems;
