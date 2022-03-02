import "./App.css";
import React, { Component } from "react";
// import StateEx from "./Components/StateEx";
import StateEx2 from "./Components/StateEx2";
import StateEx3 from "./Components/StateEx3";
import Color from "./Components/Color";
import Drinks from "./Components/Drinks";
// import Heading from "./Components/Heading";
// import Para from "./Components/Para";
// import List from "./Components/List";

// import Form from "./Components/Form";
// import Table from "./Components/Table";

// import Carclass from "./Components/Carclass";
// import Specification from "./Components/Specification";

// import Props from "./Components/Props";
// import Props2 from "./Components/Props2";

// import Message from "./Components/Message";
// import Counter from "./Components/Counter";

// import LifecycleA from "./Components/LifecycleA";
// import MyComponent from "./Components/MyComponent";
 

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* {/* <Carclass />
      <Specification /> */}
        {/* <Props  name="Bruce"  heroname="superman">
        <p>This is children props.</p>
        </Props>
      <Props name="Charlie" heroname="batman"></Props>
      <button>Action</button>
      <Props name="John" heroname="spiderman"/>

      <Props2 name="Tony Stark" heroname="Ironman"/>
      <Props2 name="Trixie" heroname="Wonder Women"/>
      <Props2 name="Lucifer" heroname="Devil"/>  */}

        {/* <Message /> */}
        {/* <Counter /> 
        <LifecycleA />
       <MyComponent /> */}

        {/* <StateEx /> */}
        <StateEx2 />
        <StateEx3 />
        <Color />
        <Drinks />


      </div>
    );
  }
}

// function App() {
//   return (
//     <>
//       <Heading />
//       <Para />
//       <List />
//       <Form />
//       <Table />

//     </>
//   );
// }

export default App;
