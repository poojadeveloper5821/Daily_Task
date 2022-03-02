import React, { Component } from "react";

class Props2 extends Component {
  render() {
    return (
      <h3>
        Hello {this.props.name} a.k.a {this.props.heroname}
      </h3>
    );
  }
}
export default Props2;
