import React, { useEffect, useState } from "react";
import { Clock, ForkKnife, Heart, MoveRight, Utensils } from "lucide-react";
const Discover = () => {
  const dummy = [
    { id: 1, type: "Breakfast", name: "Dosa" },
    { id: 2, type: "Lunch", name: "Biriyani" },
    { id: 3, type: "Dinner", name: "Fish Meal" },
  ];

  const [randomMeal, setRandomMeal] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let RandomGenerate = async () => {
      try {
        setLoading(true);

        let request = Array.from({ length: 4 }, () =>
          fetch("https://www.themealdb.com/api/json/v1/1/random.php").then(
            (res) => res.json(),
          ),
        );

        let results = await Promise.all(request);

        let MealsArray = results
          .map((data) => data?.meals?.[0])
          .filter(Boolean);
        setRandomMeal(MealsArray);
      } catch (e) {
        console.log("error:", e);
      } finally {
        setLoading(false);
      }
    };
    RandomGenerate();
  }, []);

  const hero = randomMeal[0];
  const remaining = randomMeal.slice(1);
  console.log(hero);
  return (
    <div className="flex bg-[#F4F1DE]/50 min-h-screen ">
      <div className="w-full h-screen ">
        <div className="min-h-screen w-full flex flex-col  gap-5  items-center relative mt-5">
          <div className="group  h-[400px] w-[90%] flex  items-center rounded-xl shadow-lg justify-center  border overflow-hidden">
            {loading ? (
              ""
            ) : (
              <img
                src={hero?.strMealThumb}
                alt=""
                className="h-full w-full object-cover  rounded-xl transition-all ease-in-out duration-400 group-hover:scale-103"
              />
            )}
            <div className=" absolute  top-4 right-7 md:right-20  ">
              <button className="border rounded-full p-1 bg-white/90">
                {" "}
                <Heart size={24} />
              </button>
            </div>

            <div className="  text-white flex gap-5 items-center justify-end flex-col p-5  absolute h-[400px] rounded-xl w-[90%]   bg-gradient-to-t from-black/80 to-white/10 pointer-events-auto ">
              <div className="flex gap-2 lg:gap-5 w-full lg:ml-30 lg:scale-100 mt-12 lg:mt-0">
                <div className=" lg:w-40 text-center h-auto bg-green-800 text-sm rounded-xl">
                  <h2 className="text-white font-semibold">
                    Recipe Of the Day
                  </h2>
                </div>
                <div className="flex gap-1  ">
                  <Clock />
                  <h2> 45 Mins</h2>
                </div>
                <div className="flex gap-1">
                  <ForkKnife />
                  <h2> Intermediate</h2>
                </div>
              </div>

              <div className=" text-2xl lg:text-5xl font-bold  flex gap-5 w-full lg:ml-30 ">
                <h2>{hero?.strMeal}</h2>
              </div>
              <div className="  font-semibold opacity-80 flex gap-5 w-full lg:ml-30 ">
                <p className="text-sm"></p>
              </div>
              <div className="    flex gap-5 w-full mt-5 lg:ml-30 ">
                <button className="text-md font-serif cursor-pointer border rounded-lg p-1 lg:w-[14%] text-center justify-center flex gap-2.5 bg-green-900">
                  Start Cooking <MoveRight className="mt-1 " />
                </button>
              </div>
            </div>
          </div>
          <div className="w-[90%] flex justify-between">
            <div className="w-[40%]  text-xl font-semibold flex justify-between ">
              <h2 className="border-b-2 border-gray-500">Categories</h2>
              <h2 className="hidden  md:block border-b-2 border-gray-500">Recently Added</h2>{" "}
            </div>
            <h2 className=" hidden md:flex  border-b-2 border-green-900 gap-2 text-green-900 font-bold">
              View All <MoveRight />
            </h2>
          </div>
          <div className="md:w-[90%] md:h-[300px]   p-1 flex md:flex-row flex-col rounded-xl items-center justify-between ">
            <div className="bg-white h-[50%] md:h-[90%] w-[90%] md:w-[20%] rounded-xl  flex flex-col items-center justify-between ">
              {dummy.map((i) => (
                <div
                  key={i.id}
                  className="bg-black md:h-[30%] h-[100px] md:w-[99%] w-full mb-2 md:mb-0 rounded-xl text-white flex items-center justify-center relative overflow-hidden"
                >
                  <img
                    src="https://cdn.dummyjson.com/recipe-images/28.webp"
                    alt=""
                    className="w-full h-full object-cover rounded-xl hover:scale-102 transition-all blur-[1px] hover:blur-none duration-300"
                  />

                  <h2 className="absolute text-black font-extrabold text-2xl">
                    {" "}
                    {i.type}{" "}
                  </h2>
                </div>
              ))}
            </div>
            <div className="w-[90%] md:hidden flex justify-between">
              <div className="w-[45%] text-xl font-semibold flex justify-between ">
                <h2 className=" md:hidden">Recently Added</h2>{" "}
              </div>
              <h2 className=" md:hidden flex gap-2 text-green-900 font-bold">
                View All <MoveRight />
              </h2>
            </div>

            {remaining.map((i) => (
              <div
                key={i.idMeal}
                className="bg-white md:h-[300px] h-[50%]  w-[90%] md:w-[20%] scale-90  shadow-lg rounded-xl"
              >
                <div className="bg-black md:h-[50%] md:w-[205] h-64  rounded-t-xl  overflow-hidden">
                  <img
                    src={i.strMealThumb}
                    alt=""
                    className="w-full h-full object-cover rounded-xl hover:scale-102 transition-all md:blur-[1px] md:hover:blur-none duration-300"
                  />
                </div>
                <div>
                  <h5 className="text-black rounded-md border w-[50%] scale-70 bg-orange-400/90  text-center ">
                    {i.strCategory}
                  </h5>
                </div>
                <div className="w-full ml-2 text-xl font-semibold">
                  <h3>{i.strMeal} ...</h3>
                </div>

                <div className="w-full flex  justify-center mt-6">
                  <div className="w-[90%] border-1 opacity-50"></div>
                </div>
                <div className="w-full mt-1 justify-end flex pr-2 text-green-900 font-bold">
                  View Recipe
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
