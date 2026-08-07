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
    
    <nav className="w-[15%] h-auto  mt-16 fixed   lg:top-0 left-0 flex flex-col z-20 ">
     <div className="block lg:hidden "> {!sideToggle?(<button className="" onClick={()=>setSideToggle(true)}> <Menu/> </button>):(<button  onClick={()=>setSideToggle(false)}> <Menu/> </button>)}</div>
    

      

    {sideToggle&&(
    <div className="border-r border-t  md:h-screen h-full rounded-lg backdrop-blur-sm  border-gray-300   md:bg-[#F4F1DE]">
      <div className=" w-full items-center md:mt-5 flex gap-3 flex-col">

        {navitems.map((i) => {
          const setItem =
            location.pathname === i.path
          return (
            
             <Link
              to={i.path}
              key={i.name}
              className={`w-[80%] p-2 items-center  flex h-10  gap-3  transition-all  hover:rounded-lg ${setItem ? "bg-green-800 rounded-xl text-white/80" : "hover:bg-gray-300 rounded-xl "}`}
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
