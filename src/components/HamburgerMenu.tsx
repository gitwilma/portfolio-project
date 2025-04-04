import { useState } from "react";
import { Link } from "react-router-dom";

const HamburgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* Hamburger menyikon */}
      <div className="lg:hidden flex items-center">
        <button
          onClick={toggleMenu}
          className="text-2xl text-black focus:outline-none"
        >
          <span
            className={`block w-8 h-1 bg-black mb-2 transition-transform transform ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-8 h-1 bg-black mb-2 transition-opacity ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-8 h-1 bg-black transition-transform transform ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobilmeny */}
      <div
        className={`lg:hidden ${
          isMenuOpen ? "block" : "hidden"
        } bg-[#F7EFD8] py-4 px-4 space-y-4 absolute top-16 left-0 right-0`}
      >
        <Link to="/" className="block text-xl text-center hover:text-gray-600">
          Home
        </Link>
        <Link
          to="/about"
          className="block text-xl text-center hover:text-gray-600"
        >
          About
        </Link>
        <Link
          to="/projects"
          className="block text-xl text-center hover:text-gray-600"
        >
          Projects
        </Link>
        <Link
          to="/contact"
          className="block text-xl text-center hover:text-gray-600"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default HamburgerMenu;
