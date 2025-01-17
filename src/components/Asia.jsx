import { FaEarthAsia } from "react-icons/fa6";

function Asia() {
  return (
    <div>
      <div className="bg-[url('/images/asia.png')] h-screen bg-cover flex flex-col justify-center">
        <div className="text-center text-black">
          <div className="flex justify-center  text-6xl ">
            {" "}
            <FaEarthAsia className="bg-slate-950 text-white w-24 h-24 rounded-full py-4" />{" "}
          </div>
          <h1 className="font-bold text-2xl uppercase">Asia continent</h1>
          <p className="text-sm  font-semibold">
            visited the best universities in Asia continent you desire
          </p>
          <button className=" py-1.5 px-3  bg-slate-950 text-white capitalize hover:bg-white hover:underline hover:underline-offset-4 hover:font-bold rounded-md mt-3 hover:text-slate-950 text-md ">
            visited
          </button>
        </div>
      </div>
    </div>
  );
}

export default Asia;
