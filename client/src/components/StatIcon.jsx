import React from 'react'

function StatIcon({icon, number, text}) {
  return (
    <div className='flex items-center mx-4 md:my-0 my-4 md:ml-4 ml-16'>
        <img src={icon} alt="stat-icon" />
        <div className='ml-4'>
            <h3 className='font-bold text-2xl'>{number}</h3>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default StatIcon