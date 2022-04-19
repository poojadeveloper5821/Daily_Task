import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Error from "./Components/Error";
import Dashboard from "./Components/Dashboard";
import Form4 from "./Components/Form4";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/form2" element={<Form2 />}/>
          <Route path ="/form1" element={<Form1 />}/> */}
          <Route path='/form4' element={<Form4 />}/>
          <Route path="/*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
