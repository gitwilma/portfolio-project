import { useState } from "react";
import { Link } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#F7EFD8] font-[Kiona-Regular] text-2xl relative z-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bolder">
            Wilma Håkansson
          </Link>

          {/* Desktop meny */}
          <div className="hidden lg:flex space-x-4 ml-auto">
            <Link to="/" className="hover:text-gray-600">
              Home
            </Link>
            <Link to="/about" className="hover:text-gray-600">
              About
            </Link>
            <Link to="/projects" className="hover:text-gray-600">
              Projects
            </Link>
            <Link to="/contact" className="hover:text-gray-600">
              Contact
            </Link>
          </div>

          {/* ThemeSwitcher och Hamburgarmenyn i mobil */}
          <div className="lg:hidden absolute top-4 right-4 z-30 flex items-center space-x-4">
            <ThemeSwitcher />

            {/* Hamburger menyikon */}
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
        </div>

        {/* Mobilmeny */}
        <div
          className={`lg:hidden ${
            isMenuOpen ? "block" : "hidden"
          } bg-[#F7EFD8] py-4 px-4 space-y-4 absolute top-16 left-0 right-0`}
        >
          <Link
            to="/"
            className="block text-xl text-center hover:text-gray-600"
          >
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
    </nav>
  );
}
