import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Navbar = () => {
  const [theme,setTheme]=useContext(ThemeDataContext)
  return (
    <div className='w-full h-20 bg-emerald-700 flex items-center justify-between px-5'>
       <h1 className='text-2xl font-semibold text-zinc-800'>Navbar</h1>
       <h2 className='text-2xl font-semibold text-zinc-800'>{theme}</h2>
       <button onClick={
        ()=>{
          if(theme==='light'){
            setTheme('dark')
          }
          else{
            setTheme('light')
          }
        }
       } className='px-2 py-1 bg-emerald-400 rounded-xl font-semibold text-zinc-800 active:scale-90 transition'>Change Theme</button>
    </div>
  )
}

export default Navbar
