import React, { Component } from "react";

class LifecycleD extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Programmar",
    };
    console.log("Lifecycled constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleD getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LLifecycleD componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("LLifecycleD shouldComponentUpdate");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LLifecycleD getSnapshotBeforeUpdate");
  }

  componentDidUpdate() {
    console.log("LLifecycleD componentDidUpdate");
  }

  render() {
    console.log("LifecycleD render");
    return <div>Lifecycle D</div>;
  }
}

export default LifecycleD;
