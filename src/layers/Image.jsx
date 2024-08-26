import React from 'react'
import { Link } from 'react-router-dom'

const Image = ({to, src, alt, className}) => {
  return (
    <Link className='outline-none' to={to}>
        <img src={src} alt={alt} className={`block ${className}`}/>
    </Link>
  )
}

export default Image