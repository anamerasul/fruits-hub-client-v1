import React, { useState } from "react";
import { useAuthState, useUpdateEmail } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../FirebaseConfig/Firebase.init";

const UpdateEmail = () => {
  const [user] = useAuthState(auth);

  const [email, setEmail] = useState("");
  const [updateEmail, updating, error] = useUpdateEmail(auth);

  const navigate = useNavigate();

  const location = useLocation();

  // if (user?.displayName) {
  //     navigate('/')
  // }
  const from = location.state?.form?.pathname || "/";
  const handleUpdateEmail = (e) => {
    e.preventDefault();
    updateEmail(email);
    //     const from = location.state?.form?.pathname || "/";
    setTimeout(() => {
      if (user) {
        navigate(from, { replace: true });
      }
    }, 2000);

    toast.success("Successfully update Email!!!");
  };
  return (
    <div className="flex items-center justify-center">
      <div className="px-8 py-6 mx-4 mt-4 text-left bg-white md:w-1/3 lg:w-1/3 sm:w-1/3">
        <h3 className="text-2xl font-bold text-center">Update Email</h3>
        <form onSubmit={handleUpdateEmail} action="">
          <div className="mt-4">
            <div>
              <label className="block" htmlFor="Name">
                Name
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                name="email"
                placeholder="Name"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
            <div className="flex">
              <input
                onClick={async () => {
                  await updateEmail(email);
                }}
                style={{ cursor: "pointer" }}
                type="submit"
                className="w-full px-6 py-2 mt-4 text-white bg-orange-600 rounded-lg hover:bg-orange-700"
                value="Update"
              />
            </div>
          </div>
        </form>
        <div className="mt-6 text-grey-dark">
          back to home
          <Link to="/" className="text-blue-600 hover:underline mx-4" href="#">
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UpdateEmail;
