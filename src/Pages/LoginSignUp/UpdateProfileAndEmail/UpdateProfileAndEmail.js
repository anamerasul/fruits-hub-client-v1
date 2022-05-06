import React from "react";
import { Link } from "react-router-dom";

const UpdateProfileAndEmail = () => {
  return (
    <div className="flex justify-center content-center items-center  flex-col sm:flex-row bg-yellow-100 h-[100vh] ">
      <div className="text-center m-4">
        <Link
          to="/updateProfile"
          style={{ cursor: "pointer" }}
          type="submit"
          className="w-full px-6 py-2 mt-4 text-white bg-orange-600 rounded-lg hover:bg-orange-700"
          value="Update"
        >
          UPDATE Profile
        </Link>
      </div>

      <div className="text-center m-4">
        <Link
          to="/updateemail"
          style={{ cursor: "pointer" }}
          type="submit"
          className="w-full px-6 py-2 mt-4 text-white bg-orange-600 rounded-lg hover:bg-orange-700"
        >
          UPDATE Email
        </Link>
      </div>

      <div className="text-center m-4">
        <Link
          to="/forgotpassword"
          style={{ cursor: "pointer" }}
          type="submit"
          className="w-full px-6 py-2 mt-4 text-white bg-orange-600 rounded-lg hover:bg-orange-700"
        >
          Reset Password
        </Link>
      </div>
    </div>
  );
};

export default UpdateProfileAndEmail;
