import React, { useState } from 'react'

const App = () => {
  const[userName,setuserName]=useState('');
  const[email,setemail]=useState('');
  const[names,setnames]=useState([]);
  
 const submitHandler=(e)=>{
    e.preventDefault();
    setnames((prev)=>{
          return [...prev,{userName,email}];
    })
    setuserName('');
    setemail('')
  }
   
   
  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input type="text" 
        value={userName}
        onChange={(e)=>{
          setuserName(e.target.value);
        }}
        />
        <input type="email" 
        value={email}
        onChange={(e)=>{
          setemail(e.target.value);
        }}
        />
        <button>submit</button>
      </form>
       <ul>
        {names.map((item, index) => (
       <li key={index}>
  Name: {item.userName}, Email: {item.email}
</li>

        ))}
      </ul>
    </div>
  )
}

export default App
