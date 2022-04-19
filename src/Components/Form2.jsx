import { useForm } from "react-hook-form";

function Form2() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  // console.log(watch());

  // console.log(errors.name)

  return (
    <div className="container pt-5">
      <div className="row justify-content-sm-center pt-5">
        <div className="col-sm-6 shadow round pb-3">
          <h1 className="text-center pt-3 text-secondary">Signup Form</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label className="col-form-label">Name:</label>
              <input
                type="text"
                className={`form-control ${errors.name && "invalid"}`}
                {...register("name", { required: "Name is Required" })}
                onKeyUp={() => {
                  trigger("name");
                }}
              />
              {errors.name && (
                <small className="text-danger">{errors.name.message}</small>
              )}
            </div>
            <div className="form-group">
              <label className="col-form-label">Email:</label>
              <input
                type="text"
                className={`form-control ${errors.email && "invalid"}`}
                {...register("email", {
                  required: "Email is Required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                onKeyUp={() => {
                  trigger("email");
                }}
              />
              {errors.email && (
                <small className="text-danger">{errors.email.message}</small>
              )}
            </div>
            <div className="form-group">
              <label className="col-form-label">Password:</label>
              <input
                type="password"
                className={`form-control ${errors.password && "invalid"}`}
                {...register("password", {
                  required: "Password is Required",
                  pattern: {
                    value:
                      // /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                      /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/,
                     
                    message: "Invalid password",
                  },
                  minLength: {
                    value: 8,
                    message: "Minimum Required length is 8",
                  }
                })}
                onKeyUp={() => {
                  trigger("password");
                }}
              />
              {errors.password && (
                <small className="text-danger">{errors.password.message}</small>
              )}
            </div>
            <div className="form-group">
              <label className="col-form-label">Confirm Password:</label>
              <input 
                type="password"
                className={`form-control ${errors.message && "invalid"}`}
                {...register("confpassword", {
                  required: "Confirm Password is Required",
                  pattern: {
                    value:
                      // /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                      /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/,
                    message: "Invalid password",
                  },
                  minLength: {
                    value: 8,
                    message: "Minimum Required length is 8",
                  }
                })}
                onKeyUp={() => {
                  trigger("confpassword");
                }}
              ></input>
              {errors.confpassword && (
                <small className="text-danger">{errors.confpassword.message}</small>
              )}
            </div>
            <input
              type="submit"
              className="btn btn-primary my-3"
              value="Register"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form2;
