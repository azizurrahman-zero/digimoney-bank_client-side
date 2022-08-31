import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./Login.css";
import Loading from "../../Shared/Loading";
import loginBanner from "../../assets/images/login-banner.svg";
import { GiCancel } from "react-icons/gi";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import useToken from "../../hooks/useToken";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";
  const emailRef = useRef();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [token] = useToken(user);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  if (loading || sending) {
    return <Loading></Loading>;
  }
  if (token) {
    navigate(from, { replace: true });
  }

  const onSubmit = (data) => {
    const { email, password } = data;
    signInWithEmailAndPassword(email, password);
  };

  const resetPassword = async (data) => {
    const email = data.email;

    if (email) {
      await sendPasswordResetEmail(email);
      toast.success(`Email Sent to ${email}!`);
    } else {
      toast.error("Please, Enter a Email Address.");
    }
  };

  const handleReset = async () => {
    const email = emailRef.current.value;
    await sendPasswordResetEmail(email);
    alert("Sent email");
  };

  return (
    <div className="bg-neutral flex md:gap-20 h-[calc(100vh-76px)] items-center justify-center">
      <div className="hidden w-5/12 md:block">
        <img className="w-full" src={loginBanner} alt="login" />
      </div>

      <div className="flex-shrink-0 w-full max-w-sm mt-5 mb-16 shadow-2xl card bg-white lg:m-0">
        <div className="card-body">
          <h2 className="mb-1 text-3xl font-bold text-center text-info">
            Log In
          </h2>
          <h3 className="mb-4 text-center">
            Don't have an account?{" "}
            <Link className="font-semibold link link-primary" to="/signUp">
              Sign Up
            </Link>
          </h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <input
                type="email"
                placeholder=" &#xf0e0;  Email Address"
                className="mb-1  bg-white input input-bordered input-icon"
                {...register("email", {
                  required: {
                    value: true,
                    message: "*Enter an email",
                  },
                  pattern: {
                    value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message: "*Please enter a valid email",
                  },
                })}
              />

              <label className="pt-0 label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-error">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-error">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control">
              <input
                type="password"
                placeholder=" &#xf070;  Password"
                className=" bg-white input input-bordered input-icon"
                {...register("password", {
                  required: {
                    value: true,
                    message: "*Enter a password",
                  },
                })}
              />
              <label className="p-0 label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-error">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            <div className="flex justify-end">
              <label
                for="reset-pass-modal"
                className="p-0 text-xs capitalize btn modal-button btn-link btn-xs"
              >
                Reset Password
              </label>
            </div>
            <div className="mt-6 form-control">
              <input
                className="text-white btn bg-[#E3C984] border-none hover:bg-[#E3C984]"
                type="submit"
                value="Log In"
              />
              <label className="flex justify-center">
                {error && (
                  <span className="pt-2 label-text-alt text-error">
                    {error.message
                      .substring(22)
                      .replace(/[()']+/g, "")
                      .replace(/[-']+/g, " ")
                      .charAt(0)
                      .toUpperCase() +
                      error.message
                        .substring(22)
                        .replace(/[()']+/g, "")
                        .replace(/[-']+/g, " ")
                        .slice(1)}
                  </span>
                )}
              </label>
            </div>
          </form>
        </div>
      </div>
      <>
        <input type="checkbox" id="reset-pass-modal" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
          <div className="relative modal-box">
            <label for="reset-pass-modal" className="absolute right-4 top-4">
              <GiCancel className="text-2xl" />
            </label>
            <h3 className="text-lg font-bold">Reset Password</h3>
            <div className="form-control">
              <input
                required
                type="email"
                ref={emailRef}
                placeholder=" &#xf0e0;  Email Address"
                className="mt-4 mb-1 text-base input input-bordered input-icon focus:outline-none"
              />
            </div>
            <div className="form-control">
              <button
                onClick={handleReset}
                className="text-white btn btn-neutral"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Login;
