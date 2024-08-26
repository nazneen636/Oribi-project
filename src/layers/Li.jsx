import React from 'react'
import { Link } from 'react-router-dom'

const Li = ({className, to, liText}) => {
  return (
    <li className='block'>
        <Link className={`block font-bold py-3 md:py-0 hover:text-[#262626] hover:bg-[#ffffff] md:hover:bg-transparent duration-300 transition-all ${className}`} to={to}>
            {liText}
        </Link>
    </li>
  )
}

export default Li