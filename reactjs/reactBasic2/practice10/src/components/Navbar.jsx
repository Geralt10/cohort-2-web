import { useContext } from "react"
import { UserDataContext } from "../context/UserContext"


const Navbar = () => {
  const users = useContext(UserDataContext);
  console.log(users);
  
  
  return (
    <div className='h-20 flex items-center w-full bg-red-600'>
      <h1 className='text-2xl font-bold text-amber-50'>This is Navbar {users[0].name}</h1>
    </div>
  )
}

export default Navbar
