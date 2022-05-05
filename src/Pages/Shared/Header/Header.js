import React, { useState } from "react";
import { Link } from "react-router-dom";
import Fruitsloger from "./../../../Images/Fruitslogor.png";

const Header = ({}) => {
  const [isExpanded, toggleExpansion] = useState(false);
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-800 p-3">
      <div className="flex items-center flex-shrink-0 text-white mr-4">
        <Link to="/">
          <img
            className="h-[50px]"
            src={Fruitsloger}
            alt="fruits-hub"
            sizes=""
            srcset=""
          />
          <br />
          <h3 className="absolute left-4 top-12 text-3xl font-black text-orange-600">
            Fruits <span className="text-White"> hub</span>
          </h3>
        </Link>
      </div>
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`${
          isExpanded ? `block` : `hidden`
        } w-full block flex-grow lg:flex lg:items-start lg:w-auto`}
      >
        <div className="text-lg  lg:flex-grow">
          <Link
            to="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-white mr-4"
          >
            Home
          </Link>
          <Link
            to="/about"
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-white mr-4"
          >
            About
          </Link>

          <Link
            to="/blog"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-white mr-4"
          >
            Blog
          </Link>
          <Link
            to="/manageinventory"
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-white mr-4"
          >
            Manage-inventory
          </Link>

          <Link
            to="/login"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-white mr-4"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-white mr-4"
          >
            Sign Up
          </Link>
        </div>
        <div>
          <Link
            to="/magnageitems"
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-white mr-4"
          >
            Manage Items
          </Link>
          <Link
            to="/additems"
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-white mr-4"
          >
            Add Items
          </Link>
          <Link
            to="/myitems"
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-white"
          >
            My Items
          </Link>

          <Link
            to="/logout"
            className="inline-block text-sm px-2 py-1 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 mx-4 hover:bg-white mt-4 lg:mt-0"
          >
            Logout
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
