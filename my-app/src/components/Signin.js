import React, { useState, useEffect, useContext } from "react";
import Bikeimage from "../images/Bike.svg";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase-config";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../CartContext";
import Bikea from '../images/bikea-01.svg'

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [firebaseError, setFirebaseError] = useState("");

  const { setBypassSignIn } = useContext(CartContext);

  let navigate = useNavigate();
  useEffect(() => {
    const storedUser = localStorage.getItem("E-bike-users");

    if (storedUser) {
      navigate("/home");
    }
  }, []);

  const login = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;
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

  const emailHandler = async function (event) {
    setEmail(event.target.value);
    setFirebaseError("");
  };
  const passHandler = async (event) => {
    setPassword(event.target.value);
    setFirebaseError("");
  };
  const bypassHandler = () => {
    localStorage.setItem("E-bike-users", JSON.stringify({ name: "Guest" }));
    navigate("/home");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await login();
  };
  return (
    <>
      <div className="Main flex flex-row w-full h-[100vh]">
        {/* Sign in Form */}

        <div className="flex min-h-full  flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="flex justify-center">
            <img style={{ width: 120, height: 60 }}  src={Bikea} alt="logo" />
          </div>
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-4xl font-bold font-heading tracking-[0.25rem] leading-9  text-gray-900">
              Sign in
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full md:max-w-lg sm:max-w-xl">
            <form
              onSubmit={handleSubmit}
              className="space-y-12"
              action="#"
              method="POST"
            >
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
                    onChange={emailHandler}
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md font-body border-0 py-2.5 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-buttonGreen focus:ring-customGreen text-lg sm:leading-6"
                  />
                  {firebaseError &&
                  firebaseError.includes("auth/user-not-found") ? (
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
                    onChange={passHandler}
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 font-body py-2.5 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-buttonGreen focus:ring-customGreen text-2xl sm:leading-6"
                  />
                  {firebaseError &&
                  firebaseError.includes("auth/wrong-password") ? (
                    <span className="block mt-1 text-sm text-red-500">
                      Wrong Password
                    </span>
                  ) : (
                    ""
                  )}
                </div>
              </div>

              <div className="flex justify-start">
                <button
                  type="submit"
                  className="flex w-4/12 md:w-5/12 justify-center rounded-[4px] bg-buttonGreen px-3 py-1.5 text-md font-body font-semibold leading-6 text-white shadow-sm hover:bg-customGreen "
                >
                  Sign in
                </button>
              </div>
            </form>

            <p className="mt-10 text-left text-sm text-gray-500 font-body">
              Don't have an account?{" "}
              <Link to={"/sign-up"}>
                <span className="text-buttonGreen font-semibold">Sign up</span>
              </Link>
            </p>
            <p className="mt-14 text-center text-md md:text-lg text-gray-500 font-body">
              
              <Link to={"/home"}>
                <span
                  onClick={bypassHandler}
                  className="text-buttonGreen  font-semibold"
                >
                  Visit site
                </span>
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

export default Signin;
