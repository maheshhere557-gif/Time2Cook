import React, { useState } from "react";
import { Compass, BookOpenTextIcon, DollarSign, Vegan ,Menu} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
const VerticleNavbar = () => {
const [sideToggle,setSideToggle]=useState(true)
  
  const location = useLocation();
  const navitems = [
    { name: "Discover", icon: <Compass />, path: "/" },
    { name: "My CookBook", icon: <BookOpenTextIcon />, path: "/cookbook" },
    { name: "Ingredients", icon: <Vegan />, path: "/ingredients" },
    { name: "Subscription", icon: <DollarSign />, path: "/subscription" },


  ];
  return (<>
    
    <nav className="w-[15%] h-screen mt-16 fixed  lg:top-0 left-0 flex flex-col z-20 ">
     <div className="block lg:hidden"> {!sideToggle?(<button  onClick={()=>setSideToggle(true)}> <Menu/> </button>):(<button onClick={()=>setSideToggle(false)}> <Menu/> </button>)}</div>
    

      

    {sideToggle&&(
    <div className="border-r border-t h-full  border-gray-300 bg-[#F4F1DE] ">
      <div className="pt-10 w-full items-center flex gap-3 flex-col">

        {navitems.map((i) => {
          const setItem =
            location.pathname === i.path
          return (
            
             <Link
              to={i.path}
              key={i.name}
              className={`w-[80%] p-2 items-center  flex h-10  gap-3  transition-all  hover:rounded-lg ${setItem ? "bg-green-800 rounded-xl text-white/80" : "hover:bg-gray- text-gray-700 "}`}
            >
              <button>{i.icon}</button>
              <h2 className="  hidden lg:block font-semibold opacity-80"> {i.name}</h2>
            </Link>
           
            
          );
        })}
      </div>
     
      </div>
        )}
    </nav>
   
    </>
  );
};

export default VerticleNavbar;
