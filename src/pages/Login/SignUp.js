import React, { useCallback, useRef, useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Webcam from "react-webcam";

import useToken from "../../hooks/useToken";

import Loading from "../../Shared/Loading";

const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
    const [token]= useToken(user)
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const navigate = useNavigate();

  const [displayCam, setDisplayCam] = useState('hidden');
  const [displayPhoto, setDisplayPhoto] = useState('hidden');

  // live capture -->
  const [imageSource, setImageSource] = useState();
  const webcamRef = useRef(null);
  const capture = useCallback(
      () => {
          const imageSrc = webcamRef.current.getScreenshot();
          setImageSource(imageSrc)
          setDisplayPhoto('block')
      }, [webcamRef]
  );

  // <---------------

  if (loading || updating) {
    return <Loading></Loading>;
  }
  if (token) {
    navigate("/");
  }

  const onSubmit = async (data, event) => {
    event.preventDefault();

    const { name, email, password, phone, address, amount,fatherName,motherName } = data;
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
            fatherName: fatherName,
            motherName: motherName,
            email: email,
            contact: phone,
            accountType: event.target.accountType.value,
            address: address,
            amount: amount,
            gender: event.target.gender.value,
            img: img,
            capturedPhoto: imageSource
          };
        

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

  // live capture
  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
  };

  return (
    <div>
      <div className="bg-base-100 flex items-center justify-center lg:py-10">
        <div className="flex-shrink-0 w-full max-w-2xl shadow-2xl mmt-5 card bg-white lg:m-0">
          <div className="card-body">
            <h2 className="mb-1 text-3xl font-bold text-center text-natural">
              Create a New Account
            </h2>
            <h3 className="text-center text-natural">
              Have an account?{" "}
              <Link className="link link-accent" to="/login">
                Log In
              </Link>
            </h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-4 mt-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                <div className="w-full max-w-xs form-control">
                  <input
                    type="text"
                    placeholder=" &#xf007;  Your Name"
                    className="mb-1 text-base bg-white input input-bordered input-icon"
                    {...register("name", {
                      required: {
                        value: true,
                        message: "*Enter your name",
                      },
                    })}
                  />
                  <label className="py-0 label">
                    {errors.name?.type === "required" && (
                      <span className="label-text-alt text-error">
                        {errors.name.message}
                      </span>
                    )}
                  </label>
                </div>
                <div className="w-full max-w-xs form-control">
                  <input
                    type="text"
                    placeholder=" &#xf007;  Your Father's Name"
                    className="mb-1 text-base bg-white input input-bordered input-icon"
                    {...register("fatherName", {
                      required: {
                        value: true,
                        message: "*Enter your father's name",
                      },
                    })}
                  />
                  <label className="py-0 label">
                    {errors.name?.type === "required" && (
                      <span className="label-text-alt text-error">
                        {errors.fatherName.message}
                      </span>
                    )}
                  </label>
                </div>
                <div className="w-full max-w-xs form-control">
                  <input
                    type="text"
                    placeholder=" &#xf007;  Your Mother's Name"
                    className="mb-1 bg-white text-base input input-bordered input-icon"
                    {...register("motherName", {
                      required: {
                        value: true,
                        message: "*Enter your mother's name",
                      },
                    })}
                  />
                  <label className="py-0 label">
                    {errors.name?.type === "required" && (
                      <span className="label-text-alt text-error">
                        {errors.motherName.message}
                      </span>
                    )}
                  </label>
                </div>
                <div className="w-full max-w-xs form-control">
                  <input
                    type="number"
                    placeholder=" &#xf095;  Phone Number"
                    className="mb-1 text-base bg-white input input-bordered input-icon"
                    {...register("phone", {
                      required: {
                        value: true,
                        message: "*Enter Phone Number",
                      },
                    })}
                  />
                  <label className="py-0 label">
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
                    placeholder=" &#xf041;  Your Address"
                    className="mb-1 text-base bg-white input input-bordered input-icon"
                    {...register("address", {
                      required: {
                        value: true,
                        message: "*Enter Your Address",
                      },
                    })}
                  />
                  <label className="py-0 label">
                    {errors.name?.type === "required" && (
                      <span className="label-text-alt text-error">
                        {errors.address.message}
                      </span>
                    )}
                  </label>
                </div>
                <div className="w-full max-w-xs form-control">
                  <select
                    name="accountType"
                    className=" input bg-white input-bordered"
                    {...register("accountType", {
                      required: {
                        value: true,
                        message: "*Account Type Required",
                      },
                    })}
                  >
                    <option value=" ">--Account Type--</option>
                    <option value="Savings Accounts">Savings Account</option>
                    <option value="Checking Account">Salary Account</option>
                  </select>
                </div>
                <div className="w-full max-w-xs form-control">
                  <input
                    type="text"
                    placeholder=" &#xf0d6;  Amount Deposited"
                    className="w-full max-w-xs bg-white mb-1 text-base input input-bordered input-icon"
                    {...register("amount", {
                      required: {
                        value: true,
                        message: "*Enter an Amount Deposited",
                      },
                    })}
                  />
                  <label className="py-0 label">
                    {errors.email?.type === "required" && (
                      <span className="label-text-alt text-error">
                        {errors.amount.message}
                      </span>
                    )}
                  </label>
                </div>

                <div className="flex-row gap-12 form-control">
                  <label for="male" className="flex items-center justify-center gap-2">
                    <input type="radio" name="gender" value="Male" id="male" />
                    <span className="mx-2">Male</span>
                  </label>
                  <label for="female" className="flex items-center justify-center gap-2">
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
                    className="w-full max-w-xs bg-white mb-1 text-base input input-bordered input-icon"
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
                  <label className="py-0 label">
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
                    className="text-base bg-white input input-bordered input-icon"
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
                  <label className="py-0 label">
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
                <label className="py-0 label">
                  <span className="lebel-text">
                    Upload Your National Identity Card
                  </span>
                </label>
                <div className="w-full max-w-xs form-control">
                  <input
                    type="file"
                    placeholder=" &#xf0e0; Upload Your NID"
                    className="w-full max-w-xs bg-white mb-1 text-base input input-bordered input-icon pt-2"
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
                <input
                  type="button"
                  onClick={() => setDisplayCam('block')}
                  className="w-full  max-w-xs text-white form-control btn bg-[#01091E] hover:bg-[#01091E] border-none"
                  value="Capture Your Live Photo"
                />
              </div>

              <div className={displayCam}>

              {/* live capture --> */}
              <div className='flex justify-center'>
                <div className="card card-side bg-base-100 shadow-xl">
                    <div className="card-body">
                        <Webcam
                            audio={false}
                            height={720}
                            ref={webcamRef}
                            screenshotFormat="image/jpeg"
                            width={1280}
                            videoConstraints={videoConstraints}
                        />
                        <div className="card-actions justify-end">
                            <input type="button" onClick={capture} className="btn btn-primary" value="Snap"/>
                        </div>
                    </div>
                </div>
              </div>

            {/* captured photo */}
            <div className={displayPhoto}>
            <div className="flex justify-center mt-5">
                <div className="card card-side bg-base-100 shadow-xl">
                    <div className="card-body">
                        <img src={imageSource} alt="captured" />
                    </div>
                </div>
            </div>
            </div>

            {/* <--------------------- */}

              </div>


              <div className="flex items-center justify-center mt-6">
                <input
                  className="w-full  max-w-xs text-white form-control btn bg-[#01091E] hover:bg-[#01091E] border-none"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
