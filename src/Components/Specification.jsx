import React, { Component } from "react";

import carimage from './../Images/carimage.jpg';

class Specification extends Component {
  render() {
    return (
      <div>
        <h3>I have Some Specification</h3>
        <p>
          Engine. The engine is like the heart of the car. ... 4-cylinder,
          3-cylinder, etc. ... Displacement - Eg. ... 5-speed transmission,
          6-speed transmission, etc. ... Power - For Eg. ... Torque - Eg. ...
          Drivetrain. ... Suspension.
        </p>
        <img src={carimage} height={200} width={300} />
      </div>
    );
  }
}
export default Specification;
