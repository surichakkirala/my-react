import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../slices/cartSlice";
import CheckoutItems from "./CheckoutItems";
import EmptyCart from "./EmptyCart";
import BillInfo from "./BillInfo";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <>
      {cartItems.length ? (
        <div className="w-11/12 m-auto my-10  md:items-center content-center">
          <div className=" w-full flex justify-between items-center">
            <h1 className="font-bold text-2xl">Checkout</h1>
            <button
              className="p-2 m-2 bg-black text-white rounded-lg px-4 py-2 cursor-pointer"
              onClick={handleClearCart}
            >
              ClearCart
            </button>
          </div>
          <div className="w-full flex flex-col md:flex-row justify-center gap-[30px]">
            <div className="w-full">
              <div className="bg-gray-100 rounded-md ">
                {cartItems.map((cartItem) => (
                  <CheckoutItems key={cartItem.id} itemInfo={cartItem} />
                ))}
              </div>
            </div>
            <div className="w-full bg-gray-100 rounded-lg">
              <BillInfo items={cartItems} />
            </div>
          </div>
        </div>
      ) : (
        <EmptyCart />
      )}
    </>
  );
};

export default Cart;
