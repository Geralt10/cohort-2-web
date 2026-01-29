import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center gap-10 text-center px-6">
      
      <h1 className="text-white text-6xl md:text-8xl font-bold">
        FakeStore 🛒
      </h1>

      <p className="text-zinc-400 max-w-xl text-lg">
        Buy amazing products with clean UI and smooth routing.
      </p>

      <Link
        to="/products"
        className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-2xl transition"
      >
        Explore Products
      </Link>

    </div>
  );
};

export default Home;
