import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='w-full h-[15vh] flex justify-between items-center px-8 bg-black text-white'>
         <h1 className='text-5xl'>Home</h1>
        <div className='flex justify-between gap-10'>
             <Link to={'/'}>Home</Link>
             <Link to={'/about'}>About</Link>
             <Link to={'/products'}>Products</Link>
             <Link to={'/courses'}>Courses</Link>
             
        </div>
      
      
    </div>
  )
}

export default Navbar
