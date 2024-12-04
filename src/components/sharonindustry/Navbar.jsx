import React from 'react'
import Button from './Button'
function Navbar() {
  return (
    <div className='bg-black h-16 flex items-center justify-around'>
      {/* leftside */}
      <div>
      <h1 className='font-bold text-white text-2xl'>SHARON INDUSTRIES</h1>
      </div>
      {/* right side */}
      <div className='flex gap-5'>

      {/* <h2 className=' text-white text-xl  hover:text-red-800'>Home</h2>
      <h2 className=' text-white text-xl  hover:text-red-800'>About</h2>
      <h2 className=' text-white text-xl  hover:text-red-800'>Contact</h2> */}
      <Button item="Home" Link="/"/>
      <Button item="About" Link="/about"/>
      <Button item="Contact" Link="/contact"/>
      
      </div>
    </div>
  )
}

export default Navbar
