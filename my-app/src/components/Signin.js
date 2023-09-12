import React from 'react'
import Bikeimage from "../images/Bike.svg"

const Signin = () => {
    const style={width : '600px'}
  return (
  <>
  <div className="Main flex flex-row w-full h-[100vh]">

    {/* Sign in Form */}
    <div className="flex min-h-full w-1/2 flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-[4px] border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-buttonGreen focus:ring-customGreen sm:text-sm sm:leading-6"
                  />
                
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
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
                  className="block w-full rounded-[4px] border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-buttonGreen focus:ring-customGreen sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-1/2 justify-center rounded-[4px] bg-buttonGreen px-2 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-buttonGreen "
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Don,t have an account{' '}
            <a href="#" className="font-semibold leading-6 text-buttonGreen hover:text-buttonGreen">
              Register here
            </a>
          </p>
        </div>
      </div>

      {/* Image */}


      <div className="imagesection flex justify-center w-1/2 align-center ">

        <div className="w-full bg-customGreen flex justify-center align-center">
            <img src={Bikeimage} alt="Bikeimage" style={style} />

        </div>
      </div>


  </div>
  
  
  
  
  
  
  </>
  )
}

export default Signin