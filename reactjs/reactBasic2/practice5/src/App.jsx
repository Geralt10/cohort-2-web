import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {
  const[userName,setuserName]=useState('');
  const[num,setNum]=useState(0);
  const getdata=async()=>{
    const response= await axios('https://randomuser.me/api/');
    setuserName(response.data.results[0].name.first+' '+response.data.results[0].name.last);
  }
  useEffect(()=>{
    getdata()
  },[num])
  return (
    <div>
      <h1>{userName}</h1>
      <h1>{num}</h1>
      <button  className='bg-amber-300' onClick={()=>{
        setNum(num+1)
      }}>click me</button>
    </div>
  )
}

export default App
