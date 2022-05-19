import  {useState,useEffect} from 'react'
import {useForm} from "react-hook-form";
import DropdownList from './DropdownList';

function FormValidation() {
    const [fname, setFname] = useState();
    const [lname, setLname] = useState();
    const [dob, setDOB] = useState();
    const [gender, setGender] = useState();
    const [phone, setPhone] = useState();
    const [hobby, setHobby] = useState();
    const [address, setAddress] = useState();
    const [visible, setVisible] = useState();

    useEffect(() => {
     
        localStorage.setItem("fname", JSON.stringify(fname));
      }, [fname]);
    
      useEffect(() => {
       
        localStorage.setItem("lname", JSON.stringify(lname));
      }, [lname]);
      useEffect(() => {
        
        localStorage.setItem("phone", JSON.stringify(phone));
      }, [phone]);
      useEffect(() => {
      
        localStorage.setItem("dob", JSON.stringify(dob));
      }, [dob]);
      useEffect(() => {
   
        localStorage.setItem("gender", JSON.stringify(gender));
      }, [gender]);
      useEffect(() => {
    
        localStorage.setItem("hobby", JSON.stringify(hobby));
      }, [hobby]);    

      useEffect(() => {
        
        localStorage.setItem("address", JSON.stringify(address));
      }, [address]);



      const {
        register,
         handleSubmit,
        formState: { errors },
        reset,
        trigger,
      } = useForm();
    
      const handleChangeFname = (e) => {
        setFname(e.target.value);
      };
      const handleChangeLname = (e) => {
        setLname(e.target.value);
      };
      const handleChangePhone = (e) => {
        setPhone(e.target.value);
      };
      const handleChangeDOB = (e) => {
        setDOB(e.target.value);
      };
      const handleChangeGender = (e) => {
        setGender(e.target.value);
      };
      const handleChangeHobby = (e) => {
        setHobby(e.target.value);
      };
      const handleChangeAddress = (e) => {
        setAddress(e.target.value);
      };


       const onSubmit = (e) => {
        e.preventDefault();
         console.log(e);
         reset();
      };
   
  return (
    <>
      

      <div className="container">
      <div className="row  justify-content-sm-center pt-5">
        <div className="col-sm-6 shadow round pb-3">
          <h1 className="text-center pt-3 text-secondary">
            User Validation Form
          </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
              <label className="col-form-label">First Name:</label>
              <input
                type="text"
                onChange={handleChangeFname}
                className={`form-control ${errors.fnamename && "invalid"}`}
                {...register("fname", { required: "First Name is required" })}
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
                onChange={handleChangeLname}
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
              <label className="col-form-label">Phone:</label>
              <input
                type="phone"
                onChange={handleChangePhone}
                className={`form-control ${errors.phone && "invalid"}`}
                {...register("phone", { required: "Phone Number is Required" })}
                onKeyUp={() => {
                  trigger("phone");
                }}
              />
              {errors.phone && (
                <small className="text-danger">{errors.phone.message}</small>
              )}
            </div>
            <br />
            <div className="form-group">
              <label className="col-form-label">DOB:</label>
              <input
                type="date"
                onChange={handleChangeDOB}
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
            <br />
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Gender</label>
              <div className="col-sm-2 mt-2">
                Female{" "}
                <input
                  type="radio"
                  className="mx-2"
                  name="isyes"
                  value="1"
                  onClick={() => setVisible(true)}
                  onChange={handleChangeGender}
                />
              </div>
              <div className="col-sm-2 mt-2">
                Male
                <input
                  type="radio"
                  className="mx-2 mt-1"
                  name="isyes"
                  value="0"
                  onClick={() => setVisible(false)}
                  onChange={handleChangeGender}
                />
              </div>
              <div className="col-sm-2 mt-2">
                Other
                <input
                  type="radio"
                  className="mx-2 mt-1"
                  name="isyes"
                  value="0"
                  onClick={() => setVisible(false)}
                  onChange={handleChangeGender}
                />
              </div>
            </div>
            {visible}

<DropdownList />
<br />
<br />
            <div className="checkbox_data col-sm-3">
              <p>Select your Hobbies</p>
            </div>
            <div className="form-check">
              <label>Painting</label>&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                type="checkbox"
                className="form-check input"
                onChange={handleChangeHobby}
              />
            </div>
            <div className="form-check">
              <label>Cycling</label>&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                type="checkbox"
                className="form-check input"
                onChange={handleChangeHobby}
              />
            </div>
            <div className="form-check">
              <label>Listening Songs</label>&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                type="checkbox"
                className="form-check input"
                onChange={handleChangeHobby}
              />
            </div>
            <div className="form-check">
              <label>Playing Games</label>&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                type="checkbox"
                className="form-check input"
                onChange={handleChangeHobby}
              />
            </div>
            <div className="form-check">
              <label>Travelling</label>&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                type="checkbox"
                className="form-check input"
                onChange={handleChangeHobby}
              />
            </div>
            <input type="file" />
            <br />
            <br />
            <div className="textarea">
              <label>Address</label>
              <textarea value={address} onChange={handleChangeAddress} />
            </div>

            <input
              type="submit"
              className="btn btn-primary my-3"
              value="Submit Form"
            />
          </form>
        </div>
      </div>
    </div>


    </>
  )
}

export default FormValidation
