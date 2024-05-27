import React from 'react'
import Section from '../components/Section'
import Button from '../components/Button'
import {info, icons} from '../constants'

import {astonship} from "../assets"


const Home = () => {
  return (
    <Section>
      <div className='flex mt-15  p-5 justify-center items-center w-full h-full m-25 pr-19 max-md:block m-10'>
        <div className='m-10 text-balance '>
          <h1 className='font-black text-6xl max-md:text-4xl text-wrap  font-code'>Marketing website done with Astro</h1>

          <p className='font-thin text-balance font-grotesk mt-4 text-n-6  '>Astroship is a starter template for startups, marketing websites & landing pages. Built with Astro.build and TailwindCSS. You can quickly create any website with this starter.</p>
          <div className="mt-8 space-x-4">
            <Button className='bg-black text-white '>Download for Free</Button>
            <Button className='border '>Github Repo</Button>
          </div>
          
        </div> 
        <div className='max-sm:hidden  pr-20 mr-17   '>
         <img src={astonship} width={512} height={414}/> 
        </div>     
      </div>
      <div className="mt-1 m-10">
        <div className='m-10'>
          <h1 className='font-black text-4xl text-wrap  font-code'>Everything you need to start a website</h1>
          <p className='font-thin text-balance font-grotesk mt-4 text-n-6'>Astro comes batteries included. It takes the best parts of state-of-the-art tools and adds its own innovations.</p>
        </div>
        <div className="flex flex-wrap gap-10 mb-10">
          {info.map((item)=>(
            <div key={item.id} className='block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]'>
              <div className='relative z-2 flex flex-col max-md:col-auto min-h-[1rem] p-[2.4rem] pointer-events-none' >
                <div className='flex  justify-start items-center  mb-5 gap-3 '>
                  <img src={item.icon} alt={item.title} width={24} height={12} className='border border-black rounded-full  bg-transparent '/>
                  <h5 className='h6 '>{item.title}</h5>
                </div>
                <p className='body-2 mb-6 text-n-6'>{item.details}</p>
              </div>
            </div>
           
          ))}
        </div>
      </div>
      <div className='container mt-6'>
        <p className="text-center text-n-6">Works with your technologies</p>
        <div className='flex flex-wrap gap-10 justify-center items-center mt-8'>
          {icons.map((items)=>(
            <div className='' key={items.id}>
              <img src={items.icon} width={30} height={30}/>
            </div>
          ))}
        </div>
      </div>
      <div className='flex p-8 md:px-20 md:py-20 mx-auto max-w-5xl rounded mt-8 bg-black flex-col items-center text-center  '>
        <h2 className='text-white text-4xl md:text-6xl tracking tight'>Build faster websites.</h2>
        <p className='text-n-6 mt-4 text-lg md:text-xl'>Pull content from anywhere and serve it fast with Astro's next-gen island architecture.</p>
        <Button className='border bg-white mt-4'>Get Started</Button>
      </div>
    </Section>
  )
}

export default Home;