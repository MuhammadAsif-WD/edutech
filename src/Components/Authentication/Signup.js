import React, { useState, useEffect } from "react";
import auth from "../../firebase.init";
import { Alert } from "@material-tailwind/react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../Shared/Loading";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";

const Signup = () => {
  //CREATE AUTHENTICATION USE EMAIL AND PASSWORD
  // ----------------------------------------------------------------
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    confirmPass: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    general: "",
  });
  const [showPass, setShowPass] = useState(false);

  const [createUserWithEmailAndPassword, user, hookError] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [signInWithGithub, gitHubLoading, gitHubError] =
    useSignInWithGithub(auth);
  const [signInWithGoogle, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  const handleEmailBlur = (e) => {
    const emailRegex = /\S+@\S+\.\S+/;
    const validEmail = emailRegex.test(e.target.value);

    if (validEmail) {
      setUserInfo({ ...userInfo, email: e.target.value });
      setErrors({ ...errors, email: "" });
    } else {
      setErrors({ ...errors, email: "Invalid Your Email" });
      setUserInfo({ ...userInfo, email: "" });
    }

    // setEmail(e.target.value);
  };
  const handlePasswordBlur = (e) => {
    const passwordRegex = /.{6,}/;
    const validPassword = passwordRegex.test(e.target.value);

    if (validPassword) {
      setUserInfo({ ...userInfo, password: e.target.value });
      setErrors({ ...errors, password: "" });
    } else {
      setErrors({
        ...errors,
        password: "Minimum 6 characters password allow!",
      });
      setUserInfo({ ...userInfo, password: "" });
    }
  };

  const handleConfirmPasswordBlur = (e) => {
    if (e.target.value === userInfo.password) {
      setUserInfo({ ...userInfo, confirmPass: e.target.value });
      setErrors({ ...errors, password: "" });
    } else {
      setErrors({ ...errors, password: "Password's don't match" });
      setUserInfo({ ...userInfo, confirmPass: "" });
    }
  };

  const handleRegisterSubmitButton = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(userInfo.email, userInfo.password);
  };

  useEffect(() => {
    if (hookError) {
      switch (hookError?.code) {
        case "auth/invalid-email":
          toast("Invalid email provided, please provide a valid email");
          break;
        case "auth/invalid-password":
          toast("Wrong password. Intruder!!");
          break;
        default:
          toast("something went wrong");
      }
    }
  }, [hookError]);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user) {
      navigate(from);
    }
  }, [user]);

  //CREATE AUTHENTICATION USE GOOGLE FIREBASE HOOKS
  // ----------------------------------------------------------
  if (googleError) {
    return (
      <div>
        <p>Error: {googleError.message}</p>
      </div>
    );
  }
  if (googleLoading) {
    return <Loading />;
  }

  if (googleError) {
    return (
      <div>
        <p>Error: {googleError.message}</p>
      </div>
    );
  }

  //CREATE AUTHENTICATION USE GITHUB FIREBASE HOOKS
  // ----------------------------------------------------------
  if (gitHubError) {
    return (
      <div>
        <p>Error: {googleError.message}</p>
      </div>
    );
  }
  if (gitHubLoading) {
    return (
      <div className="p-48 text-center">
        <Loading></Loading>
      </div>
    );
  }

  if (gitHubError) {
    return (
      <div>
        <p>Error: {googleError.message}</p>
      </div>
    );
  }
  return (
    <div className="w-full mx-auto pt-36 xl:pt-56 xl:pb-56 xl:w-1/2">
      <div className="shadow-lg">
        <div className="w-full p-5 mx-auto xl:w-5/6">
          <h1 className="pb-3 font-sans font-bold text-center text-4xl text-[#323232]">
            Signup
          </h1>
          {errors?.password && (
            <p className="text-pink-800">{errors.password}</p>
          )}
          <p
            className="absolute top-3 right-5"
            onClick={() => setShowPass(!showPass)}
          ></p>
          {googleError && <Alert color="red">{googleError?.massage}</Alert>}
          {gitHubError && <Alert color="red">{gitHubError?.massage}</Alert>}
          <form action="#" onSubmit={handleRegisterSubmitButton}>
            <div className="w-full font-sans xl:text-xl">
              <div className="grid p-2 xl:pt-4 grid-2">
                <label htmlFor="name" className="">
                  Full Name
                </label>
                <input
                  className="p-2 xl:text-xl outline-none rounded"
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                />
              </div>
              <div className="grid p-2 xl:pt-4">
                <label htmlFor="email" className="">
                  Email
                </label>
                <input
                  onBlur={handleEmailBlur}
                  className="p-2 xl:text-xl outline-none rounded"
                  type="email"
                  name="email"
                  id=""
                  placeholder="Email"
                  required
                />
              </div>
              <div className="grid p-2 xl:pt-4 grid-2">
                <label htmlFor="password" className="">
                  Password
                </label>
                <input
                  onBlur={handlePasswordBlur}
                  className="p-2 xl:text-xl outline-none rounded"
                  type="password"
                  name="password"
                  id=""
                  placeholder="Password"
                  required
                />
              </div>
              <div className="grid p-2 xl:pt-4 grid-2">
                <label htmlFor="confirmPassword" className="">
                  Confirm Password
                </label>
                <input
                  onBlur={handleConfirmPasswordBlur}
                  className="p-2 xl:text-xl outline-none rounded"
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  required
                />
              </div>
              <div>
                <input
                  className="w-full py-2 cursor-pointer border rounded hover:bg-[#598790] hover:text-white ease-in duration-300 xl:button mt-5 button"
                  type="submit"
                  name="button"
                  value="Signup"
                />
              </div>
              <div className="flex">
                <div className="h-1 my-4 w-80 bg-slate-900"></div>
                <div className="text-xl px-2">or</div>
                <div className="h-1 my-4 w-80 bg-slate-900"></div>
              </div>
              <div name="social Login">
                <div className="grid gap-2 pt-2 pb-2 xl:gap-3 xl:flex">
                  <button
                    onClick={() => signInWithGoogle()}
                    className="w-full py-2 hover:bg-[#598790] border text-[#323232] hover:text-white ease-in duration-300 xl:button rounded"
                  >
                    Google <i className="fab fa-google-plus-g"></i>
                  </button>
                  <button
                    onClick={() => signInWithGithub()}
                    className="w-full py-2 hover:bg-[#598790] border text-[#323232] hover:text-white ease-in duration-300 xl:button rounded"
                  >
                    GitHub <i className="fab fa-github"></i>
                  </button>
                </div>
              </div>
              <br />
              <div name="option">
                <div className="flex gap-2 mx-auto w-96">
                  <p>You already create an account?</p>
                  <>
                    <Link className="no-underline" to="/login">
                      <span className="text-slate-500 hover:text-slate-900">
                        Login
                      </span>
                    </Link>
                  </>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
