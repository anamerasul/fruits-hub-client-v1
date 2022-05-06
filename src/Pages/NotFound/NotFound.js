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

      <div className=" my-12 flex flex-col items-between justify-between">
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
      </div>
    </div>
  );
};

export default NotFound;
