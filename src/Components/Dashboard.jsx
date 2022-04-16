import React from "react";
import { useLocation } from "react-router-dom";

function Dashboard() {
  const location = useLocation();

  return (
    <>
      <form>
        <h2>User Details page</h2>
        <br />
        <label>Username:</label>
        {location.state.email}
        <br />
        <label>Password:</label>
        {location.state.password}
      </form>
    </>
  );
}

export default Dashboard;
