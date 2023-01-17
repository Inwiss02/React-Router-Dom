import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const redirectTo = useNavigate();
  return (
    <div>
      Not Found Page. Go to{" "}
      <button onClick={() => redirectTo("/", { replace: true })}>
        Home Page
      </button>
    </div>
  );
};

export default NotFound;
