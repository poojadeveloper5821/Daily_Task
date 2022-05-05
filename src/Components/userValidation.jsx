import { useForm } from "react-hook-form";
import  React,{useState} from "react"


function UserValidation() {
  const[dropdown,setDropdown]=useState();
  const[isChecked,setisChecked] =useState(false);
  const [address,setAddress]=useState();
const[postalAddress,setPostalAddress]=useState();


  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();


const handleChangeAddress=(e)=>{
  setAddress(e.target.value);
}
const handleChangePostalAddress=(e)=>{
  setPostalAddress(e.target.value);
}

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="container pt-5">
      <div className="row justify-content-sm-center pt-5">
        <div className="col-sm-6 shadow round pb-3">
          <h1 className="text-center pt-3 text-secondary">User Registration Form</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label className="col-form-label">First Name:</label>
              <input
                type="text"
                className={`form-control ${errors.fname && "invalid"}`}
                {...register("fname", { required: "First Name is Required" })}
                onKeyUp={() => {
                  trigger("fname");
                }}
              />
              {errors.fname && (
                <small className="text-danger">{errors.fname.message}</small>
              )}
            </div>
            <div className="form-group">
              <label className="col-form-label">Last Name:</label>
              <input
                type="text"
                className={`form-control ${errors.lname && "invalid"}`}
                {...register("lname", { required: "Last Name is Required" })}
                onKeyUp={() => {
                  trigger("lname");
                }}
              />
              {errors.lname && (
                <small className="text-danger">{errors.lname.message}</small>
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
              <label className="col-form-label">Phone:</label>
              <input
                type="number"
                className={`form-control ${errors.number && "invalid"}`}
                {...register("fname", { required: "Number is Required" })}
                onKeyUp={() => {
                  trigger("number");
                }}
              />
              {errors.number && (
                <small className="text-danger">{errors.number.message}</small>
              )}
            </div><br/>
            <div className="form-group">
              <label className="col-form-label">DOB:</label>
              <input
                type="date"
                className={`form-control ${errors.date && "invalid"}`}
                {...register("date", { required: "Date is Required" })}
                onKeyUp={() => {
                  trigger("date");
                }}
              />
              {errors.date && (
                <small className="text-danger">{errors.date.message}</small>
              )}
            </div>
            <br/>
    <div className="checkbox">

      <label>Hobbies:</label><br/>
      <label>Painting</label>
      <input type='checkbox' checked={isChecked} onChange={(e)=>{setisChecked(e.target.checked)}}/><br/>
      <label>Playing Indoor Games</label>
      <input type='checkbox' checked={isChecked} onChange={(e)=>{setisChecked(e.target.checked)}}/><br/>
      <label>Travelling</label>
      <input type='checkbox' checked={isChecked} onChange={(e)=>{setisChecked(e.target.checked)}}/><br/>
      <label>Playing Outdoor Games</label>
      <input type='checkbox' checked={isChecked} onChange={(e)=>{setisChecked(e.target.checked)}}/><br/>
      <label>Cycling</label>
      <input type='checkbox' checked={isChecked} onChange={(e)=>{setisChecked(e.target.checked)}}/><br/>
</div>
<br/><br/>
<div className="dropdown">
  <label>City</label>&nbsp;&nbsp;&nbsp;

  <select value={dropdown} onChange={(e)=>{setDropdown(e.target.value)}}>
    <option value='select your city'>Select your City</option>
    <option value="hyd">Hyderabad</option>
    <option value="del">Delhi</option>
    <option value="pune">Pune</option>
    <option value="mumbai">Mumbai</option>
    <option value="bng">Banglore</option>
  </select>
</div>
<br/>
<div className="textarea">
  <label>Address</label>
  <textarea value={address} onChange={handleChangeAddress}/>
</div>
<br/>
<div className="textarea">
  <label>PostalAddress</label>
  <textarea value={postalAddress} onChange={handleChangePostalAddress}/>
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

export default UserValidation;
