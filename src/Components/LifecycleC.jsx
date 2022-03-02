import React, { Component } from "react";
import LifecycleD from "./LifecycleD";

class LifecycleC extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Programmar",
    };
    console.log("LifecycleC constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleC getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifecycleC componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("LifecycleC shouldComponentUpdate");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifecycleC getSnapshotBeforeUpdate");
  }

  componentDidUpdate() {
    console.log("LifecycleC componentDidUpdate");
  }


  changeState=()=>{
      this.setState({
          name:'Full Stack Web Developer'
      })
  }
  render() {
    console.log("LifecycleC render");
    return;
    <div>
      <div>Lifecycle C</div>
      <button onClick={this.changeState}>Change State</button>
      <LifecycleD />
    </div>;
  }
}

export default LifecycleC;
