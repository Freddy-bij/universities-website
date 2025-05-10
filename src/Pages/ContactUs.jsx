import { BsSend } from "react-icons/bs";

const ContactUs = () => {
  return (
    <div className='flex flex-col justify-center bg-slate-900 text-white h-screen'>
        <div className='flex justify-center '>
           <div className=' w-96 py-6 px-4'>
                <h1 className='text-center text-4xl  text-[#bd9827] font-bold uppercase pb-3'>contact us</h1>
              <form>
                <label className='text-[#bd9827] font-semibold  text-xl '>User Name</label><br></br>
                <input type="text" placeholder='Put your name here' className='w-full mb-2 bg-[#bd9827]/10 py-3 mt-2 rounded-md px-2 outline-none'/><br></br>
                <label className='text-[#bd9827] font-semibold  text-xl '>Email Adress</label><br></br>
                <input type="text" placeholder='Put your email adress here' className='w-full mb-2 bg-[#bd9827]/10 py-3 mt-2 rounded-md px-2 outline-none'/><br></br>
                <label className='text-[#bd9827] font-semibold  text-xl '>Message</label><br></br>
                <textarea placeholder='Put your message here' className='w-full h-28 bg-[#bd9827]/10 py-3 mt-2 rounded-md px-2 outline-none'></textarea><br></br>
                 <button className='bg-[#bd9827] w-full uppercase text-xl font-bold text-white py-2 rounded-md mt-2 flex justify-center items-center'>Send </button>
              </form>
           </div>   
      
        </div>
      
    </div>
   
  )
}

export default ContactUs