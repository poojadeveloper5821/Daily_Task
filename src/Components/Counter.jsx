import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment() {
    // this.setState({
    //   count: this.state.count + 1,
    // })

    this.setState((prevState) => ({
      count: prevState.count + 5,
    }));

    console.log(this.state.count);
  }

  incrementFive() {
    this.increment();
  }

  render() {
    return (
      <div>
        <br />
        Count- {this.state.count}
        <br />
        <br />
        <button onClick={() => this.incrementFive()}>Increment</button>
      </div>
    );
  }
}

export default Counter;
