import { GiAfrica } from "react-icons/gi";
import { FaEarthAmericas } from "react-icons/fa6";
import { FaGlobeEurope } from "react-icons/fa";
import { FaGlobeAsia } from "react-icons/fa";
import { FaEarthOceania } from "react-icons/fa6";
import { useState } from "react";
import { Link } from "react-router";

function SectionA() {
  const [isOver , setIsOver]=useState(false)
  return (
    <>
       <div className="bg-gray-300 ">
      <h1 className="text-center font-bold lg:text-2xl md:text-2xl sm:text-xl text-black/80 py-10 h-full">
        Studying well Is Preparing for the Future.
      </h1>
      <div  className="w-3/4 m-auto grid grid-cols-1 gap-3  lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2" >

     
   

          <div className={` ${isOver? " text-pink-950 rounded-md  bg-[url('/public/images/america.png')] bg-no-repeat bg-cover   text-center" : "text-pink-950 font-bold uppercase rounded-md pt-[130px] bg-[url('/public/images/america.png')] bg-no-repeat bg-cover  text-center"} `}  onMouseEnter={()=>setIsOver(true)} onMouseLeave={()=>setIsOver(false)}>
          <GiAfrica className=" mx-auto text-6xl" />
          <h1 className="font-bold text-xl">Afric continent</h1>
          {isOver&&(
            <div>

            <p>visited your favorite continent </p>
       
          
            </div>
           
          )}

       
      </div>
      
        <div className={`border border-sky-400  rounded-md pt-[130px] text-center`}>
          <FaEarthAmericas className=" mx-auto text-6xl" />
          <h1 className="font-bold text-xl">Americ continent</h1>
        </div>
        <div className={`border border-sky-400  rounded-md pt-[130px] text-center`}>
          <FaGlobeEurope className=" mx-auto text-6xl" />
          <h1 className="font-bold text-xl">Europ continent</h1>
        </div>
        <div className={`border border-sky-400  rounded-md pt-[130px] text-center`}>
          <FaGlobeAsia className=" mx-auto text-6xl" />
          <h1 className="font-bold text-xl">Asia continent</h1>
        </div>
        <div className={`border border-sky-400  rounded-md pt-[130px] text-center`}>
          <FaEarthOceania className=" mx-auto text-6xl" />
          <h1 className="font-bold text-xl">Oceania continent</h1>
        
        </div>
      </div>
      </div>
    </>
  );
}
export default SectionA;
