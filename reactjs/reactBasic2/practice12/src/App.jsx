import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Navbar from "./pages/Navbar";

const App = () => {
  return (
    <div className="bg-black min-h-screen">
      
      
      <Navbar />

      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route
          path="/products/productDetails/:ProductId"
          element={<ProductDetails />}
        />
      </Routes>

    </div>
  );
};

export default App;
