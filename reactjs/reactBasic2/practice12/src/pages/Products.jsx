import React, { useContext } from "react";
import { ProductDataContext } from "../context/ProductContext";
import { Link } from "react-router-dom";

const Products = () => {
  const productData = useContext(ProductDataContext);

  return (
    <div className="w-full min-h-screen flex flex-wrap gap-10 px-10 py-10 justify-center bg-black">
      {productData.map((elem,idx) => (
        <Link
          to={`/products/productDetails/${elem.id}`}
          key={idx}
        >
          <div className="w-72 bg-zinc-800 rounded-2xl p-4 hover:scale-105 transition">
            <img
              src={elem.image}
              alt={elem.title}
              className="w-full h-60 object-contain"
            />
            <h2 className="text-sm text-center text-white mt-4">
              {elem.title}
            </h2>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Products;
