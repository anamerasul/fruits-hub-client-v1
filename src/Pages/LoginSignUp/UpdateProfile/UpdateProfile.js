import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuthState, useUpdateProfile } from "react-firebase-hooks/auth";

import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import auth from "../../../FirebaseConfig/Firebase.init";

const UpdateProfile = () => {
  const [user] = useAuthState(auth);

  const [displayName, setDisplayName] = useState("");
  const [updateProfile, updating] = useUpdateProfile(auth);

  const navigate = useNavigate();

  const location = useLocation();

  // if (user?.displayName) {
  //     navigate('/')
  // }
  const from = location.state?.form?.pathname || "/";
  const handleUpdateProfile = (e) => {
    e.preventDefault();
    updateProfile(displayName);
    //     const from = location.state?.form?.pathname || "/";
    setTimeout(() => {
      if (user) {
        navigate(from, { replace: true });
      }
    }, 2000);

    toast.success("Successfully update Name!!!");
  };

  return (
    <div className="flex items-center justify-center">
      <div className="px-8 py-6 mx-4 mt-4 text-left bg-white md:w-1/3 lg:w-1/3 sm:w-1/3">
        <h3 className="text-2xl font-bold text-center">Update profile</h3>
        <form onSubmit={handleUpdateProfile} action="">
          <div className="mt-4">
            <div>
              <label className="block" htmlFor="Name">
                Name
              </label>
              <input
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                type="text"
                name="name"
                placeholder="Name"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
            <div className="flex">
              <input
                onClick={async () => {
                  await updateProfile({ displayName });
                }}
                style={{ cursor: "pointer" }}
                type="submit"
                className="w-full px-6 py-2 mt-4 text-white bg-orange-600 rounded-lg hover:bg-orange-700"
                value="Update"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
