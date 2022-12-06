import React from 'react'
import bety from '../assets/portfolio/bety.jpg'
import { Link } from 'react-scroll'
import { Typewriter } from 'react-simple-typewriter'
const Home = () => {
  return (
    
    <div name='home' className='h-screen w-full bg-gradient-to-b from-black to-gray-800 text-white'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full '>
                <h2 className='text-4xl sm:text-4xl font-bold text-white'>
                    I am 
                  <Typewriter 
                    loop
                    cursore
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                    words={[
                    " Full Stack Developer",
                    " video editer",
                    " a programer"
                    ]}
                  
                  />
                </h2>
                <p className='text-gray-500 py-4 max-w-md'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime accusamus nobis rem sequi vel temporibus illo, facere ipsa corporis reprehenderit commodi velit voluptatum cumque et incidunt debitis. Ad, reprehenderit magnam.
                </p>
            <div>
            <Link to='portfolio' smooth duration={500} className='text-white w-fit cursor-pointer px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500'>
                Portfolio
            </Link>
        </div>
    </div>
    <div>
<img src={bety} alt='my profile' className='rounded-2xl mx-auto w-2/3 md:w-full'/>
</div>
    </div>
    </div>
  )
}

export default Home