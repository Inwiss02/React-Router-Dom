
import { Outlet, useSearchParams } from "react-router-dom";

const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const showingActiveUsers = searchParams.get("filter") === "active"; //return true or false
  return (
    <div>
      <Outlet />
      <div>
        <span>Filter by</span>
        <button onClick={() => setSearchParams({ filter: "active" })}>
          Active
        </button>
        <button onClick={() => setSearchParams({})}>Reset Filter</button>
      </div>
      <div>
        {showingActiveUsers ? (
          <div>
            <h4>Showing active users</h4>
            <ul>
              <li>User 1</li>
              <li>User 3</li>
            </ul>
          </div>
        ) : (
          <div>
            <h4>Showing All Users</h4>
            <ul>
              <li>User 1</li>
              <li>User 2</li>
              <li>User 3</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Users;
