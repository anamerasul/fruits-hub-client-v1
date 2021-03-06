import React, { useEffect, useState } from "react";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../FirebaseConfig/Firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import Spinner from "./../../Shared/Spinner/Spinner";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.form?.pathname || "/";

  const [authuser] = useAuthState(auth);

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(email, password);
  };

  if (authuser) {
    const url = `https://fruitshub-server.onrender.com/login`;

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: authuser.email,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("accessToken", data.accessToken); // l
      });

    setTimeout(() => {
      if (authuser) {
        navigate(from, { replace: true });
      }
    }, 2);
    // navigate(from, { replace: true })
  }

  useEffect(() => {
    if (authuser) {
      navigate(from, { replace: true });
    }
  }, []);

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <Spinner></Spinner>;
  }
  if (authuser) {
    navigate(from, { replace: true });
  }

  return (
    <div className="flex items-center justify-center bg-yellow-200 opacity-80">
      <div className="px-8 py-6 mx-4 mt-4 text-left bg-white md:w-1/3 lg:w-1/3 sm:w-1/3 my-10">
        <h3 className="text-2xl font-bold text-center">
          Login to your Account
        </h3>
        <form onSubmit={handleLoginSubmit} action="">
          <div className="mt-4">
            <div></div>
            <div className="mt-4">
              <label className="block" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                name="email"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
            <div className="mt-4">
              <label className="block">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                placeholder="Password"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
            <div className="mt-4"></div>
            <div className="flex">
              <button
                type="submit"
                className="w-full px-6 py-2 mt-4 text-white bg-orange-600 rounded-lg hover:bg-orange-700"
              >
                Login
              </button>
            </div>
            <div className="mt-6 text-grey-dark">
              <Link
                to="/forgotpassword"
                className="text-blue-600 hover:underline mx-4"
                href="#"
              >
                Reset your password
              </Link>

              <Link
                to="/signup"
                className="text-blue-600 hover:underline mx-4"
                href="#"
              >
                create an account
              </Link>
            </div>
          </div>
        </form>
        <div className="mt-4">
          <h2 className="text-center text-sm">
            Login using your Social Account
          </h2>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;
