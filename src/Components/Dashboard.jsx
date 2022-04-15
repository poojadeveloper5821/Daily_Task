import React, { useState } from "react";

function Dashboard() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [allEntry, setAllEntry] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();
    const newEntry = { email: email, password: password };
    setAllEntry([...allEntry, newEntry]);
    console.log(allEntry);
  };

  return (
    <>
      <h2>User Login Details</h2>

      <form action="" onSubmit={submitForm}>
        <label>
          Email
          <input
            type="text"
            name="email"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            autoComplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">ShowData</button>
      </form>

      <div>
        {allEntry.map((currElement) => {
          return (
            <div classname="showData">
              <p>{currElement.email}</p>
              <p>{currElement.password}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Dashboard;

<div class="container">
  <div class="row align-items-start">
    <div class="col">
      <div class="row"></div>
    </div>
    <div class="col">One of three columns</div>
    <div class="col">One of three columns</div>
  </div>
</div>;
