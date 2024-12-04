import React from 'react'
import { Link } from 'react-router-dom'
const homepage = () => {
  return (
    <div className='bg-black w-full h-full flex'>
    
      <div className='flex flex-col items-center w-1/2 gap-6 justify-center'> 
          {/* left side */}
        <div className=' font-bold text-8xl text-red-600 '><h1>DESIGN<br></br>YOUR<br></br>DREAM<br></br>HOME<br></br></h1></div>
        <p className='text-gray-500 text-center'>Strong foundations , solid designs: <br />
        Trust us to bring your concrete visions to life.</p>
        <button className='w-40 h-12 bg-red-800 rounded-md text-lg font-extrabold text-white m-4'>
          <Link to={"/about"}>
          Know More
          </Link>
          </button>
        </div>
     
        <div className='flex flex-col items-center w-1/2'>
          {/* right side */}
          <img src="https://sharonindustry.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhome.3ce56fc6.png&w=640&q=75" alt="" ></img>
        </div>
        </div>
  )
}

export default homepage