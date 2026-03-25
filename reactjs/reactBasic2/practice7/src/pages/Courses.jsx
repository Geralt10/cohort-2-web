import React from 'react'
import { Link,Outlet } from 'react-router-dom'
const About = () => {
  return (
    <div className='flex flex-col  items-center gap-10'>
      <h1 className='text-9xl whitespace-nowrap '>Courses page</h1>
      <div className='text-4xl  font-bold flex gap-6 shadow-2xl shadow-amber-black px-4 py-4'>
        <Link to={'web'}>Web Development</Link>
        <Link to={'dsa'}>Data Structures</Link>
      </div>
      <Outlet/>

      
    </div>
  )
}

export default About
