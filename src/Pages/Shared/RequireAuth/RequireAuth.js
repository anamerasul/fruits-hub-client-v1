import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router";
import { useSendEmailVerification } from "react-firebase-hooks/auth";
import { toast, ToastContainer } from "react-toastify";
import auth from "./../../../FirebaseConfig/Firebase.init";
import Spinner from "../Spinner/Spinner";
const RequireAuth = ({ children }) => {
  const location = useLocation();
  const [user, loading] = useAuthState(auth);
  const [sendEmailVerification] = useSendEmailVerification(auth);

  if (loading) {
    return <Spinner></Spinner>;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // if (user.emailVerified) {
  //   return <Navigate to="/" state={{ from: location }} replace />;
  // }
  if (user.providerData[0]?.providerId === "password" && !user.emailVerified) {
    return (
      <div>
        {!user.emailVerified ? (
          <h3 className="text-2xl mt-5 mb-5"> your Email is not verified</h3>
        ) : (
          <h3 className="text-2xl mt-5 mb-5"> your Email is verified now</h3>
        )}
        {/* <h3 className="text-2xl mt-5 mb-5"> your Email is not verified</h3> */}
        <button
          className="bg-orange-600 px-4 py-2"
          onClick={async () => {
            await sendEmailVerification();
            toast("email sent");
          }}
        >
          {" "}
          Verify email
        </button>
        <ToastContainer></ToastContainer>
      </div>
    );
  }

  return children;
};

export default RequireAuth;
