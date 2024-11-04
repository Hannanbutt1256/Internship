import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

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
    <nav className="p-3 px-7 font-mont bg-lightBeige text-charcoal flex justify-between items-center">
      <a href="#">
        <h2 className="text-lg font-bold">ImageG</h2>
      </a>

      {/* Desktop navigation */}
      <div className="hidden md:flex flex-row items-center gap-8">
        <ul className="flex flex-row gap-8">
          <li>
            <a className="font-medium hover:text-mintGreen" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="font-medium hover:text-mintGreen" href="#">
              About
            </a>
          </li>
          <li>
            <a className="font-medium hover:text-mintGreen" href="#">
              Contact
            </a>
          </li>
          <li>
            <a className="font-medium hover:text-mintGreen" href="#">
              Policy
            </a>
          </li>
        </ul>

        <div>
          <input
            type="search"
            className="px-1 py-1 outline-mintGreen rounded-xl mr-8"
            placeholder="Search Here..."
          />
          <button className="px-1 py-1 rounded-md bg-mintGreen font-medium hover:bg-warmOrange hover:text-lightBeige transition-transform duration-300 ease-in w-20 text-center">
            Search
          </button>
        </div>
      </div>

      {/* Mobile menu toggle button */}
      <button className="p-2 md:hidden" onClick={toggleMenu}>
        <FontAwesomeIcon
          icon={isMenuOpen ? faXmark : faBars}
          className="text-charcoal"
        />
      </button>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div className="p-3 px-7 fixed inset-0 bg-lightBeige z-50">
          <div className="flex justify-between items-center mb-6">
            <a href="#">
              <h2 className="text-lg font-bold">ImageG</h2>
            </a>
            <button className="p-2 md:hidden" onClick={toggleMenu}>
              <FontAwesomeIcon icon={faXmark} className="text-charcoal" />
            </button>
          </div>

          <ul className="flex flex-col gap-4">
            <li>
              <a className="font-medium hover:text-mintGreen" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="font-medium hover:text-mintGreen" href="#">
                About
              </a>
            </li>
            <li>
              <a className="font-medium hover:text-mintGreen" href="#">
                Contact
              </a>
            </li>
            <li>
              <a className="font-medium hover:text-mintGreen" href="#">
                Policy
              </a>
            </li>
          </ul>
          <div className="mt-6 flex flex-col">
            <input
              type="search"
              className="px-1 py-1 outline-mintGreen rounded-xl mr-8 mb-2 "
              placeholder="Search Here..."
            />
            <button className="px-1 py-1 rounded-md bg-mintGreen font-medium hover:bg-warmOrange hover:text-lightBeige transition-transform duration-300 ease-in w-20 text-center">
              Search
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
