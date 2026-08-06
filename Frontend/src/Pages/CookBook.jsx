import React, { useState } from "react";
import { Search } from "lucide-react";
const CookBook = () => {
  const [selectId,setSelecId]=useState("")
  const ChooseMenu = [
    { id: 1, name: "All Recipes" },
    { id: 2, name: "Favorite " },
    { id: 3, name: " Quick Meals" },
  ];
  return (
    <div className="flex  flex-col items-center justify-center">
      <div className="w-full flex p-10 mt-7">
        <div className="w-[70%] ">
          <div>
            {" "}
            <h1 className="text-lg tracking-widest  uppercase text-yellow-700">
              PERSONAL LIBRARY
            </h1>
            <h2 className="font-bold mt-2">My CookBook </h2>
          </div>
        </div>
        <div className="flex items-center scale-80 lg:scale-100 justify-center relative lg:w-[60%]">
          <Search className="absolute  left-38" />
          <input
            type="text"
            placeholder="Search saved recipes  "
            className="pl-10 border-0.5  rounded-full  lg:w-[50%] h-10 bg-gray-200/50 outline"
          />
        </div>
      </div>
      <div className="w-full flex  gap-10">
    {ChooseMenu.map((i)=>{
      const currentElement=i.id===selectId
      return(
    <div key={i.id} className="  ">
        <h2 onClick={()=>setSelecId(i.id)} className={` text-lg border w-30 cursor-pointer text-center rounded-xl  text-white/90 ${currentElement  ? "bg-green-900":"bg-gray-500"}`}>
          {i.name}
        </h2>
        

      </div>)} )}
     </div>
    </div>
  );
};

export default CookBook;
