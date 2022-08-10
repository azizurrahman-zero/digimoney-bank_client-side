import React from "react";
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./Login.css";
import Loading from "../../Shared/Loading";
import loginBanner from "../../assets/images/login-banner.svg";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  if (loading) {
    return <Loading></Loading>;
  }
  if (user) {
    navigate(from, { replace: true });
  }

  const onSubmit = (data) => {
    const { email, password } = data;
    signInWithEmailAndPassword(email, password);
  };

  // reset password
  const handleResetPassword = async (data) => {
    const email = data.email;

    console.log(email);

    // if (email) {
    //     await sendPasswordResetEmail(email);
    //     toast.success(`Email Sent to ${email}!`);
    // }
    // else {
    //     toast.error('Please, Enter a Email Address.');
    // }
  };

  return (
    <div className="bg-[#E5CB83] flex gap-20 min-h-screen items-center justify-center">
      <div className="w-5/12">
        <img className="w-full" src={loginBanner} alt="login" />
      </div>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mt-5 mb-16 lg:m-0">
        <div className="card-body">
          <h2 className="mb-1 font-bold text-info text-center text-3xl">
            Log In
          </h2>
          <h3 className="text-center mb-4">
            Don't have an account?{" "}
            <Link className="link link-primary font-semibold" to="/signUp">
              Sign Up
            </Link>
          </h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <input
                type="email"
                placeholder=" &#xf0e0;  Email Address"
                className="input input-bordered input-icon text-base mb-1"
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

              <label className="label pt-0">
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
                className="input input-bordered input-icon text-base"
                {...register("password", {
                  required: {
                    value: true,
                    message: "*Enter a password",
                  },
                })}
              />
              <label className="label p-0">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-error">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            <div className="flex justify-end">
              <button
                onClick={handleSubmit(handleResetPassword)}
                className="btn text-xs capitalize btn-link btn-xs p-0"
              >
                Reset Password
              </button>
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-neutral text-white"
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
          {/* <div className="divider">OR</div> */}
          {/* <SocialLogin
              signInWithGoogle={signInWithGoogle}
              googleError={googleError}
            ></SocialLogin> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
