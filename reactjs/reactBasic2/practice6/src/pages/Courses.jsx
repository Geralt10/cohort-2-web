import React from "react";
import { Link } from "react-router-dom";
const Courses = () => {

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6">
      <h1 className="text-6xl font-bold mb-6">Courses</h1>

      <p className="text-xl text-gray-600 mb-10 text-center max-w-2xl">
        Explore our wide range of courses designed to boost your skills and
        career growth.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
         <Link to={'/courses/web/details'}>
         <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
          <h2 className="text-2xl font-semibold mb-2">Web Development</h2>
          <p className="text-gray-500">
            Learn HTML, CSS, JavaScript, React, and modern frameworks.
          </p>
        </div>
         </Link>
        <Link to={'/courses/dsa/details'}>
        <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
          <h2 className="text-2xl font-semibold mb-2">Data Structures</h2>
          <p className="text-gray-500">
            Master arrays, linked lists, trees, graphs, and algorithms.
          </p>
        </div>
        </Link>
        
        <Link to={'/courses/backend/details'} className="w-full h-fit">
          <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
          <h2 className="text-2xl font-semibold mb-2">Backend Development</h2>
          <p className="text-gray-500">
            Build APIs using Node.js, Express, MongoDB, and SQL.
          </p>
        </div>
        </Link>
      
      </div>
    </div>
  );
};

export default Courses;
