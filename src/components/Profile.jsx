import React from 'react'
import salman from '../assets/img/dfgh.jpg'
import {AiFillEdit} from 'react-icons/ai'
import { Link, NavLink } from 'react-router-dom';

function Profile() {
  return (
    <div className=' relative'>

    <div className=" w-fit bg-gradient-to-t from-gray-900 to-stone-700 m-6 p-5 rounded-lg shadow-lg flex gap-4  ">
    <div className="flex flex-col ">
      <img
        src={salman}
        alt="Profile Photo"
        className="max-w-[10rem] rounded-full mb-3 mt-3 md:w-60 mdh-60 object-cover "
      />
      <h2 className="text-xl font-bold text-gray-300">salman</h2>
      <p className="text-stone-600-500 mb-2  text-yellow-400">full stack Developer</p>
    </div>
    
    <div className="mt-4 pl-5 ">
      <div className="flex flex-col">
        <div>
          <p className="text-sm text-gray-500">Mobile:</p>
          <p className="text-md text-yellow-400 font-semibold">123-456-7890</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Email:</p>
          <p className="text-md   text-yellow-400 font-semibold">salman123@example.com</p>
        </div>
      </div>
      
      <div className="mt-4 ">
        <p className="text-sm text-gray-500">Location:</p>
        <p className="text-md   text-yellow-400 font-semibold">New York, NY</p>
      </div>
      
    
    </div>

      
    <div className='absolute w-10 h-10 bg-white right-14  rounded-3xl flex items-center   justify-center md:left-[400px] /'>

    <Link to={"/EditProfile"}  className='text-yellow-500 shadow-2xl shadow-zinc-700'>


        <AiFillEdit size={25}  />
    </Link>
  
      </div>



     


    
   


   
  </div>
    </div>

    )
}

export default Profile