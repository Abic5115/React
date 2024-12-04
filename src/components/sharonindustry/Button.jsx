import React from 'react'
import { Link } from 'react-router-dom'
const Button = (props) => {
  return (
    <div>
     
        <button className='text-white hover:text-red-700 text-xl '>
        <Link to={props.Link}>
        {props.item}
        </Link>
        </button>
    </div>
  )
}

export default Button