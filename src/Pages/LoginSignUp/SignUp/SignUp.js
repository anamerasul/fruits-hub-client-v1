import { async } from "@firebase/util";
import { sendEmailVerification } from "firebase/auth";
import React, { useEffect, useState } from "react";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../FirebaseConfig/Firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";

const SignUp = () => {
  const [displayName, setDisplayName] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const [name, setName] = useState("");

  const [verifysms, setVerifysms] = useState("");

  const navigate = useNavigate();

  const location = useLocation();

  // const [updateProfile] = useUpdateProfile(auth);

  const [updateProfile, updating] = useUpdateProfile(auth);

  const [createUserWithEmailAndPassword, user, loading, createerror] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [alredeyuser] = useAuthState(auth);

  const [sendEmailVerification, sending, verifyerror] =
    useSendEmailVerification(auth);

  // const verifingEmail = () => {
  //   sendEmailVerification();
  //   alert("Sent email");

  //   setVerifysms("you got a verification Link ");
  // };

  const handleCreateUser = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confrimpassword.value;
    // setName(e.target.name.value);
    // setEmail(e.target.email.value);

    // setPassword(e.target.password.value);
    // setConfirmPassword(e.target.confrimpassword.value);

    if (password !== confirmPassword) {
      setError("your password didnot match");
      return;
    }

    if (password.length < 8) {
      setError("password must be 8 charecter long");
      return;
    }

    console.log(error);

    console.log(name, email, password, confirmPassword);

    await createUserWithEmailAndPassword(email, password);

    // verifingEmail();
    await updateProfile({ displayName: name });

    e.target.reset();
  };

  useEffect(() => {
    let from = location.state?.form?.pathname || "/";

    if (user) {
      navigate(from, { replace: true });
    }
  }, [user]);

  return (
    <div className="flex items-center justify-center bg-yellow-200 opacity-70">
      <div className="px-8 py-6 mx-4 mt-4 text-left bg-white md:w-1/3 lg:w-1/3 sm:w-1/3 my-10">
        <h3 className="text-2xl font-bold text-center">Create a user</h3>
        <form onSubmit={handleCreateUser} action="">
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
            <div className="mt-4">
              <label className="block">Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                name="confrimpassword"
                placeholder="Password"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
            <span className="text-xs text-red-400">{error}</span>
            <div className="flex">
              <input
                onClick={async () => {
                  await sendEmailVerification();
                  toast.success("verification sent to your email");
                }}
                style={{ cursor: "pointer" }}
                type="submit"
                className="w-full px-6 py-2 mt-4 text-white bg-orange-600 rounded-lg hover:bg-orange-700"
                value="Create Account"
              />
            </div>
            <div className="mt-6 text-grey-dark">
              Already have an account?
              <Link
                to="/login"
                className="text-blue-600 hover:underline mx-4"
                href="#"
              >
                Log in
              </Link>
            </div>
          </div>
        </form>

        <div className="mt-4">
          <h2 className="text-center text-sm">
            Sign Up using your Social Account
          </h2>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
// import './Register.css';
// import auth from '../../../firebase.init';
// import SocialLogin from '../SocialLogin/SocialLogin';
// import Loading from '../../Shared/Loading/Loading';

// const Register = () => {
//     const [agree, setAgree] = useState(false);
//     const [
//         createUserWithEmailAndPassword,
//         user,
//         loading
//     ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
//     const [updateProfile, updating,] = useUpdateProfile(auth);

//     const navigate = useNavigate();

//     const navigateLogin = () => {
//         navigate('/login');
//     }

//     if (loading || updating) {
//         return <Loading></Loading>
//     }

//     if (user) {
//         console.log('user', user);
//     }

//     const handleRegister = async (event) => {
//         event.preventDefault();
//         const name = event.target.name.value;
//         const email = event.target.email.value;
//         const password = event.target.password.value;
//         // const agree = event.target.terms.checked;

//         await createUserWithEmailAndPassword(email, password);
//         await updateProfile({ displayName: name });
//         console.log('Updated profile');
//         navigate('/home');
//     }

//     return (
//         <div className='register-form'>
//             <h2 style={{ textAlign: 'center' }}>Please Register</h2>
//             <form onSubmit={handleRegister}>
//                 <input type="text" name="name" id="" placeholder='Your Name' />

//                 <input type="email" name="email" id="" placeholder='Email Address' required />

//                 <input type="password" name="password" id="" placeholder='Password' required />
//                 <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
//                 {/* <label className={agree ? 'ps-2': 'ps-2 text-danger'} htmlFor="terms">Accept Genius Car Terms and Conditions</label> */}
//                 <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept Genius Car Terms and Conditions</label>
//                 <input
//                     disabled={!agree}
//                     className='w-50 mx-auto btn btn-primary mt-2'
//                     type="submit"
//                     value="Register" />
//             </form>
//             <p>Already have an account? <Link to="/login" className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>
//             <SocialLogin></SocialLogin>
//         </div>
//     );
// };

// export default Register;
