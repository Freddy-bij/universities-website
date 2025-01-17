import { GiEarthAmerica } from "react-icons/gi";

function Americ() {
  return (
    <div className="bg-[url('/images/america.png')] bg-cover h-screen flex flex-col justify-center">
    <div className="text-center text-white">
      <div className="flex justify-center  text-6xl ">
        <GiEarthAmerica   className="bg-white text-slate-950 w-24 h-24 rounded-full py-4"/>
         
      </div>
      <h1 className="font-bold text-2xl uppercase">American continent</h1> 
      <p className="text-sm  font-semibold">visited the best universities in America continent you desire</p>
      <button className=" py-1.5 px-3  bg-slate-950 text-white capitalize hover:bg-white hover:underline hover:underline-offset-4 hover:font-bold rounded-md mt-3 hover:text-slate-950 text-md " >visited</button>
    </div>
  </div>
  )
}

export default Americ