import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-6xl text-center mb-10">Products Page</h1>
      <div className="flex justify-center items-center gap-4">
       <h1 className="text-4xl text-center">
        <Link to={"/products/men"}>Men</Link>
      </h1>
       <h1 className="text-4xl text-center">
        <Link to={"/products/women"}>Women</Link>
      </h1>
      </div>
     
    </div>
  );
};

export default Products;
