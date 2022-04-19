 import { useState } from "react";

function Signup() {
  // States for registration
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   const[confpassword,setConfPassword]=useState("");
   // States for checking the errors
   const [submitted, setSubmitted] = useState(false);
   const [error, setError] = useState(false);

  // Handling the name change
   const handleName = (e) => {
     setName(e.target.value);
     setSubmitted(false);
   };

   // Handling the email change
   const handleEmail = (e) => {
     setEmail(e.target.value);
     setSubmitted(false);
   };

   // Handling the password change
   const handlePassword = (e) => {
     setPassword(e.target.value);
     setSubmitted(false);
   };
   const handleConfPassword =(e)=>{
     setConfPassword(e.target.value);
     setSubmitted(false);
   }

   // Handling the form submission
   const handleSubmit = (e) => {
     e.preventDefault();
     if (name === "" || email === "" || password === "" || confpassword === "") {
       setError(true);
     } else {
       setSubmitted(true);
       setError(false);
    }
  };

   // Showing success message
   const successMessage = () => {
     return (
       <div
         className="success"
         style={{
           display: submitted ? "" : "none",
         }}
      >
         <h1>User {name} successfully registered!!</h1>
       </div>
     );
   };

  // Showing error message if error is true
   const errorMessage = () => {
     return (
       <div
         className="error"
         style={{
           display: error ? "" : "none",
         }}
       >
         <h1>Please enter all the fields</h1>
      </div>
     );
   };

  return (
 <>
    <div className="form">
       <div>
         <h1>User Registration</h1>
       </div>

       {/* Calling to the methods */}
       <div className="messages">
         {errorMessage()}
         {successMessage()}
       </div>

       <form>
         {/* Labels and inputs for form data */}
         <label className="label">Name</label>
         <input
           onChange={handleName}
           className="input"
          value={name}
           type="text"
         />

         <label className="label">Email</label>
         <input
           onChange={handleEmail}
           className="input"
           value={email}
           type="email"
         />

         <label className="label">Password</label>
        <input
           onChange={handlePassword}
           className="input"
          value={password}
           type="password"
         />
         <label className="label">Confirm Password</label>
         <input
           onChange={handleConfPassword}
           className="input"
           value={confpassword}
           type="password"
         />


         <button onClick={handleSubmit} className="btn" type="submit">
           Register
         </button>
       </form>

    

     </div>
    
     </>
   );
 }
export default Signup;


// import React from 'react';
// import validate from './validateInfo';
// import useForm from './useForm';
// import './Form.css';

// const Signup = ({ submitForm }) => {
//   const { handleChange, handleSubmit, values, errors } = useForm(
//     submitForm,
//     validate
//   );

//   return (
//     <div className='form-content-right'>
//       <form onSubmit={handleSubmit} className='form' noValidate>
//         <h1>
//         Sign up Form
//         </h1>
//         <div className='form-inputs'>
//           <label className='form-label'>Username</label>
//           <input
//             className='form-input'
//             type='text'
//             name='username'
//             placeholder='Enter your username'
//             value={values.username}
//             onChange={handleChange}
//           />
//           {errors.username && <p>{errors.username}</p>}
//         </div>
//         <div className='form-inputs'>
//           <label className='form-label'>Email</label>
//           <input
//             className='form-input'
//             type='email'
//             name='email'
//             placeholder='Enter your email'
//             value={values.email}
//             onChange={handleChange}
//           />
//           {errors.email && <p>{errors.email}</p>}
//         </div>
//         <div className='form-inputs'>
//           <label className='form-label'>Password</label>
//           <input
//             className='form-input'
//             type='password'
//             name='password'
//             placeholder='Enter your password'
//             value={values.password}
//             onChange={handleChange}
//           />
//           {errors.password && <p>{errors.password}</p>}
//         </div>
//         <div className='form-inputs'>
//           <label className='form-label'>Confirm Password</label>
//           <input
//             className='form-input'
//             type='password'
//             name='confpassword'
//             placeholder='Confirm your password'
//             value={values.confpassword}
//             onChange={handleChange}
//           />
//           {errors.confpassword && <p>{errors.confpassword}</p>}
//         </div>
//         <button className='form-input-btn' type='submit'>
//           Sign up
//         </button>
//         <span className='form-input-login'>
//           Already have an account? Login <a href='/here'>here</a>
//         </span>
//       </form>
//     </div>
//   );
// };

// export default Signup;