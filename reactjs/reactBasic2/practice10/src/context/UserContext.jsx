import React, { createContext } from 'react'
export const UserDataContext = createContext();
const UserContext = ({children}) => {
  const users = [
  {
    id: 1,
    name: "Aarav Sharma",
    email: "aarav.sharma@gmail.com",
    age: 22,
    city: "Delhi",
    role: "Frontend Developer",
    theme: "dark"
  },
  {
    id: 2,
    name: "Priya Verma",
    email: "priya.verma@gmail.com",
    age: 24,
    city: "Mumbai",
    role: "UI/UX Designer",
    theme: "light"
  },
  {
    id: 3,
    name: "Rohan Mehta",
    email: "rohan.mehta@gmail.com",
    age: 21,
    city: "Ahmedabad",
    role: "Backend Developer",
    theme: "dark"
  },
  {
    id: 4,
    name: "Sneha Kapoor",
    email: "sneha.kapoor@gmail.com",
    age: 23,
    city: "Bangalore",
    role: "Full Stack Developer",
    theme: "light"
  },
  {
    id: 5,
    name: "Aditya Singh",
    email: "aditya.singh@gmail.com",
    age: 25,
    city: "Jaipur",
    role: "DevOps Engineer",
    theme: "dark"
  }
];

  return (
    
      <UserDataContext.Provider value={users}>
         {children}
      </UserDataContext.Provider>
    
  )
}

export default UserContext
