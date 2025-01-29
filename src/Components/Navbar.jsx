import { IoSearch } from "react-icons/io5";


const Navbar = () => {
  return (
    
        <div className='bg-[#444445] py-1.5 flex items-center'>
          <div className='w-11/12 m-auto'>
            <h1 className='text-3xl font-bold text-white'>SCHOOL</h1>
            <h2 className='font-semibold text-white'>universitry</h2>
            </div>
            <div className="items-center pr-8">
              <IoSearch className=" text-3xl text-white"/>
            </div>
       </div>
  )  
}
export default Navbar