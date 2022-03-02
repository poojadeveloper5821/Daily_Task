import React, { Component } from "react";
import fordcar from "./../Images/fordcar.jpg";

class StateEx2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964
    };
  }
  changeColor = () => {
    this.setState({ color: "blue" });
  }

  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          It is a {this.state.color}
           {this.state.model}
          from  {this.state.year}.
        </p>
        <button type="button" onClick={this.changeColor}>
          Change color
        </button>
             <br /> <br/>
        <img src={fordcar} width={300} height={200} alt={'Ford Car'} />
      </div>
    );
  }
}

export default StateEx2;
