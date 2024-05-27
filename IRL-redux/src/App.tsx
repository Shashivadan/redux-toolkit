import { Link, Route, Router, Routes } from "react-router-dom";
import Users from "./components/Users";
import Products from "./components/Products";
import Home from "./components/Home";

function App() {
  return (
    <>
      <nav className=" flex p-5 justify-center items-center gap-5">
        <Link to={"/"} className=" font-bold text-lg ">
          home
        </Link>
        <Link to={"/users"} className=" font-bold text-lg">
          Users
        </Link>
        <Link to={"/products"} className=" font-bold text-lg ">
          Products
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </>
  );
}

export default App;
