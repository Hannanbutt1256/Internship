import { NavLink } from "react-router-dom";

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
          <li>Home</li>
          {/* // TODO: Add a icon for cart */}
          <NavLink to="/products">
            <li>Products</li>
          </NavLink>
          <li>Cart</li>
          <li>Login</li>
          <li>Register</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
