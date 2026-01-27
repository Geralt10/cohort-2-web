import React, { useState } from 'react'

const Navbar = ({ theme, changeTheme }) => {
  const [NewTheme, setNewTheme] = useState('');

  return (
    <div className="w-full h-16 bg-black flex items-center justify-between px-8 shadow-md">
      
      {/* Left side */}
      <h1 className="text-xl font-semibold text-amber-500">
        Theme: {theme}
      </h1>

      {/* Right side */}
      <form
        className="flex items-center gap-3"
        onSubmit={(e) => {
          e.preventDefault();
          changeTheme(NewTheme);
          setNewTheme('');
        }}
      >
        <input
          className="w-40 px-3 py-1.5 bg-white rounded-lg outline-none text-black focus:ring-2 focus:ring-amber-500"
          value={NewTheme}
          onChange={(e) => setNewTheme(e.target.value)}
          type="text"
          placeholder="Enter theme"
        />

        <button
          className="px-4 py-1.5 bg-amber-600 text-black font-medium rounded-lg hover:bg-amber-500 transition"
        >
          Submit
        </button>
      </form>

    </div>
  )
}

export default Navbar
