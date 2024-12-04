import React from 'react'

function Navbar() {
  return (
    <div className='flex justify-between p-1  h-13'>
        {/* leftside */}
        <div className=''>
            <img className='w-40 h-11' src="https://images.ctfassets.net/y2ske730sjqp/1aONibCke6niZhgPxuiilC/2c401b05a07288746ddf3bd3943fbc76/BrandAssets_Logos_01-Wordmark.jpg?w=940" alt="" />
        </div>

        {/* rightside */}
        <div className='flex  gap-2 items-center '>
          <select className='border-2 border-black bg-red-700 text-white rounded-md'><option value="English">English</option>
          <option value="malayalam">Malayalam</option></select>
         <button className='border-2 border-red-600 w-20 h-7 text-red-700 rounded-md' >Login</button>
         <button className='border-2 border-red-600 w-20 h-7  text-red-700 rounded-md'>Signup</button>

        </div>
    </div>
  )
}

export default Navbar