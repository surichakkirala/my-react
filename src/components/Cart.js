import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../slices/cartSlice";
import CheckoutItems from "./CheckoutItems";
import EmptyCart from "./EmptyCart";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cart.items);
  const cartItems = Object.values(cart);
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <>
      {cartItems.length ? (
        <div className="w-6/12 m-auto my-4 p-10 bg-gray-50 rounded-lg ">
          <div className="flex justify-between items-center">
            <h1 className="font-bold">Checkout</h1>
            <button
              className="p-2 m-2 bg-black text-white rounded-lg px-4 py-2 cursor-pointer"
              onClick={handleClearCart}
            >
              ClearCart
            </button>
          </div>
          <div className="my-4">
            {cartItems.map((cartItem) => (
              <CheckoutItems key={cartItem.item.id} itemInfo={cartItem} />
            ))}
          </div>
        </div>
      ) : (
        <EmptyCart />
      )}
    </>
  );
};

export default Cart;
