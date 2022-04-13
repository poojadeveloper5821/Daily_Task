 import "./App.css";
 import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
 import Login from "./Components/Login";
 import Signup from "./Components/Signup";
 import Error from "./Components/Error";
 
function App() {
    return (
     <>
     <Router>
         <Routes>
           <Route path="/" element={<Login/>}/>
           <Route path="/signup" element={<Signup/>}/>
           <Route element={Error}/>
        </Routes>
       </Router>

          </>
    );
  }

  export default App;



  













//import { BrowserRouter, Route, Routes } from "react-router-dom";
// import LoginReg from "./components/pages/auth/LoginReg";
// import ResetPassword from "./components/pages/auth/ResetPassword";
// import SendPasswordResetEmail from "./components/pages/auth/SendPasswordResetEmail";
// import Contact1 from "./components/pages/Contact1";
// import Dashboard from "./components/pages/Dashboard";
// import Home1 from "./components/pages/Home1";
// import Layout1 from "./components/pages/Layout1";

// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Layout1 />}>
//             <Route index element={<Home1 />} />
//             <Route path="contact" element={<Contact1 />} />
//             <Route path="login" element={<LoginReg />} />
//             <Route path="sendpasswordresetemail" element={<SendPasswordResetEmail />} />
//             <Route path="reset" element={<ResetPassword />} />
//           </Route>
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="*" element={<h1>Error 404 Page not found !!</h1>} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;




















 // // class App extends Component {
// //   render() {
// //     return (
// //       <div className="App">
// //         {/* {/* <Carclass />
// //       <Specification /> */}
// //         {/* <Props  name="Bruce"  heroname="superman">
// //         <p>This is children props.</p>
// //         </Props>
// //       <Props name="Charlie" heroname="batman"></Props>
// //       <button>Action</button>
// //       <Props name="John" heroname="spiderman"/>
// //       <Props2 name="Tony Stark" heroname="Ironman"/>
// //       <Props2 name="Trixie" heroname="Wonder Women"/>
// //       <Props2 name="Lucifer" heroname="Devil"/>  */}
// //         {/* <Message /> */}
// //         {/* <Counter />
// //         <LifecycleA />
// //        <MyComponent /> */}
// //         {/* <StateEx /> */}
// //       </div>
// //     );
// //   }
// // }















