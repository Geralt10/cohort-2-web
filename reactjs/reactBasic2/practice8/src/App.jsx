import React from 'react'
import axios from 'axios'
const App = () => {
  const getdata = async ()=>{
    const response = await axios.get("http://localhost:8000");
    console.log(response);
    
  }
  return (
    <div>
      <button onClick={()=>{
        getdata()
      }}>click me</button>
    </div>
  )
}

export default App
