import { Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";

export default function Navbar() {
  return (
    <nav className="bg-[#F7EFD8] font-[Kiona-Regular] text-2xl relative z-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="lg:hidden flex items-center">
            <HamburgerMenu />
          </div>

          <Link
            to="/"
            className="text-2xl font-bolder text-center lg:text-left block lg:inline-block ml-auto w-full"
          >
            <span className="block lg:inline">Wilma</span>
            <span className="block lg:inline">Håkansson</span>
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
        </div>
      </div>
    </nav>
  );
}
