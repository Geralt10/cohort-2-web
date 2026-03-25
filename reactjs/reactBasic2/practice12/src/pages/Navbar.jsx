import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-zinc-900 px-10 py-4 flex justify-between items-center">
      
      
      <Link to="/" className="text-2xl font-bold text-amber-400">
        FakeStore
      </Link>

      
      <div className="flex gap-8">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-amber-400 font-semibold"
              : "text-zinc-300 hover:text-white"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive
              ? "text-amber-400 font-semibold"
              : "text-zinc-300 hover:text-white"
          }
        >
          Products
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
