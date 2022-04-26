import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Error from "./Components/Error";
import Dashboard from "./Components/Dashboard";
import Form5 from "./Components/Form5";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import DataFetching from "./Components/DataFetching";
import APIcall from "./Components/APIcall";
import User from "./Components/User";
import Listing from "./Components/Listing";
import TableData from "./Components/TableData";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/form5"element={<Form5/>}/>
          <Route path="/datafetching" element={<DataFetching />}/>
          <Route path="/apicall" element={<APIcall />}/>
          <Route path="/user/:id" element={<User />}/>
          <Route path="/listing" element={<Listing />}/>
          <Route path="/tabledata" element={<TableData />}/>
          {/* <Route path="/apicall/:id" element={<APIcall />}/> */}
          <Route path="/*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
