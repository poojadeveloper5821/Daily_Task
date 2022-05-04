import "./App.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Login from "./Components/Login";
// import Signup from "./Components/Signup";
// import Error from "./Components/Error";
// import Dashboard from "./Components/Dashboard";
// import Form5 from "./Components/Form5";
// import User from "./Components/User";
// import UserDetails from "./Components/UserDetails";

//import HookuseRef from "./Components/HookuseRef";
//import HookuseMemo from "./Components/HookuseMemo";
//import HookuseCallback from "./Components/HookuseCallback";
import HookuseContext from "./Components/HookuseContext";


function App() {
  return (
    <>
      {/* <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/form5"element={<Form5/>}/>
          <Route path="/user" element={<User />}/>
          <Route path="/user/:userId" element={<UserDetails />}/> 
          <Route path="/*" element={<Error />} />
        </Routes>
      </Router> */}
      <br/>
    {/* <HookuseRef /><br/>
    <HookuseMemo /><br/>
    <HookuseCallback /> */}
    <HookuseContext />
    </>
  );
}

export default App;
