import { useState } from "react";
//import Signup from "./Signup";

function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [confpassword, setConfPassword] = useState();

  const [allEntry, setAllEntry] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();
    const newEntry = {
      username: username,
      password: password,
      confpassword: confpassword,
    };
    setAllEntry([...allEntry, newEntry]);
    console.log(allEntry);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleConfPasswordChange = (e) => {
    setConfPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    if (password !== confpassword) {
      alert("password not correct");
    } else {
      alert("password enter successfully");
    }
    e.preventDefault();
  };

  return (
    <>
      <h1>LoginForm</h1>
      <form
        action=""
        onSubmit={submitForm}
        // onSubmit={(e) => {
        //   handleSubmit(e);
        // }}
      >
        <label>UserName:</label>
        <input
          type="text"
          value={username}
          required
          onChange={(e) => {
            handleUsernameChange(e);
          }}
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          required
          onChange={(e) => {
            handlePasswordChange(e);
          }}
        />
        <label>Confirm Password:</label>
        <input
          type="password"
          value={confpassword}
          required
          onChange={(e) => {
            handleConfPasswordChange(e);
          }}
        />
        <button onClick={handleSubmit} className="btn" type="submit">
          Submit
        </button>{" "}
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={handleSubmit} className="btn" type="submit">
          Register
        </button>{" "}
        &nbsp;&nbsp;&nbsp;&nbsp;
        {/* <p>
          <buttontoolbar>
            <button const path="/Signup">
              {" "}
              Register{" "}
            </button>
          </buttontoolbar>
        </p> */}
      </form>
    </>
  );
}
export default Login;
