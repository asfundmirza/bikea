import React from "react";

const Header = () => {
  return (
    <div className="flex w-full p-3 bg-white shadow-md items-center justify-between px-8 ">
      <div className="flex justify-start">
        <p className="font-bold">Cyclea</p>
      </div>
      <div className="flex justify-center gap-x-1 flex-grow">
        <p className="hover:cursor-pointer hover:bg-customGreen hover:border rounded-lg hover:border-customGreen px-4 py-1 transition-all duration-100">
          Model
        </p>

        <p className="hover:cursor-pointer hover:bg-customGreen hover:border rounded-lg hover:border-customGreen px-4 py-1 transition-all duration-100">
          About
        </p>
      </div>
      <div className="flex justify-end">
        <p>My Account</p>
      </div>
    </div>
  );
};

export default Header;