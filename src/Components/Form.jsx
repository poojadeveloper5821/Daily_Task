import React from "react";

function Form() {
  return (
    <div>
      <h1> Tution Reimbursement</h1>
      <label>Name</label>
      <input type="text" />
      <label>Fees</label>
      <input type="number" />
      <label>Due Amount</label>
      <input type="number" />
    </div>
  );
}

export default Form;
