import React from 'react'
import Bikeimage from "../images/Bike.svg"

const Signup = () => {
    const style={width : '600px'}
  return (
    <>
  <div className="Main hidden  md:flex flex-row w-full h-[100vh]">

    {/* Sign in Form */}
    <div className="flex min-h-full w-1/2 flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    
          <h2 className="mt-10 text-center text-2xl font-heading tracking-[0.25rem] font-bold leading-9  text-gray-900">
            Create an account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium font-body leading-6 text-gray-900">
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
                <label htmlFor="password" className="block text-sm font-medium font-body leading-6 text-gray-900">
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
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium font-body leading-6 text-gray-900">
                  Confirm Password
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
                className="flex w-1/2 justify-center rounded-[4px] bg-buttonGreen px-2 py-1.5 text-sm font-body font-semibold leading-6 text-white shadow-sm hover:bg-buttonGreen "
              >
                Sign up
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500 font-body">
            Already have an account?{' '}
            <a href="#" className="font-semibold leading-6 text-buttonGreen hover:text-buttonGreen font-body">
              Signin here
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

  
  {/* Mobile version */}

  <div className="Main flex md:hidden flex-row w-full h-[100vh] justify-center">

    {/* Sign in Form */}
    <div className="flex min-h-full w-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm flex justify-center">
    
          <h2 className="mt-10 text-center text-2xl font-bold font-heading tracking-[0.25rem] leading-9  text-gray-900">
            Create an account
          </h2>
        </div>

        <div className=" flex flex-col justify-center mt-10 sm:mx-auto sm:w-8/12 sm:max-w-sm">
          <form className="flex flex-col justify-center  space-y-6 " action="#" method="POST">
            <div className="flex flex-col w-full justify-center">
              <label htmlFor="email" className="flex justify-start
               text-sm font-medium font-body leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2 flex justify-start">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-[80%] rounded-[4px] border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-buttonGreen focus:ring-customGreen sm:text-sm sm:leading-6"
                  />
                
              </div>
            </div>

            <div>
              <div className="flex flex-col w-full justify-center">
                <label htmlFor="password" className="flex justify-start text-sm font-medium font-body leading-6 text-gray-900">
                  Password
                </label>
               
              </div>
              <div className="mt-2 flex justify-start">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-[80%] rounded-[4px] border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-buttonGreen focus:ring-customGreen sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex flex-col w-full justify-center">
                <label htmlFor="password" className="flex justify-start text-sm font-medium font-body leading-6 text-gray-900">
                  Confirm Password
                </label>
               
              </div>
              <div className="mt-2 flex justify-start">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-[80%] rounded-[4px] border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-buttonGreen focus:ring-customGreen sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="flex w-9/12 justify-start"> 
              <button
                type="submit"
                className="flex w-[60%] justify-center rounded-[4px] bg-buttonGreen px-2 py-1.5 text-sm font-semibold font-body leading-6 text-white shadow-sm hover:bg-buttonGreen "
              >
                Sign up
              </button>
            </div>
          </form>

          <p className="mt-10 flex justify-start text-center text-sm font-body text-gray-500">
            Already have an account?{' '}
            <a href="#" className="font-semibold leading-6 text-buttonGreen hover:text-buttonGreen font-body">
              Singin here
            </a>
          </p>
        </div>
      </div>



  </div>
  
  
  
  
  
  
  </>
  )
}

export default Signup