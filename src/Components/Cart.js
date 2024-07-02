import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import MenuSubCategoriesList from "./MenuSubCategoriesList";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-6 p-6">
      <h1 className="font-bold text-xl">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="m-2 p-2 bg-red-500 text-white rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length < 1 && <h1>Cart is empty.Add items to card</h1>}
        <MenuSubCategoriesList items={cartItems} />
      </div>
    </div>
  );
};
export default Cart;
