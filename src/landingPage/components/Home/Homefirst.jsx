import React from 'react'
import Home_Image from './HomeImage'
import { Link } from 'react-router-dom'


function Home_first() {
  return (
    <>
      <div className=' bg-gray-100 ' >
        <div className=' py-9 px-5 flex gap-3 md:gap-10 md:justify-evenly items-center flex-col md:flex-row'>
        
            <div className='  px-1 py-3 md:w-[400px]'>
                <div className=' flex flex-col gap-4 '>
                    <div className=' font-bold text-5xl'>Resume Make it past the first Round</div>
                    <div className=' text-lg font-medium text-slate-700'>Maximize your chances of getting noticed by hiring managers with a resume strategically designed to meet ATS criteria and highlight key skills for your target role.
                    </div>
                    <div className=' flex flex-wrap gap-4'>
                      <Link
                      to={"/user/sign"}
                      >
                         <button className='  px-6 py-2 text-lg rounded-full font-bold hover:shadow-2xl hover:shadow-slate-500  bg-slate-400' >Get started in 30 seconds</button>
                      </Link>
                       
                        
                    </div>
                    
                   
                </div>
            </div>

            <div className='  px-6 py-3' >
              <Home_Image/>
                            </div>
            
        </div>
      </div>

    </>
  )
}

export default Home_first
