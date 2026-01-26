import React from 'react'
import { Link,NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='w-full h-[15vh] flex justify-between items-center px-8 bg-black text-white'>
         <h1 className='text-5xl'>Home</h1>
        <div className='flex justify-between gap-10'>
             <NavLink className={({isActive})=>{
             return isActive?"text-red-500 border-b-2 border-b-amber-800":"text-white"
             }} to={'/'}>Home</NavLink>
             <NavLink className={({isActive})=>{
             return isActive?"text-red-500 border-b-2 border-amber-800":"text-white"
             }} to={'/about'}>About</NavLink>
             <NavLink className={({isActive})=>{
             return isActive?"text-red-500 border-b-2 border-amber-800":"text-white"
             }} to={'/courses'}>Courses</NavLink>
             
        </div>
      
      
    </div>
  )
}

export default Navbar
