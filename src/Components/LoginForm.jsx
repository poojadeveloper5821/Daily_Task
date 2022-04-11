import { useState,useEffect } from "react";

function LoginForm(){
  const [username, setUserName] = useState("");
  const[password,setPassword]=useState();


  useEffect(() => {
    // storing input name
    localStorage.setItem("username", JSON.stringify(username));
  }, [username]);

  useEffect(() => {
    // storing input pwd
    localStorage.setItem("password", JSON.stringify(password));
  }, [password]);

  


  const onSubmitHandler = () => {
    alert("The form was submitted");
    }


  return (
    <header>
    <form onSubmit={onSubmitHandler}>
      Enter UserName: <input
        type="text"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="Full name"
        aria-label="fullname"/>
        <br></br>
      Enter the Password:<input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        aria-label="password"/>
      <input type="submit" value="Submit"></input>
    </form>
    </header>
  );
};

export default LoginForm;