import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="px-8 py-6 mx-4 mt-4 text-left bg-white md:w-1/3 lg:w-1/3 sm:w-1/3">
        <h3 className="text-2xl font-bold text-center">
          Login to your Account
        </h3>
        <form action="">
          <div className="mt-4">
            <div></div>
            <div className="mt-4">
              <label className="block" htmlFor="email">
                Email
              </label>
              <input
                type="text"
                placeholder="Email"
                name="email"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
            <div className="mt-4">
              <label className="block">Password</label>
              <input
                type="password"
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
                to="/resetPassword"
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
      </div>
    </div>
  );
};

export default Login;
