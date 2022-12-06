import React from 'react'
import vue_web from '../assets/portfolio/vue_web.png'
import react_web from '../assets/portfolio/react_web.png'
import figna from '../assets/portfolio/figna.png'
import react from '../assets/portfolio/react.png'
import vue from '../assets/portfolio/vue.png'
import tailwind from '../assets/portfolio/tailwind.png'
import { Typewriter } from 'react-simple-typewriter'
const Portfolio = () => {
    const ports=[
        {
            id: 1,
            src:react_web
        },
        {
            id: 2,
            src:vue_web
        },
        {
            id: 3,
            src:tailwind
        },
        {
            id: 4,
            src:figna
        },
        {
            id: 5,
            src:vue
        },
        {
            id: 6,
            src:react
        }
    ]
   
  return (
    <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full md:h-screen text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-4'>Check out Some of My Works Here</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
            {ports.map(({id,src})=>(
                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                    <img src={src} alt="" className='rounded-md duration-200 hover:scale-105'/>
                    <div className='flex items-center justify-center '>
                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                    </div>
                </div>
            ))}
            </div>
        </div>
    </div>
  )
}

export default Portfolio