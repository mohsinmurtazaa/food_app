import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="flex justify-between bg-gray-200 shadow-lg mb-2">
      <div className="logo-container">
        <img
          className="w-24"
          src="https://marketplace.canva.com/EAFaFUz4aKo/2/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-JmYWTjUsE-Q.jpg"
        ></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 ">
          <li className="px-4">Online Status {onlineStatus ? "✅" : "❌"} </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold text-xl">
            <Link to="/cart">
              <div className="relative flex">
                <img
                  className="w-8"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3pEd8n1wVrRrA5EXQig4C6Q_qR1Y2IQU2hQWmJ6ChYw&s"
                ></img>
                {cartItems.length > 0 && (
                  <span className="absolute top-0 right-0 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                    {cartItems.length}
                  </span>
                )}
              </div>
            </Link>
          </li>
          {/* <button
            className="login"
            onClick={() =>
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
            }
          >
            {btnName}
          </button> */}
        </ul>
      </div>
    </div>
  );
};
export default Header;
