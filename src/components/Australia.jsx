import { FaEarthOceania } from "react-icons/fa6";

function Australia() {
  return (
    <div className="bg-[url('/images/australia.png')] h-screen bg-cover flex flex-col justify-center">
    <div className="text-center text-white">
      <div className="flex justify-center  text-6xl ">
        <FaEarthOceania className="bg-white text-slate-950 w-24 h-24 rounded-full py-4" />
      </div>
      <h1 className="font-bold text-2xl uppercase">Australia continent</h1>
      <p className="text-sm  font-semibold">
        visited the best universities in Australia continent you desire
      </p>
      <button className=" py-1.5 px-3  bg-slate-950 text-white capitalize hover:bg-white hover:underline hover:underline-offset-4 hover:font-bold rounded-md mt-3 hover:text-slate-950 text-md ">
        Visited
      </button>
    </div>
  </div>
  )
}

export default Australia