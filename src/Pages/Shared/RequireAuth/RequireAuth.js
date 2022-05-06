import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router";
import { useSendEmailVerification } from "react-firebase-hooks/auth";
import { toast, ToastContainer } from "react-toastify";
import auth from "./../../../FirebaseConfig/Firebase.init";
const RequireAuth = ({ children }) => {
  const location = useLocation();
  const [user, loading, error] = useAuthState(auth);
  const [sendEmailVerification, sending, verifyerror] =
    useSendEmailVerification(auth);

  if (loading) {
    return <p className="text-center">Loading</p>;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if (user.providerData[0]?.providerId === "password" && !user.emailVerified) {
    return (
      <div>
        <h3 className="text-danger"> your Email is not verified</h3>
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
