import React from 'react'

const Container = ({children, className}) => {
  return (
    <div className={`max-w-[1600px] font-dmSans mx-auto text-sm text-[#767676] ${className}`}>
      {children}
    </div>
  )
}

export default Container