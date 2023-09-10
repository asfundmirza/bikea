import React from "react";
import aboutBike from "../images/AboutBike.svg";
import bikeaLogo from "../images/bikea-01.svg";
import { useNavigate } from "react-router-dom";
const About = () => {
  let navigate = useNavigate();

  return (
    <div className="flex flex-col pt-12">
      {/* About Header */}

      <div className="flex  bg-customGreen p-4 py-8 ">
        <div className="flex flex-auto flex-col gap-12">
          <div className="flex mt-5   justify-center ">
            <p className="font-bold text-4xl md:text-6xl">About</p>
          </div>
          <div className="flex justify-evenly space-x-4 md:space-x-2 px-6 ">
            <div className="flex flex-col justify-center gap-4">
              <p className="font-bold text-sm  md:text-xl leading-tight ">
                Founded in
                <br />
                2010
              </p>
              <p className="font-light text-xs md:text-lg leading-tight">
                Over a decade of delighting
                <br /> customers
              </p>
            </div>
            <div className="flex flex-col justify-center gap-4">
              <p className="font-bold text-sm md:text-xl leading-tight ">
                Premium
                <br />
                Quality
              </p>
              <p className="font-light text-xs md:text-lg leading-tight">
                For people that refuse to
                <br /> settle for less
              </p>
            </div>
            <div className="flex flex-col justify-center gap-4">
              <p className="font-bold text-sm md:text-xl leading-tight">
                Affordable
                <br />
                Price
              </p>
              <p className="font-light text-xs md:text-lg leading-tight">
                Best price for this quality
                <br /> bikes
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* History section */}

      <div className="flex  mt-4 md:mt-7 flex-col md:flex-row gap-12 p-5 md:px-9">
        <div className="flex flex-col mt-5 justify-center items-center md:items-start gap-3 flex-1">
          <p className="font-bold text-2xl md:text-4xl">History</p>
          <p className="text-xs md:text-base leading-tight">
            Bikea was founded in 2010 to be the very best brand of electric
            bikes on Earth, not necessarily the biggest.
            <br />
          </p>
          <p className="text-xs md:text-base leading-tight">
            The story of Bikea is one of organic growth. The fun of electric
            bikes and the culture of Bikea are both highly contagious.
            <br />
          </p>
          <p className="text-xs md:text-base leading-tight ">
            Bikea founder Max william is a serial entrepreneur and former
            automotive industry executive. He also happens to live at the top of
            a giant hill, and that’s why he bought his first electric bike.
            “That first bike was awful,” he remembers, “but it got me up the
            hill.”
            <br />
          </p>
          <p className="hidden md:block text-xs md:text-base leading-tight">
            His early experience as a customer got hooked on electric bikes. In
            2008, he opened a shop in Newport Beach, CA that quickly became the
            largest electric bicycle retailer in the United States.
            <br />
          </p>
          <p className="text-xs md:text-base leading-tight">
            Soon, Max found himself frustrated and disappointed with the poor
            quality and boring style of all the electric bikes on the market. He
            dreamt of creating his own brand of electric bikes that would live
            up to his high standards and appeal to more people.
            <br />
          </p>
          <p className="text-xs md:text-base leading-tight">
            That’s when Bikea was born, on the back of a napkin, in 2010. The
            comfortable bikes were instant crowd pleasers.
          </p>
        </div>

        {/* Image */}

        <div className="flex flex-1 justify-center items-center mt-5 ">
          <img
            src={aboutBike}
            alt="AboutBike"
            width={300}
            height={300}
            className=" rounded-md w-auto h-auto md:w-[600px] md:h-[400px]"
          />
        </div>
      </div>

      {/* Logo image */}

      <div className="flex justify-center  mt-7 mb-10 ">
        <img src={bikeaLogo} alt="bikeaLogo" width={100} height={100} />
      </div>
    </div>
  );
};

export default About;
