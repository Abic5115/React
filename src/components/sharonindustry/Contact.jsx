import React from 'react'
import { Link } from 'react-router-dom'
const contact = () => {
  return (
    <div className='bg-gray-600 w-full h-screen flex flex-col gap-10'>
        <div>
        <h1 className='text-2xl font-semibold text-white m-4'>Contact Us</h1>
        </div>
        <div className='flex items-center justify-center m-5'>
            <div className='w-1/3 flex flex-col gap-5'>
                <h1 className='text-white'>ADDRESS</h1>
                <p className='text-xl'>
                    <Link to={"https://www.google.com/maps/place/SHARON+INDUSTRIES/@9.847249,76.4086673,17z/data=!3m1!4b1!4m5!3m4!1s0x3b0876f6aaaaaaab:0x24dcba3e08ddf0bd!8m2!3d9.847249!4d76.410856"}>Sharon Industries, kanjiramattom(po) Ernakulam pin: <br /> 682315</Link> </p>
            </div>
            <div className='w-1/3 flex flex-col gap-5 pl-40'><h1 className='text-white'>CALL US</h1>
            <p className='text-xl'>+91 9447797308 <br />
            +91 9495997308</p></div>

            <div className='w-1/3 flex flex-col gap-5 pl-32'><h1 className='text-white'>EMAIL US</h1>
            <p className='text-xl'>sharonindustries@gmail.com</p>
            </div>
        </div>
        <div>_______________________________________________________________________________________________</div>
    </div>
  )
}

export default contact