import React, { useContext } from "react";
import { ProductDataContext } from "../context/ProductContext";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const productData = useContext(ProductDataContext);
  const { ProductId } = useParams();

  if (!productData.length) {
    return <h1 className="text-white text-center mt-20">Loading...</h1>;
  }

  const selectedProduct = productData.find(
    (item) => item.id === Number(ProductId)
  );

  if (!selectedProduct) {
    return <h1 className="text-red-500 text-center mt-20">Product not found</h1>;
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-10">
      <div className="max-w-4xl w-full bg-zinc-900 text-white rounded-2xl p-8 grid md:grid-cols-2 gap-10">
        
        <img
          src={selectedProduct.image}
          alt={selectedProduct.title}
          className="w-72 mx-auto object-contain"
        />

        <div className="flex flex-col gap-4">
          <span className="text-zinc-400 uppercase text-sm">
            {selectedProduct.category}
          </span>

          <h1 className="text-2xl font-bold">{selectedProduct.title}</h1>

          <p className="text-zinc-300">{selectedProduct.description}</p>

          <p className="text-3xl text-amber-400 font-semibold">
            ₹ {selectedProduct.price}
          </p>

          <button className="w-fit px-6 py-3 bg-amber-500 text-black font-semibold rounded-xl hover:bg-amber-600">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
