import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../FirebaseConfig/Firebase.init";
import { signOut } from "firebase/auth";

import logo from "./../../../logo.svg";

const Logout = () => {
  const [user] = useAuthState(auth);
  console.log(user);

  let navigate = useNavigate();
  let location = useLocation();
  const from = location.state?.form?.pathname || "/";
  const handleLogout = () => {
    signOut(auth);

    if (user) {
      window.location.href = from;
    }
  };

  useEffect(() => {
    if (!user) {
      navigate(from, { replace: true });
    }
  }, [user, navigate, from]);

  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="px-8 py-6 mx-4 mt-4 text-left bg-white md:w-1/3 lg:w-1/3 sm:w-1/3">
          <h3 className="text-2xl font-bold text-center">Log out Account</h3>
          <div className="mx-auto flex justify-center">
            <div>
              {user?.photoURL ? (
                <img
                  className="h-[60px] w-[60px] "
                  style={{ borderRadius: "50%" }}
                  src={user?.photoURL}
                  alt=""
                />
              ) : (
                <img
                  className="h-[45px] w-[45px] "
                  style={{ borderRadius: "50%" }}
                  src={logo}
                  alt=""
                />
              )}
            </div>
            <div className="hidden">
              {user?.photoURL ? (
                <img
                  className="h-[60px] w-[60px] "
                  style={{ borderRadius: "50%" }}
                  src={user?.photoURL}
                  alt=""
                />
              ) : (
                <img
                  className="h-[45px] w-[45px] "
                  style={{ borderRadius: "50%" }}
                  src={logo}
                  alt=""
                />
              )}
            </div>
          </div>
          <div className="text-center">
            <div className="mt-4 ">
              <div>
                <label className="block" htmlFor="Name">
                  {user?.displayName}
                </label>
              </div>

              <div className="mt-4">
                <label className="block" htmlFor="email">
                  {user?.email}
                </label>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="w-full px-6 py-2 mt-4 text-white bg-orange-600 rounded-md hover:bg-orange-700"
            >
              Log out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logout;
