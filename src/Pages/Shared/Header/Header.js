import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../FirebaseConfig/Firebase.init";
import ActiveLink from "../ActiveLink/ActiveLink";
import Fruitsloger from "./../../../Images/Fruitslogor.png";

const Header = () => {
  const [user] = useAuthState(auth);
  const [isExpanded, toggleExpansion] = useState(false);
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-800 p-3">
      <div className="flex items-center flex-shrink-0 text-white mr-4">
        <Link to="/">
          <img className="h-[50px]" src={Fruitsloger} alt="fruits-hub" />
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
          <ActiveLink
            to="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-white mr-4"
          >
            Home
          </ActiveLink>
          {/* <ActiveLink
            to="/about"
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-white mr-4"
          >
            About
          </ActiveLink> */}

          <ActiveLink
            to="/blog"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-white mr-4"
          >
            Blog
          </ActiveLink>
          <ActiveLink
            to="/manageinventory"
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-white mr-4"
          >
            Manage-inventory
          </ActiveLink>
          {!user ? (
            <ActiveLink
              to="/login"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-white mr-4"
            >
              Login
            </ActiveLink>
          ) : (
            ""
          )}
          {!user ? (
            <ActiveLink
              to="/signup"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-white mr-4"
            >
              Sign Up
            </ActiveLink>
          ) : (
            ""
          )}
        </div>

        {user ? (
          <div>
            {user && !user.photoURL ? (
              <ActiveLink
                to="/updateProfileAndEmail"
                href="#responsive-header"
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-white mr-4"
              >
                {user?.displayName || user?.email}
              </ActiveLink>
            ) : (
              ""
            )}

            {user.photoURL ? (
              <ActiveLink
                to="/updateProfileAndEmail"
                href="#responsive-header"
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-white mr-4"
              >
                <img
                  className="h-[30px] w-[30px] "
                  style={{ borderRadius: "50%" }}
                  src={user?.photoURL}
                  alt=""
                />
              </ActiveLink>
            ) : (
              ""
            )}

            <ActiveLink
              to="/magnageallitems"
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-white mr-4"
            >
              Manage Items
            </ActiveLink>
            <ActiveLink
              to="/allorders"
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-white mr-4"
            >
              All Orders
            </ActiveLink>
            <ActiveLink
              to="/additems"
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-white mr-4"
            >
              Add Items
            </ActiveLink>
            <ActiveLink
              to="/myitems"
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-white"
            >
              My Orders
            </ActiveLink>

            <ActiveLink
              to="/logout"
              className="inline-block text-sm px-2 py-1 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 mx-4 hover:bg-white mt-4 lg:mt-0"
            >
              Logout
            </ActiveLink>
          </div>
        ) : (
          ""
        )}
      </div>
    </nav>
  );
};

export default Header;
