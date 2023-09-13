import React from "react";
import Bikeimage from "../images/Bike.svg";
import { Link } from "react-router-dom";

const Signup = () => {
  const style = { width: "600px" };
  return (
    <>
      <div className="Main flex flex-row w-full h-[100vh]">
        {/* Sign up Form */}

        <div className="flex min-h-full  flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-3xl font-bold font-heading tracking-[0.25rem] leading-9  text-gray-900">
              Create an account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full md:max-w-lg sm:max-w-xl">
            <form className="space-y-8" action="#" method="POST">
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
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 font-body py-2.5 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-buttonGreen focus:ring-customGreen sm:text-sm sm:leading-6"
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
                    autoComplete="email"
                    required
                    className="block w-full rounded-md font-body border-0 py-2.5 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-buttonGreen focus:ring-customGreen sm:text-sm sm:leading-6"
                  />
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
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 font-body py-2.5 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-buttonGreen focus:ring-customGreen sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="flex justify-center md:justify-start">
                <button
                  type="submit"
                  className="flex w-4/12 md:w-5/12 justify-center rounded-md bg-buttonGreen px-3 py-1.5 text-md font-body font-semibold leading-6 text-white shadow-sm hover:bg-customGreen "
                >
                  Sign up
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500 font-body">
              Already have an account?{" "}
              <Link to={"/sign-in"}>
                <span className="text-buttonGreen">Sign in</span>
              </Link>
            </p>
          </div>
        </div>

        {/* Image */}

        <div className="imagesection hidden  md:flex justify-center w-1/2 align-center ">
          <div className="w-full bg-customGreen flex justify-center align-center">
            <img src={Bikeimage} alt="Bikeimage" style={style} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
