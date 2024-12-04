import React from 'react'

function heading({PropsHeading}) {
  return (
    // <h1 className='font-bold w-60 h-10 text-4xl ' >NOTIME</h1>
    // <h1 className='font-bold w-60 h-10 text-4xl'> {props.text}</h1>
    <h1 className='font-bold w-60 h-10 text-4xl'>{PropsHeading}</h1>
  )
}

export default heading