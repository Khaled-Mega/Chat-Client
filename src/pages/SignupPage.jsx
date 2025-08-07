import { MdChatBubbleOutline } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAuthStore } from "../store/useAuthStore.js";

import Skeleton from "../components/Skeleton.jsx"

export default function SignupPage() {
  const { signUp } = useAuthStore();
  const [info, setInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  function formValidation() {
    if (!info.name || !info.email || !info.password) {
      return false;
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    formValidation();
    signUp(info);
    navigate("/");
  }

  return (
    <div className="flex items-center h-full">
      <div className="md:w-1/2 p-16 flex justify-center items-center w-full">
        <form className="w-fit flex flex-col justify-center gap-6 items-center">
          <div className="flex items-center flex-col gap-3">
            <div className="bg-primary p-2 rounded-md">
              <MdChatBubbleOutline className="size-6" />
            </div>
            <h1 className="text-2xl text-primary">Create Account</h1>
            <p className="text-center">Get Started With Your Free Account</p>
          </div>
          <div className="form-control w-full">
            <div className="label">
              <span className="label-text">Full Name</span>
            </div>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>

              <input
                type="text"
                className="w-full"
                placeholder="Full Name"
                value={info.name}
                onChange={(e) => {
                  setInfo({ ...info, name: e.target.value });
                }}
              />
            </label>
          </div>
          <div className="form-control w-full">
            <div className="label">
              <span className="label-text">Email</span>
            </div>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="email"
                className="grow"
                placeholder="Email"
                value={info.email}
                onChange={(e) => {
                  setInfo({ ...info, email: e.target.value });
                }}
              />
            </label>
          </div>
          <div className="form-control w-full">
            <div className="label">
              <span className="label-text">Password</span>
            </div>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type={showPassword ? "text" : "password"}
                className="grow"
                placeholder="Password"
                value={info.password}
                onChange={(e) => {
                  setInfo({ ...info, password: e.target.value });
                }}
              />
              {showPassword ? (
                <IoEyeOffOutline
                  className="cursor-pointer size-5"
                  onClick={() => {
                    setShowPassword(false);
                  }}
                />
              ) : (
                <IoEyeOutline
                  className="cursor-pointer size-5"
                  onClick={() => {
                    setShowPassword(true);
                  }}
                />
              )}
            </label>
          </div>

          <button
            className="btn btn-primary w-full"
            type="submit"
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Create Account
          </button>

          <div>
            <p>
              Already have an account?
              <Link to="/login" className="text-primary underline">
                {" "}
                Sign in
              </Link>
            </p>
          </div>
        </form>
      </div>
      <Skeleton
        title="Join Our Community"
        desc="Connect With Friends, Share Moments, and stay in touch with your loved
          ones"
      />
    </div>
  );
}
