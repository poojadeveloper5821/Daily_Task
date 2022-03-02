import React from "react";

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props); // Undefined
    console.log(props); // Defined Props Will Be Logged
  }

  render() {
    return <div>Hello {this.props.message}</div>; // Defined
  }
}

export default MyComponent;
