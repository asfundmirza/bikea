import React, { useState, useEffect } from "react";
import Bikeimage from "../images/Bike.svg";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../Firebase-config";
import { useNavigate } from "react-router-dom";
import Bikea from '../images/bikea-01.svg'

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameChange, setNameChange] = useState("");
  const [isNameValid, setIsNameValid] = useState(false);
  const [isWrongName, setIsWrongName] = useState(false);
  const [firebaseError, setFirebaseError] = useState("");

  let navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("E-bike-users");

    if (storedUser) {
      navigate("/home");
    }
  }, []);

  const register = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;
      await updateProfile(user, {
        displayName: nameChange,
      });
      console.log(user);
      localStorage.setItem(
        "E-bike-users",
        JSON.stringify({
          email: user.email,
          uid: user.uid,
          name: user.displayName,
        })
      );
      navigate("/home");
    } catch (error) {
      console.log(error.message);
      setFirebaseError(error.message);
    }
  };

  const nameChangeHandler = async (event) => {
    setNameChange(event.target.value);
  };
  const emailHandler = async function (event) {
    setEmail(event.target.value);
    setFirebaseError("");
  };
  const passHandler = async (event) => {
    setPassword(event.target.value);
    setFirebaseError("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    await register();
  };

  return (
    <>
      <div className="Main flex flex-row w-full h-[100vh]">
        {/* Sign up Form */}

        <div className="flex min-h-full  flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="flex justify-center">
            <img style={{ width: 120, height: 60 }}  src={Bikea} alt="logo" />
          </div>
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-4xl font-bold font-heading tracking-[0.25rem] leading-9  text-gray-900">
              Create an account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full md:max-w-lg sm:max-w-xl">
            <form
              onSubmit={handleSubmit}
              className="space-y-8"
              action="#"
              method="POST"
            >
              {/* User Name */}

              <div>
                <label
                  htmlFor="email"
                  className="block text-md font-body font-medium leading-6 text-gray-900"
                >
                  User Name
                </label>
                <div className="mt-2">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    onChange={nameChangeHandler}
                    required
                    className="block w-full rounded-md border-0 font-body py-2.5 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-buttonGreen focus:ring-customGreen text-lg sm:leading-6"
                  />
                </div>
              </div>

              {/* Email Address */}

              <div>
                <label
                  htmlFor="email"
                  className="block text-md font-medium font-body leading-6 text-gray-900"
                >
                  Email Address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={emailHandler}
                    autoComplete="email"
                    required
                    className="block w-full rounded-md font-body border-0 py-2.5 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-buttonGreen focus:ring-customGreen text-lg sm:leading-6"
                  />
                  {firebaseError &&
                  firebaseError.includes("auth/email-already-in-use") ? (
                    <span className="block mt-1 text-sm text-red-500">
                      Email already in use
                    </span>
                  ) : firebaseError &&
                    firebaseError.includes("auth/invalid-email") ? (
                    <span className="block mt-1 text-sm text-red-500">
                      Invalid Email
                    </span>
                  ) : (
                    ""
                  )}
                </div>
              </div>

              {/* Password */}

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-md font-medium font-body leading-6 text-gray-900"
                  >
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={passHandler}
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 font-body py-2.5 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:outline-buttonGreen focus:ring-customGreen text-2xl sm:leading-6"
                  />
                  {firebaseError &&
                  firebaseError.includes(
                    " Password should be at least 6 characters (auth/weak-password)"
                  ) ? (
                    <span className="block mt-1 text-sm text-red-500">
                      Password must be at least 6 characters
                    </span>
                  ) : firebaseError &&
                    firebaseError.includes("auth/missing-password") ? (
                    <span className="block mt-1 text-sm text-red-500">
                      Missing Password
                    </span>
                  ) : (
                    ""
                  )}
                </div>
              </div>

              <div className="flex  justify-start">
                <button
                  type="submit"
                  className="flex w-4/12 md:w-5/12 justify-center rounded-md bg-buttonGreen px-3 py-1.5 text-md font-body font-semibold leading-6 text-white shadow-sm hover:bg-customGreen "
                >
                  Sign up
                </button>
              </div>
            </form>

            <p className="mt-10 text-left text-sm text-gray-500 font-body">
              Already have an account?{" "}
              <Link to={"/sign-in"}>
                <span className="text-buttonGreen font-semibold">Sign in</span>
              </Link>
            </p>
          </div>
        </div>

        {/* Image */}

        <div className="imagesection hidden  md:flex justify-center w-1/2 align-center ">
          <div className="w-full bg-customGreen flex justify-center align-center">
            <img src={Bikeimage} alt="Bikeimage" width={600} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
