import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

function Homelast() {
  return (
    <>
     <div className=' mb-' id='bg'>
        <div className=' flex justify-around items-center align-middle'>
            <div className=' text-white items-center align-middle py-20'>
                <h1 className=' font-semibold text-xl'>Get Started Now                </h1>
                <p className=' text-base font-medium'>Get started now and take the first step toward your dream job with a professionally crafted resume tailored to your career goals.
 <br/>There will be signup button when clicked it takes to signup page
.</p>
            </div>
            <div className=' flex flex-col '>
                <form className='flex flex-col gap-4 py-20 ' >
                    <input type='email'
                    placeholder='Email'
                    className=' px-4 py-2 text-black' id='bg2'/>
                    <input type='password'
                    placeholder='Password'
                    className=' px-4 py-2 text-black' id='bg2'/>
                    <Link
                    to={"/user/sign"}
                    >
                       <button className='  text-xl px-3 py-2 rounded-lg shadow-lg bg-slate-800 text-white font-semibold '>
                        Get Started
                    </button>
                    </Link>
                 
                </form>
            </div>
        </div>
        
        </div> 
    </>
  )
}

export default Homelast
