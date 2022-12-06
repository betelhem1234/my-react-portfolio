import React from 'react'
import css from '../assets/portfolio/css.png'
import html from '../assets/portfolio/html.png'
import figna from '../assets/portfolio/figna.png'
import react from '../assets/portfolio/react.png'
import vue from '../assets/portfolio/vue.png'
import tailwind from '../assets/portfolio/tailwind.png'
const Experiance = () => {
    const exps=[
        {
            id:1,
            src:figna,
            title:'FIGMA',
            style:'shadow-white'
        },
        {
            id:2,
            src:vue,
            title:'VUE',
            style:'shadow-pink-400'
        },
        {
            id:3,
            src:html,
            title:'HTML',
            style:'shadow-blue-500'
        },
        {
            id:4,
            src:tailwind,
            title:'TAILWIND',
            style:'shadow-green-500'
        },
        {
            id:5,
            src:css,
            title:'CSS',
            style:'shadow-white'
        },
        {
            id:6,
            src:react,
            title:'REACT',
            style:'shadow-pink-400'
        },
    ]
  return (
    <div name='experiance' className='bg-gradient-to-b to-black from-gray-800 w-full h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 p-2 border-gray-500'>Experiance</p>
                <p className='py-6'>These are the Experiences i have worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                {exps.map(({id,src,title,style})=>(
                    <div key={id} className={'shadow-md hover:scale-105 duration-500 py-2 rounded-lg'+" "+ style}>
                    <img src={src} alt='' className='w-20 mx-auto'/>
                    <p className='mt-4'>{title}</p>
                </div>
                ))}
              
            </div>
        </div>
    </div>
  )
}

export default Experiance