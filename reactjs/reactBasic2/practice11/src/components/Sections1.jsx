import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Sections1 = () => {
    const theme = useContext(ThemeDataContext)
  return (
    <div>
      <h1>section 1</h1>
      <p className='text-center'>{theme}</p>
    </div>
  )
}

export default Sections1
