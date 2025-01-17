import React from 'react'
import { IoSearch } from 'react-icons/io5'
import { LiaSearchSolid } from 'react-icons/lia'
import { Link } from 'react-router'

const Student = () => {
  return (
    <div>
    <div className="bg-[url('/public/team.png')] w-full h-screen    ">
     <div className='h-screen bg-slate-950/50 flex flex-col justify-center'>
       <div className="w-1/2 mx-auto  ">

       <div className="mt-7 text-center">
            <h1 className="pb-4 uppercase text-5xl font-bold text-white font-title ">find the perfect college</h1>
            <p className="pb-4 text-xl font-bold text-yellow-500 capitalize">explore the best option around the world</p>
             </div>
           <div>
            <div className='flex justify-center'>
            <input type="text" placeholder='search your favorite country here...' className='w-96 py-2 px-1 bg-slate-950/50 outline-none  rounded-l-lg capitalize text-white ' />
            <button className='hover:bg-slate-950/50 text-white w-10 rounded-r-lg bg-yellow-500 flex justify-center items-center text-3xl '><Link to='countries' target='_blank'><LiaSearchSolid/></Link></button>
            </div>
          
           </div>
       </div>
       </div> 
    </div>

    </div>
  )
}

export default Student