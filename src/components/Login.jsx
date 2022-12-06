import React from 'react'
import Tilt from 'react-parallax-tilt'
import admin_icon from '../assets/admin_icon.png'
const Login = () => {
  return (
    <div className='bg-gradient-to-b from-gray-800  to-black w-full md:h-screen relative overflow-hidden flex flex-col justify-center items-center'>
    <div className='h-40-r w-40-r bg-gradient-to-r from-green-400 to-blue-500 rounded-full absolute left-2/3 -top-56 animate-pulse'></div>
        <div className='h-35-r w-35-r bg-gradient-to-r from-red-400 via-pink-500 to-purple-500 rounded-full absolute top-96 -left-20 animate-pulse'></div>
        <Tilt>
        <div className='container h-96 w-96 bg-white bg-opacity-10 relative z-2 rounded-2xl shadow-5xl border border-r-0 border-b-0 border-opacity-30 backdrop-filter backdrop-blur-sm'>
            <form className='h-full flex flex-col justify-evenly items-center'>
            <img src={admin_icon} alt='my profile' className='rounded-2xl h-20 w-20'/>
                <div className='font-signature  text-4xl ml-2 tracking-wider text-white'>Login page</div>
                <input type='text' placeholder='enter user name' className='text-white bg-transparent focus:outline-none border border-l-0 border-t-0 border-r-0'/>
                <input type='password' placeholder='enter password' className='text-white bg-transparent focus:outline-none border border-l-0 border-t-0 border-r-0'/>
                <input type='Submit' className='cursor-pointer rounded-full px-5 py-1 bg-white bg-opacity-50 hover:bg-opacity-80'/>
            </form>
        </div>
        </Tilt>
</div>
  )
}

export default Login