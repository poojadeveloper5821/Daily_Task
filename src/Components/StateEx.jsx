import React, { Component } from "react";
import fordcar from "./../Images/fordcar.jpg";

class StateEx extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964
    };
  }
  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          It is a  {this.state.color}
           {this.state.model}
          from  {this.state.year}.
        </p>
        <img src={fordcar} width={800} height={500} />
      </div>
    );
  }
}

export default StateEx;
