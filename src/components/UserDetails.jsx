import React from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();
  return (
    <div>
      <h4>User #{id} details</h4>
    </div>
  );
};

export default UserDetails;
