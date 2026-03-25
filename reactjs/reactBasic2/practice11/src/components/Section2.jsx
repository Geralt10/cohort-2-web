import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Section2 = () => {
    const theme = useContext(ThemeDataContext)
  return (
    <div>
      <h1>section 2</h1>
      <p className='text-center'>{theme}</p>
    </div>
  )
}

export default Section2
