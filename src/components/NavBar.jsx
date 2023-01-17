import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink to="/" end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="admin">Admin</NavLink>
        </li>
        <li>
          <NavLink to="users">Users</NavLink>
        </li>
        <li>
          <NavLink to="posts">Posts</NavLink>
        </li>
        <li>
          <NavLink to="products">Products</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
