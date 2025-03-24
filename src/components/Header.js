import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { TiShoppingCart } from "react-icons/ti";
const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const isOnline = useOnlineStatus();
  return (
    <div className="w-screen h-20 flex justify-between items-center shadow-2xl">
      <div>
        <img className="w-20 h-20" src={LOGO_URL} />
      </div>
      <div>
        <ul className="flex items-center p-4 m-4">
          <li className="px-4">{isOnline ? "✅ Online" : "❌ Offline"}</li>
          <li className="px-4">
            <Link className="hover:text-orange-600" to={"/"}>
              Home
            </Link>
          </li>
          <li className="px-4">
            <Link className="hover:text-orange-600" to={"/about"}>
              AboutUs
            </Link>
          </li>
          <li className="px-4">
            <Link className="hover:text-orange-600" to={"/contact"}>
              ContactUs
            </Link>
          </li>

          <li className="px-4">
            <Link className="hover:text-orange-600">
              <TiShoppingCart />
            </Link>
          </li>
          <div>
            <button
              className="px-4 hover:text-orange-600"
              onClick={() => {
                btnNameReact === "Login"
                  ? setBtnNameReact("Logout")
                  : setBtnNameReact("Login");
              }}
            >
              {btnNameReact}
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
