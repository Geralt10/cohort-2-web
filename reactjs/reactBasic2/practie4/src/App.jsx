/** @format */

import React, { useState } from "react";
import Card from "./components/Card";

const App = () => {
  const local_data=JSON.parse(localStorage.getItem('all-users'))||[];
  const [userName, setUserName] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [role, setRole] = useState("");
  const [description, setDescription] = useState("");
  const [allUsers, setAllUsers] = useState(local_data);
  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedUser=[...allUsers,{userName,imgUrl,role,description}]
    localStorage.setItem('all-users',JSON.stringify(updatedUser));
    setAllUsers(updatedUser);
    setUserName("");
    setImgUrl("");
    setRole("");
    setDescription("");
  };
  const userDelte = (idx) => {
    const copyUsers = [...allUsers];
    copyUsers.splice(idx, 1);
    setAllUsers(copyUsers);
  };
  return (
    <div className='  h-screen bg-black text-white'>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className='flex flex-wrap justify-center gap-4  p-5'
      >
        <input
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          className='border px-5 m-2 py-2 border-amber-50 rounded w-[48%] h-10'
          type='text'
          placeholder='name'
        />
        <input
          value={imgUrl}
          onChange={(e) => {
            setImgUrl(e.target.value);
          }}
          className='border px-5 m-2 py-2 border-amber-50 rounded w-[48%] h-10'
          type='text'
          placeholder='image-url'
        />
        <input
          value={role}
          onChange={(e) => {
            setRole(e.target.value);
          }}
          className='border px-5 m-2 py-2 border-amber-50 rounded w-[48%] h-10'
          type='text'
          placeholder='enter role'
        />
        <input
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          className='border px-5 m-2 py-2 border-amber-50 rounded w-[48%] h-10'
          type='text'
          placeholder='enter description'
        />
        <button className='w-[92%] h-10 text-center rounded-xl cursor-pointer bg-blue-500 font-bold active:scale-50 transition-all duration-500 ease-in-out '>
          click me
        </button>
      </form>
      <div className="flex gap-3">
         {allUsers.map((user, idx) => (
        <Card
          key={idx}
          {...user}
          onDelete={() => {
            localStorage.removeItem('all-users',JSON.stringify(user));
            userDelte(idx);
          }}
        />
      ))}
      </div>
     
    </div>
  );
};

export default App;
