import { Routes, Route } from "react-router-dom";
//
import NavBar from "./components/NavBar";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Posts from "./components/Posts";
import Products from "./components/Products";
import NewestPosts from "./components/NewestPosts";
import AllPosts from "./components/AllPosts";
import ProductDetails from "./components/ProductDetails";
import Users from "./components/Users";
import UserDetails from "./components/UserDetails";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="admin" element={<Dashboard />} />
        <Route path="users" element={<Users />}>
        <Route path=":id" element={<UserDetails />} />
      </Route>
        <Route path="posts" element={<Posts />}>
          <Route index element={<AllPosts />} />
          <Route path="newest" element={<NewestPosts />} />
          <Route path="all" element={<AllPosts />} />
        </Route>
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
