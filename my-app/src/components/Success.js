import React from 'react'
import Confetti from "../animations/confetti.gif"
import Thanks from "../images/thanks.svg"
const Success = () => {
  const style={width : '140px'}
  const thanksStyle={width : '500px'}
  return (
    <div className="w-full h-[100vh] pt-12">

    {/* Button */}

    <div className=" w-full flex justify-end px-4 py-4">
      <button className="py-2 px-12 rounded-[4px] font-body font-medium bg-buttonGreen hover:bg-customGreen">
        Shop
      </button>
    </div>

    {/* Animation */}
    <div className="flex w-full flex-row items-center justify-center py-[2rem] md:py-[1rem]">
      <img src={Confetti} style={style} alt="Confetti" />
    </div>

    {/* Thanks */}

    <div className="flex w-full justify-center px-6 md:px-0 py-[2rem] md:py-[1rem]">
      <img className="w-4rem" src={Thanks} style={thanksStyle} alt="Thanks" />
    </div>

    {/* Order confirmation */}
    <div className=" absolute bottom-0 right-0 flex w-full flex-col items-center py-[3rem] md:py-[3rem] px-2 md:px-0 justify-center bg-customGreen space-y-2">
      <h1 className="font-heading text-3xl md:text-5xl tracking-[0.3rem] md:tracking=[0.6rem]">Your order is placed</h1>
      <h2 className="font-body font-medium text-md text-center md:text-xl ">You will be receiving a confirmation email with order details</h2>
    </div>


    </div>
  )
}

export default Success
