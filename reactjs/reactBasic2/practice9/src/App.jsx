import React, { useState } from 'react'
import Navbar from './components/Navbar'
const App = () => {
  const[theme,settheme]=useState('light');
  const changeTheme=(NewTheme)=>{
    settheme(NewTheme)
  }
  return (
    <div>
      <Navbar theme={theme} changeTheme={changeTheme}/>
    </div>
  )
}

export default App
