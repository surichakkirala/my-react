import { EMPTY_CART_URL } from "../utils/constants";

export default function EmptyCart() {
  return (
    <div className="w-6/12 m-auto p-4 my-4">
      <div className="flex flex-col items-center">
        <p className="font-bold text-2xl text-orange-700">Your Cart is Empty</p>
        <img src={EMPTY_CART_URL} className="py-2" />
      </div>
      <div className="flex justify-center items-center">
        <p className="font-bold text-2xl text-zinc-600">
          Your cart is Empty. Please add something from Menu.
        </p>
      </div>
    </div>
  );
}
