import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../FirebaseConfig/Firebase.init";
import Spinner from "../Shared/Spinner/Spinner";

import "./NotFound.module.css";

const NotFound = () => {
  const [user] = useAuthState(auth);
  return (
    <div
      className="notFound bg-yellow-300 flex justify-around items-between flex-col md:flex-row h-[90vh]"
      style={{
        backgroundImage: "url(https://i.ibb.co/4Zbryfc/notfoundpage-1.png)",
        backgroundSize: "80% 100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* <div>
        <img
          className="h-[100vh] w-[50vw]"
          src="https://i.ibb.co/4Zbryfc/notfoundpage-1.png"
          alt=""
        />
      </div> */}

      <div
        className="
    flex
    items-center
    justify-center
    w-screen
    h-screen
    bg-gradient-to-r
    from-yellow-400
    to-green-300
    opacity-80
  "
      >
        <div className="px-40 py-20 bg-white rounded-md shadow-xl">
          {user ? (
            <div className="flex flex-col items-center">
              <h1 className="font-bold text-gray-900 text-9xl">404</h1>

              <h6 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
                <span className="text-red-900">Oops!</span> Page not found
              </h6>

              <Spinner></Spinner>

              <p className="mb-8 text-center text-gray-700 md:text-lg">
                The page you’re looking for doesn’t exist.
              </p>

              <Link
                to="/"
                className=" w-full px-6 py-2 mt-4 text-white bg-orange-600 rounded-md hover:bg-orange-800"
              >
                Back to home
              </Link>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <h1 className="font-bold text-gray-900 text-9xl">404</h1>

              <h6 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
                <span className="text-red-900">Oops!</span> Page not found
              </h6>

              <Spinner></Spinner>

              <p className="mb-8 text-center text-gray-700 md:text-lg">
                You page you’re looking for doesn’t or Login to access this page
                .
              </p>

              <Link
                to="/login"
                className=" w-full px-6 py-2 mt-4 text-white bg-orange-600 rounded-md hover:bg-orange-800"
              >
                Login
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* <div className=" my-12 flex flex-col items-between justify-between">
        <div>
          {user ? (
            <h3 class="text-red-900 bg-yellow-400 md:bg-transparent p-4 text-xl md:text-4xl  font-black capitalize">
              Page not found
            </h3>
          ) : (
            <h3 class="text-red-900 bg-yellow-400 md:bg-transparent p-4 text-xl md:text-4xl  font-black capitalize">
              page not found <span>Login to access this page</span>
            </h3>
          )}
        </div>

        <div className="my-5">
          <Spinner></Spinner>
        </div>

        <div>
          {user ? (
            <Link
              to="/"
              className=" w-full px-6 py-2 mt-4 text-white bg-orange-600 rounded-md hover:bg-orange-800"
            >
              Back to home
            </Link>
          ) : (
            <Link
              to="/Login"
              className=" w-full px-6 py-2 mt-4 text-white bg-orange-600 rounded-md hover:bg-orange-800"
            >
              Login
            </Link>
          )}
        </div>
      </div> */}
    </div>
  );
};

export default NotFound;
