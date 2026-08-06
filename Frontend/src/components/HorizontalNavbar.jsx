import React, { useState } from "react";
import { User, Upload, Bell, Search,User2,X } from "lucide-react";
import brand from "../assets/Brand.jpg";

const HorizontalNavbar = () => {
  const [Popup, setPopUp] = useState(false);
  return (
    <nav className="p-2 w-full shadow flex z-10 bg-[#F4F1DE] items-center justify-between sticky top-0 ">
      <div className=" flex lg:w-[10%] gap-2 justify-center items-center ">
        <img src={brand} alt="" className="h-6 mt-1 lg:h-2" />
        <h2 className="text-xl hidden  lg:block font-bold text-green-800">Time2Cook</h2>
      </div>
      <div className="flex items-center scale-80 lg:scale-100 justify-center relative lg:w-[60%]">
        <Search className="absolute left-2 lg:left-58" />
        <input
          type="text"
          placeholder="Search recipes, Ingredients, Milkshakes  "
          className="pl-10 border-0.5  rounded-full  lg:w-[50%] h-10 bg-gray-200/50 outline"
        />
      </div>
      <div className="flex lg:w-[10%] justify-between  ">
        <span className="p-1">
          <Upload />
        </span>
        
        <span className="border  p-1 rounded-full bg-green-800 text-white/90 ">
          <button onClick={() => setPopUp(true)}>
            <User />
          </button>
        </span>

        {Popup && (
          <div className="fixed z-40 inset-0 flex items-center transition-all justify-center">
            <div className="bg-white min-w-lg h-[50%] rounded-xl">
              <div className="w-full flex justify-end " > 
              <button onClick={() => setPopUp(false)} className="bg-red-600 rounded-tr-lg cursor-pointer text-white font-bold"><X/></button>


              </div>

              <User2/>
              <h2>Hello User</h2>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default HorizontalNavbar;
