import React from 'react'
import { Link } from 'react-router'

const Student = () => {
  return (
    <div>
    <div className="bg-[url('/public/team.png')] w-full h-screen flex flex-col justify-center  ">
       <div className="w-1/2 mx-auto ">

       <div className="uppercase text-4xl font-bold mt-7">
            <h1 className="pb-4">Preparing Students</h1>
            <h2 className="pb-4">for Successful Futurs</h2>
             </div>
           <Link to="/countries"><button className="bg-white text-black font-bold py-5 px-5 hover:bg-blue-200 hover:text-white hover:font-bold rounded-xl uppercase text-2xl mt-8">find your favorite country</button></Link> 
       </div>
      
    </div>

    </div>
  )
}

export default Student