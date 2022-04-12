import React, { useState } from "react";

const Store = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  var userdata = { username: "Pooja", password: 44444 };

  localStorage.setItem("userdata", JSON.stringify(userdata)); //stringify object and store
  var retrievedData = JSON.parse(localStorage.getItem("userdata")); //retrieve the object

  console.log(retrievedData);

  const handleSubmit = () => {
    localStorage.setItem("UserName", username);
    localStorage.setItem("Password", password);
  };
  const remove = () => {
    localStorage.removeItem("UserName");
    localStorage.removeItem("Password");
  };



  return (
    <div className="App">
      <h1>Username:</h1>
      <input
        placeholder="UserName"
        value={username}
        onChange={(e) => setUserName(e.target.value)}/>
      <h1>Password:</h1>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}/>
      <div>
        <button onClick={handleSubmit}>Done</button>
      </div>
      <br />
      <div>
        <button onClick={handleSubmit}>View</button>
      </div>
      <br />
      {localStorage.getItem("UserName") && (
        <div>
          UserName: <p>{localStorage.getItem("UserName")}</p>
        </div>
      )}
      {localStorage.getItem("Password") && (
        <div>
          Password: <p>{localStorage.getItem("Password")}</p>
        </div>
      )}


      
      <div>
        <button onClick={remove}>Remove</button>
      </div>
    </div>
  )
}
export default Store;
