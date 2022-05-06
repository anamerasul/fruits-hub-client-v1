import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../FirebaseConfig/Firebase.init";

import "./NotFound.module.css";

const NotFound = () => {
  const [user] = useAuthState(auth);
  return (
    <div
      className="notFound bg-yellow-200 flex justify-around flex-col md:flex-row h-[90vh]"
      style={{
        backgroundImage: "url(https://i.ibb.co/4Zbryfc/notfoundpage-1.png)",
        backgroundSize: "cover",
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

      <div className="absoulate my-12 flex flex-col">
        {user ? (
          <h3 class="text-red-900 text-4xl font-black capitalize">
            Your Page is not found
          </h3>
        ) : (
          <h3 class="text-red-900 text-4xl font-black capitalize">
            page not found <span>Login to access this page</span>
          </h3>
        )}

        {user ? (
          <Link
            to="/"
            className="w-half px-6 py-2 mt-4 text-white bg-orange-600 rounded-md hover:bg-orange-800"
          >
            Back to home
          </Link>
        ) : (
          <Link
            to="/Login"
            className="w-half px-6 py-2 mt-4 text-white bg-orange-600 rounded-md hover:bg-orange-800"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default NotFound;
