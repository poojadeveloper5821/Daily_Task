import { useForm } from "react-hook-form";
import  React,{useState,useEffect} from "react"
import DropdownData from "./DropdownData";


function UserValidation() {
  
  const [fname,setFname]=useState();
  const[lname,setLname]=useState();
  const[email,setEmail]=useState();
  const[phone,setPhone]=useState();

  const[dob,setDOB]=useState();
  const[gender,setGender]=useState();
  const[hobby,setHobby]=useState();
  const[occupation,setOccupation]=useState();

  const [address,setAddress]=useState();
  const[postalAddress,setPostalAddress]=useState();
  const[description,setDescription]=useState();
  const[visible,setVisible]=useState();

 

  console.log(errors);

  useEffect(() => {
    // storing input name
    localStorage.setItem("fname", JSON.stringify(fname));
  }, [fname]);

  useEffect(() => {
    // storing input pwd
    localStorage.setItem("lname", JSON.stringify(lname));
  }, [lname]);

  useEffect(() => {
    // storing input pwd
    localStorage.setItem("email", JSON.stringify(email));
  }, [email]);

  useEffect(() => {
    // storing input pwd
    localStorage.setItem("phone", JSON.stringify(phone));
  }, [phone]);
  useEffect(() => {
    // storing input pwd
    localStorage.setItem("dob", JSON.stringify(dob));
  }, [dob]);
  useEffect(() => {
    // storing input pwd
    localStorage.setItem("gender", JSON.stringify(gender));
  }, [gender]);
  useEffect(() => {
    // storing input pwd
    localStorage.setItem("hobby", JSON.stringify(hobby));
  }, [hobby]);
  useEffect(() => {
    // storing input pwd
    localStorage.setItem("occupation", JSON.stringify(occupation));
  }, [occupation]);
  useEffect(() => {
    // storing input pwd
    localStorage.setItem("address", JSON.stringify(address));
  }, [address]);
  useEffect(() => {
    // storing input pwd
    localStorage.setItem("postaladdress", JSON.stringify(postalAddress));
  }, [postalAddress]);
  useEffect(() => {
    // storing input pwd
    localStorage.setItem("description", JSON.stringify(description));
  }, [description]);



  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  const handleChangeFname=(e)=>{
    setFname(e.target.value);
  }
  const handleChangeLname=(e)=>{
    setLname(e.target.value);
  }
  const handleChangeEmail=(e)=>{
    setEmail(e.target.value);
  }
  const handleChangePhone=(e)=>{
    setPhone(e.target.value);
  }
  const handleChangeDOB=(e)=>{
    setDOB(e.target.value);
  }
  const handleChangeGender=(e)=>{
    setGender(e.target.value);
  }
  const handleChangeHobby=(e)=>{
    setHobby(e.target.value);
  }
  const handleChangeOcuupation=(e)=>{
    setOccupation(e.target.value);
  }


const handleChangeAddress=(e)=>{
  setAddress(e.target.value);
}
const handleChangePostalAddress=(e)=>{
  setPostalAddress(e.target.value);
}
const handleChangeDescription=(e)=>{
  setDescription(e.target.value);
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
            <div className="form-group row">
            <label className="col-sm-3 col-form-label">Gender</label>
            <div className="col-sm-2 mt-2">
              Female <input type="radio" className="mx-2" name="isyes" value="1" onClick={ ()=>setVisible(true)} />
            </div>
            <div className="col-sm-2 mt-2">
            Male<input type="radio" className="mx-2 mt-1" name="isyes" value="0" onClick={ ()=>setVisible(false)} />
            </div>
          <div className="col-sm-2 mt-2">
            Other<input type="radio" className="mx-2 mt-1" name="isyes" value="0" onClick={ ()=>setVisible(false)} />
            </div>
          </div>
             { visible }

<div className="checkbox_data">
<p>Select your Hobbies</p>
</div>
<div className="form-check">
<label>Painting</label>&nbsp;&nbsp;&nbsp;&nbsp;
  <input type="checkbox" className="form-check input" />
</div>
<div className="form-check">
<label>Cycling</label>&nbsp;&nbsp;&nbsp;&nbsp;
  <input type="checkbox" className="form-check input" />
</div>
<div className="form-check">
<label>Listening Songs</label>&nbsp;&nbsp;&nbsp;&nbsp;
  <input type="checkbox" className="form-check input" />
</div>
<div className="form-check">
<label>Playing Games</label>&nbsp;&nbsp;&nbsp;&nbsp;
  <input type="checkbox" className="form-check input" />
</div>
<div className="form-check">
<label>Travelling</label>&nbsp;&nbsp;&nbsp;&nbsp;
  <input type="checkbox" className="form-check input" />
</div><br/><br/>
<div className="occupation">
  <p>Select your Occupation</p>
</div>
<div className="form-occupation">
<label>Software Developer</label>&nbsp;&nbsp;&nbsp;&nbsp;
  <input type="checkbox" className="form-occupation input" />
</div>
<div className="form-occupation">
<label>Finance Manager</label>&nbsp;&nbsp;&nbsp;&nbsp;
  <input type="checkbox" className="form-occupation input" />
</div>
<div className="form-occupation">
<label>Project Manager</label>&nbsp;&nbsp;&nbsp;&nbsp;
  <input type="checkbox" className="form-occupation input" />
</div>
<div className="form-occupation">
<label>Software Tester</label>&nbsp;&nbsp;&nbsp;&nbsp;
  <input type="checkbox" className="form-occupation input" />
</div>

<br/><br/>
<div className="textarea">
  <label>Address</label>
  <textarea value={address} onChange={handleChangeAddress}/>
</div>
<br/>
<div className="textarea_postal">
  <label>PostalAddress</label>&nbsp;
  <textarea value={postalAddress} onChange={handleChangePostalAddress}/>
</div>


<DropdownData />

<br/><br/>
<div className="textarea_des">
  <label>Decription</label>
  <textarea value={description} onChange={handleChangeDescription}/>
</div>
<br/>













           
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
