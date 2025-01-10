import country from"../images/country.svg"
import university from"../images/university.svg"

const Classification = () => {
  return (
    <div className=" h-screen ">
       <div className="flex justify-center gap-20 text-black shadow-lg bg-blue-200 w-1/2 mx-auto py-6 rounded-full absolute top-[850px] left-[450px] ">
        <div className="flex items-center gap-4">
         <div className="bg-white w-20  rounded-full px-2 py-2">
         <img src={country} alt={country}  />
         </div>
      <div>
      <h1 className="text-3xl font-bold">+190 </h1> 
      <p className="text-xl">country</p>
      </div>
        
       </div>
     <div>
    <div className="flex items-center gap-4">

    <div className="bg-white w-20 rounded-full px-2 py-2">
        <img src={university} alt={university}  />
    </div>
   <div className="text-3xl font-bold">
   <h1>+13000 </h1>
   <p className="text-xl ">university</p>
   </div>
   
    </div>
  
     </div>

       </div>
    </div>
  )
}

export default Classification