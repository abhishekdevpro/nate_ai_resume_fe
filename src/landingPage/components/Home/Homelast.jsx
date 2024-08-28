import React from 'react'
import './Home.css'

function Homelast() {
  return (
    <>
     <div className=' mb-5' id='bg'>
        <div className=' flex justify-around items-center align-middle'>
            <div className=' text-white items-center align-middle py-20'>
                <h1 className=' font-semibold text-xl'>Get Start Now CTA</h1>
                <p className=' text-base font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, atque.</p>
            </div>
            <div className=' flex flex-col '>
                <form className='flex flex-col gap-4 py-20 ' >
                    <input type='email'
                    placeholder='Email'
                    className=' px-4 py-2 text-black' id='bg2'/>
                    <input type='password'
                    placeholder='Password'
                    className=' px-4 py-2 text-black' id='bg2'/>
                    <button className='  text-xl px-3 py-2 rounded-lg shadow-lg bg-slate-800 text-white font-semibold '>
                        Get Started
                    </button>
                </form>
            </div>
        </div>
        
        </div> 
    </>
  )
}

export default Homelast
