import React from 'react'
import Sections1 from './Sections1'
import Section2 from './Section2'
const Allsections = () => {
  return (
    <div className='w-full h-60 flex flex-col items-center gap-8'>
      <h1 className='text-center'>Sections</h1>
      <div className='flex gap-5'>
        <Sections1/>
        <Section2/>
      </div>
    </div>
  )
}

export default Allsections
