import React from 'react'

const Contact = () => {
  return (
    <div>
    <div name='contact' className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white '>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full '>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gr'>Contact</p>
                <p className='py-6 text-2xl'>Submit the form bellow to get in touch with me</p>
            </div>
            <div className='flex justify-center items-center'>
            
            <form action='' className='flex flex-col w-full md:w-1/2'>
              
              <label className='relative'>
              <input type='text' className='w-full h-20 mb-6 px-6 text-2xl bg-black border-2 border-white rounded-lg border-opacity-50 outline-none focus:border-blue-500 focus:text-white transition duration-200'/>
               <span className='text-2xl text-white text-opacity-80 absolute left-0 top-4 mx-6 px-2 transition duration-200 input-text'>Enter your name</span>
  
          </label>
          <label className='relative'>
              <input type='text' className='w-full h-20 mb-6 px-6 text-2xl bg-black border-2 border-white rounded-lg border-opacity-50 outline-none focus:border-blue-500 focus:text-white transition duration-200'/>
               <span className='text-2xl text-white text-opacity-80 absolute left-0 top-4 mx-6 px-2 transition duration-200 input-text'>Enter your E-mail</span>
  
          </label>
          <label className='relative'>
              <textarea type='text' className='w-full h-60 px-6 text-2xl bg-black border-2 border-white rounded-lg border-opacity-50 outline-none focus:border-blue-500 focus:text-white transition duration-200'></textarea>
               <span className='text-2xl text-white text-opacity-80 absolute left-0 top-4 mx-6 px-2 transition duration-200 input-text'>Enter your message</span>
  
          </label>
              <button className='text-white  bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 '>Send Message</button>
            </form>
            
            </div>
        </div>

        </div>
      
      </div>
  )
}

export default Contact