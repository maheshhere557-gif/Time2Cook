import React, { useState } from "react";
import { Search } from "lucide-react";
const CookBook = () => {
  const [selectId, setSelecId] = useState(1);
  const [currentCategory,setCurrentCategory]=useState("all")
  const dummy = [
    { id: 1, type: "Breakfast", name: "Dosa" },
    { id: 2, type: "Lunch", name: "Biriyani" },
    { id: 3, type: "Dinner", name: "Fish Meal" },
  ];
  const ChooseMenu = [
    { id: 1, name: "All Recipes" ,path:"all" },
    { id: 2, name: "Favorite ",path:"fav"},
    { id: 3, name: " Quick Meals",path:"quick" },
  ];


  const categories={
    all:[{ id: 1, type: "All", name: "Biriyani" },
    { id: 2, type: "All", name: "Fish Meal" },{ id: 1, type: "All", name: "Biriyani" },
    { id: 2, type: "All", name: "Fish Meal" },{ id: 1, type: "All", name: "Biriyani" },
    { id: 2, type: "All", name: "Fish Meal" }],
    fav:[{ id: 1, type: "Fav", name: "Biriyani" },
    { id: 2, type: "Fav", name: "Fish Meal" }] ,
    quick:[{ id: 1, type: "Quick", name: "Biriyani" },
    { id: 2, type: "Quick", name: "Fish Meal" }]
  
}

    
  return (
    <div className="flex  flex-col items-center justify-center ">
      <div className="w-full flex md:p-10  mt-14 p-3 md:mt-7">
        <div className="w-[70%] ">
          <div>
            {" "}
            <h1 className=" text-md md:text-lg tracking-widest  uppercase text-yellow-700">
              PERSONAL LIBRARY
            </h1>
            <h2 className="font-bold mt-10 md:mt-2">My CookBook </h2>
          </div>
        </div>
        <div className="flex items-center scale-80 lg:scale-100 justify-center relative lg:w-[60%]">
          <Search className="absolute  left-2 md:left-38" />
          <input
            type="text"
            placeholder="Search saved recipes  "
            className="pl-10 border-0.5  rounded-full  lg:w-[50%] h-10 bg-gray-200/50 outline"
          />
        </div>
      </div>
      <div className="w-full flex p-2  mt-2 gap-1 md:gap-10">
        {ChooseMenu.map((i) => {
          const currentElement = i.id === selectId;
          return (
            <div key={i.id} className="  ">
              <h2
                onClick={() => {
                  setSelecId(i.id);
                  setCurrentCategory(i.path);}}
                className={` text-lg border w-30 cursor-pointer text-center rounded-xl  text-white/90 ${currentElement ? "bg-green-900" : "bg-gray-500"}`}
              >
                {i.name}
              </h2>
            </div>
          );
        })}
      </div>




      <div className="grid lg:grid-cols-5 grid-cols-2">
        {categories[currentCategory]?.map((i) =>
          
          <div
            key={i.id}
            className=" md:h-[300px] h-[50%]  w-[90%] md:w-[20%] scale-90  shadow-lg rounded-xl"
          >
            <div className="bg-black md:h-[50%] md:w-[205]   rounded-t-xl  overflow-hidden">
              <img
                src="https://cdn.dummyjson.com/recipe-images/28.webp"
                alt=""
                className="w-full h-full object-cover rounded-xl hover:scale-102 transition-all blur-[1px] hover:blur-none duration-300"
              />
            </div>
            <div>
              <h5 className="text-black rounded-md border w-[33%] scale-70 bg-orange-400/90  text-center ">
                {i.type}
              </h5>
            </div>
            <div className="w-full ml-2 text-xl font-semibold">
              <h3>{i.name} ...</h3>
            </div>

            <div className="w-full p-2">
              <p>Experience the vibrant flavors ....</p>
            </div>
            <div className="w-full flex  justify-center">
              <div className="w-[90%] border-1 opacity-50"></div>
            </div>
            <div className="w-full justify-end flex pr-2 text-green-900 font-bold">
              View Recipe
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookBook;
