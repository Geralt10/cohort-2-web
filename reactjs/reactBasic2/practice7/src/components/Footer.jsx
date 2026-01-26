import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
    const navigate=useNavigate('')
  return (
    <div className='w-full h-25 flex justify-between items-center absolute bottom-0 px-5 bg-black text-amber-50'>
      <h1 className='text-4xl font-bold'>Footer</h1>
      <button onClick={()=>{
       navigate('/courses')
      }} className='px-8 py-3 rounded-xl bg-blue-500 active:scale-95'>Explore More Courses</button>
    </div>
  )
}

export default Footer
