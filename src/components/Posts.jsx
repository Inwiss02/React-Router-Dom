import { Link, Outlet } from "react-router-dom";

const Posts = () => {
  return (
    <>
      <h3>Posts Page</h3>
      <nav className="navbar-secondary">
        <span>sort by</span>
        <Link to="newest">Newest Posts</Link>
        <Link to="all">All Posts</Link>
      </nav>
      <div
        style={{
          border: "1px solid black",
          padding: "25px",
          margin: "30px",
        }}
      >
        <Outlet />
      </div>
    </>
  );
};

export default Posts;
