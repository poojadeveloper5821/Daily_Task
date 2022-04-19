import React from "react";
import { useForm } from "react-hook-form";

function Form1() {
  const { register, handleSubmit,errors } = useForm();

  console.log(errors);

const onSubmit=(data) => console.log(data);


  return (
    <>
      <div className="App">
        <div className="container py-3">
          <div className="card border-0 shadow w-75 p-3 mx-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label htmlFor="fullname">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="fullname"
                  placeholder="Enter Your Full Name"
                  {...register("name", { required: "Name is Required" })}
                  name="fullname"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">E-mail Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  placeholder="Enter Your E-mail Address"
                  {...register("email", { required: "email is Required" })}
                  name="email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter Your Password"
                  {...register("password", { required: "Password is Required" })}
                  name="password"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="confpassword"
                  placeholder="Enter Your Confirm Password"
                  ref={register}
                  {...register("confpassword", { required: "Confirm Password is Required" })}
                  name="confpassword"
                />
              </div>
              <div className="form-group">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="tnc"
                    {...register("checkbox", { required: "Checkbox is Required" })}
                    name="tnc"
                  />
                  <label className="form-check-label" htmlFor="tnc">
                    I agree all terms & conditions
                  </label>
                </div>
              </div>
              <button className="btn btn-primary" type="submit">Register</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form1;
