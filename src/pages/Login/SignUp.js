import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

import Loading from "../../Shared/Loading";

const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const navigate = useNavigate();

  if (loading || updating) {
    return <Loading></Loading>;
  }
  if (user) {
    navigate("/");
  }

  const onSubmit = async (data, event) => {
    event.preventDefault();

    const { name, email, password, phone, address, amount } = data;
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });

    // upload image
    const imageStorageKey = "6fe6eceade1c589e0923d835ad57b39d";
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;

          const currentUser = {
            displayName: name,
            email: email,
            contact: phone,
            accountType: event.target.accountType.value,
            address: address,
            amount: amount,
            gender: event.target.gender.value,
            img: img,
          };
          console.log(currentUser)

          fetch(`https://tranquil-lake-95777.herokuapp.com/adduser`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(currentUser),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log("data success", data);
            });
        }
      });
  };

  return (
    <div>
      <div className="bg-[#f3f3fa] flex items-center justify-center lg:py-20">
        <div className="flex-shrink-0 w-full max-w-2xl mb-16 shadow-2xl mmt-5 card bg-base-100 lg:m-0">
          <div className="card-body">
            <h2 className="mb-1 text-3xl font-bold text-center text-neutral">
              Sign Up
            </h2>
            <h3 className="mb-4 text-center text-info">
              Have an account?{" "}
              <Link className="link link-secondary" to="/login">
                Log In
              </Link>
            </h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-4 mt-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                <div className="w-full max-w-xs form-control">
                  <input
                    type="text"
                    placeholder=" &#xf007;  Your Name"
                    className="mb-1 text-base input input-bordered input-icon"
                    {...register("name", {
                      required: {
                        value: true,
                        message: "*Enter your name",
                      },
                    })}
                  />
                  <label className="pt-0 label">
                    {errors.name?.type === "required" && (
                      <span className="label-text-alt text-error">
                        {errors.name.message}
                      </span>
                    )}
                  </label>
                </div>
                <div className="w-full max-w-xs form-control">
                  <input
                    type="number"
                    placeholder=" &#xf007;  Phone Number"
                    className="mb-1 text-base input input-bordered input-icon"
                    {...register("phone", {
                      required: {
                        value: true,
                        message: "*Enter Phone Number",
                      },
                    })}
                  />
                  <label className="pt-0 label">
                    {errors.name?.type === "required" && (
                      <span className="label-text-alt text-error">
                        {errors.phone.message}
                      </span>
                    )}
                  </label>
                </div>
                <div className="w-full max-w-xs form-control">
                  <input
                    type="text"
                    placeholder=" &#xf007;  Your Address"
                    className="mb-1 text-base input input-bordered input-icon"
                    {...register("address", {
                      required: {
                        value: true,
                        message: "*Enter Your Address",
                      },
                    })}
                  />
                  <label className="pt-0 label">
                    {errors.name?.type === "required" && (
                      <span className="label-text-alt text-error">
                        {errors.address.message}
                      </span>
                    )}
                  </label>
                </div>
                <div className="form-control">
                  <select
                    name="accountType"
                    className=" input input-bordered"
                    {...register("accountType", {
                      required: {
                        value: true,
                        message: "*Account Type Required",
                      },
                    })}
                  >
                    <option value=" ">--Account Type--</option>
                    <option value="Checking Account">Checking Account</option>
                    <option value="Savings Accounts">Savings Account</option>
                  </select>
                </div>
                <div className="w-full max-w-xs form-control">
                  <input
                    type="text"
                    placeholder=" &#xf0e0;  Amount Deposited"
                    className="w-full max-w-xs mb-1 text-base input input-bordered input-icon"
                    {...register("amount", {
                      required: {
                        value: true,
                        message: "*Enter an Amount Deposited",
                      },
                    })}
                  />
                  <label className="pt-0 label">
                    {errors.email?.type === "required" && (
                      <span className="label-text-alt text-error">
                        {errors.amount.message}
                      </span>
                    )}
                  </label>
                </div>

                <div className="flex-row gap-12 mt-3 form-control">
                  <label for="male" className="gap-2">
                    <input type="radio" name="gender" value="Male" id="male" />
                    <span className="mx-2">Male</span>
                  </label>
                  <label for="female">
                    <input
                      type="radio"
                      name="gender"
                      value="Female"
                      id="female"
                    />
                    <span className="mx-2">Female</span>
                  </label>
                </div>

                <div className="w-full max-w-xs form-control">
                  <input
                    type="email"
                    placeholder=" &#xf0e0;  Email Address"
                    className="w-full max-w-xs mb-1 text-base input input-bordered input-icon"
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
                <div className="w-full max-w-xs form-control">
                  <input
                    type="password"
                    placeholder=" &#xf070;  Password"
                    className="text-base input input-bordered input-icon"
                    {...register("password", {
                      required: {
                        value: true,
                        message: "*Enter a password",
                      },

                      minLength: {
                        value: 8,
                        message: "*Enter at least eight characters password",
                      },
                      pattern: {
                        value:
                          /^(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                        message:
                          "*Enter at least one number and one special character",
                      },
                    })}
                  />
                  <label className="pt-0 label">
                    {errors.password?.type === "required" && (
                      <span className="label-text-alt text-error">
                        {errors.password.message}
                      </span>
                    )}
                    {errors.password?.type === "minLength" && (
                      <span className="label-text-alt text-error">
                        {errors.password.message}
                      </span>
                    )}
                    {errors.password?.type === "pattern" && (
                      <span className="label-text-alt text-error">
                        {errors.password.message}
                      </span>
                    )}
                  </label>
                </div>
                {/* upload file */}
                <label className="pt-0 label">
                  <span className="lebel-text">
                    Upload Your National Identity Card
                  </span>
                </label>
                <div className="w-full max-w-xs form-control">
                  <input
                    type="file"
                    placeholder=" &#xf0e0; Upload Your NID"
                    className="w-full max-w-xs mb-1 text-base input input-bordered input-icon"
                    {...register("image", {
                      required: {
                        value: true,
                        message: "NID is required",
                      },
                    })}
                  />
                </div>

              </div>
              <div className="flex items-center justify-center mt-6">
                <button className="w-full max-w-xs text-white form-control btn btn-accent">
                  <Link className="link link-secondary" to="/camera">
                    Capture Your Live Photo
                  </Link>
                </button>

              </div>
              <div className="flex items-center justify-center mt-6">
                <input
                  className="w-full max-w-xs text-white form-control btn btn-accent"
                  type="submit"
                  value="Sign Up"
                />
                <br />
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
                <label className="flex justify-center">
                  {updateError && (
                    <span className="pt-2 label-text-alt text-error">
                      {updateError.message
                        .substring(22)
                        .replace(/[()']+/g, "")
                        .replace(/[-']+/g, " ")
                        .charAt(0)
                        .toUpperCase() +
                        updateError.message
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
    </div>
  );
};

export default SignUp;
