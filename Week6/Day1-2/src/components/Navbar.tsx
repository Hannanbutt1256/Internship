import { NavLink } from "react-router-dom";
import { BsCart2, BsCartCheckFill, BsBag } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center m-5 px-5">
      <div>
        <h1>Shopify</h1>
      </div>
      <div>
        <input
          type="text"
          name="search"
          placeholder="Search Products..."
          className="border-2 border-black rounded-xl p-2 outline-none"
        />
      </div>
      <div>
        <ul className="flex gap-5">
          <NavLink to="/">
            <li className="relative group">
              <AiOutlineHome className="text-2xl" />
              <div
                className="absolute left-1/2 transform -translate-x-1/2  mb-2 
                 bg-gray-700 text-white text-xs rounded-md px-2 py-1 opacity-0 
                 group-hover:opacity-100 transition-opacity"
              >
                Home
              </div>
            </li>
          </NavLink>
          <NavLink to="/products">
            <li className="relative group">
              <BsBag className="text-2xl" />
              <div className="absolute left-1/2 transform -translate-x-1/2  mb-2 bg-gray-700 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                Products
              </div>
            </li>
          </NavLink>
          <li>
            <BsCart2 className="text-2xl" />
          </li>
          <li>Login</li>
          <li>Register</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
