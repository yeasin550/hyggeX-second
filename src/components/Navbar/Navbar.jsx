import  { useState } from "react";
import hygGex from "../../assets/component.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="p-3 shadow">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={hygGex} alt="" />
          {/* <span className=" font-bold text-lg">HyggeX</span> */}
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className=" focus:outline-none focus:border-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Navigation links and Login button */}
        <div
          className={`lg:flex items-center ${isMenuOpen ? "flex" : "hidden"}`}
          onClick={() => setMenuOpen(false)}
        >
          <ul className="flex lg:space-x-5 flex-col lg:flex-row font-semibold text-lg">
            <li className="">
              <Link href="" className="">
                Home
              </Link>
            </li>
            <li>
              <Link
                href=""
                className=""
                // onClick={() => setMenuOpen(false)}
              >
                Flashcards
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className=""
                // onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href=""
                className=""
                // onClick={() => setMenuOpen(false)}
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                href=""
                className="bg-sky-700 rounded-full py-2 px-8 text-white"
                // onClick={() => setMenuOpen(false)}
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
