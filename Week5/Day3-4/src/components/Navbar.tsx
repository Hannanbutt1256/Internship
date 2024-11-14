import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

const Navbar = () => {
  // State to manage the mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle function to open and close the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="py-7 px-7 mt-5 mx-5 font-geist-sans bg-black text-charcoal flex justify-between items-center  rounded-2xl">
      <Link className="flex items-center gap-4" to="/">
        <h2 className="text-xl font-bold text-lightBeige">CMS</h2>
      </Link>

      <div className="hidden md:flex flex-row items-center gap-8">
        <ul className="flex flex-row gap-8">
          <li>
            <Link
              to="/"
              className="px-5 py-3 rounded-3xl bg-mintGreen font-medium text-sm hover:bg-softBlue hover:text-lightBeige text-center"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="dashboard"
              className="px-5 py-3 rounded-3xl bg-mintGreen font-medium text-sm hover:bg-softBlue hover:text-lightBeige text-center"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/auth/login"
              className="px-5 py-3 rounded-3xl bg-mintGreen font-medium text-sm hover:bg-softBlue hover:text-lightBeige text-center"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to="/auth/register"
              className="px-5 py-3 rounded-3xl bg-mintGreen font-medium text-sm hover:bg-softBlue hover:text-lightBeige text-center"
            >
              Register
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile menu toggle button */}
      <button className="p-2 md:hidden" onClick={toggleMenu}>
        <FontAwesomeIcon
          icon={isMenuOpen ? faXmark : faBars}
          className="text-lightBeige"
        />
      </button>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div className="p-2 px-7 mt-5 mx-5 fixed inset-0 bg-charcoal z-50">
          <div className="flex justify-between items-center mb-6">
            <a href="#" className="flex items-center gap-4">
              <h2 className="text-lg font-bold text-lightBeige ">CMS</h2>
            </a>
            <button className="p-2 md:hidden" onClick={toggleMenu}>
              <FontAwesomeIcon icon={faXmark} className="text-lightBeige" />
            </button>
          </div>

          <ul className="flex flex-col gap-4">
            <li>
              <Link
                to="/"
                className="font-medium text-lightBeige"
                onClick={toggleMenu} // Close menu on click
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="dashboard"
                className="font-medium text-lightBeige"
                onClick={toggleMenu} // Close menu on click
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/auth/login"
                className="font-medium text-lightBeige"
                onClick={toggleMenu} // Close menu on click
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="auth/register"
                className="font-medium text-lightBeige"
                onClick={toggleMenu} // Close menu on click
              >
                Register
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
