import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./Routes/Dashboard.jsx";
import Login from "./Routes/Login";
import Preferences from "./Routes/Preferences.jsx";
import useToken from "./Routes/useToken";

//Session storage values

// function setToken(userToken){
// sessionStorage.setItem('token',JSON.stringify(userToken));
// }
// function getToken(){
//   const tokenString = sessionStorage.getItem('token');
//   const userToken = JSON.parse(tokenString);
//   return userToken?.token
// }

function App() {
  const { token, setToken } = useToken();
  // const token=getToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/preferences" element={<Preferences />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
