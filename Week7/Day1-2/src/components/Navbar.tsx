import { useState } from "react";
import { auth } from "../utils/firebaseConfig";
import { Link, useNavigate } from "react-router";
import { useAuthState } from "react-firebase-hooks/auth";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [user] = useAuthState(auth); // Get the current user

  const handleLogout = async () => {
    await auth.signOut();
    navigate("/login");
    setIsOpen(false);
  };

  return (
    <div className="flex justify-between items-center m-10">
      <div className="text-xl font-bold">AuthJs</div>
      <div className="flex justify-between items-center gap-4">
        <nav>
          <ul className="flex gap-4">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            {/* Show Login and Register only if user is not logged in */}
            {!user && (
              <>
                <Link to="/login">
                  <li>Login</li>
                </Link>
                <Link to="/register">
                  <li>Register</li>
                </Link>
              </>
            )}
          </ul>
        </nav>
        {/* Show user avatar only if user is logged in */}
        {user && (
          <div className="relative">
            <img
              onClick={() => setIsOpen(!isOpen)}
              className={`w-10 h-10 rounded-full cursor-pointer ${
                isOpen ? "ring-2 ring-blue-500" : ""
              }`}
              src={"https://picsum.photos/200/300"} // Use user's photo if available
              alt="User Avatar"
            />
            {/* Dropdown Menu */}
            {isOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                <ul className="py-1">
                  <Link to="/profile">
                    <li
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        setIsOpen(false);
                      }}
                    >
                      Profile
                    </li>
                  </Link>
                  <Link to="/settings">
                    <li
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        setIsOpen(false);
                      }}
                    >
                      Settings
                    </li>
                  </Link>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={handleLogout}
                  >
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
