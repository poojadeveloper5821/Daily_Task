import React from "react";
import {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function Form() {


    const [name , setName] = useState('');
    const[lastName,setLastName]=useState('');
    const [age , setAge] = useState('');
    const[telephone,setTelephone]=useState('');
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [confPassword , setConfPassword] = useState('');
   
    const [checked, setChecked] =useState(false);
    const [value, setValue] = useState(false);

    
    // function to update state of name with
    // value enter by user in form
    const handleChange =(e)=>{
      setName(e.target.value);
    }
    const handleLastNameChange =(e) =>{
      setLastName(e.target.value);
    }
    const handleAgeChange =(e)=>{
      setAge(e.target.value);
    }
    const handleEmailChange =(e)=>{
      setEmail(e.target.value);
    }
    const handleTelephoneChange=(e)=>{
      setTelephone(e.target.value);
    }
    const handlePasswordChange =(e)=>{
      setPassword(e.target.value);
    } 
    const handleConfPasswordChange =(e)=>{
      setConfPassword(e.target.value);
    }
    const handleCheckChange = (e) => {
      setChecked(!checked);
    }
    const handleRadioChange = (e) => {
      setValue(!value);
    }
   

    

    // below function will be called when user
    // click on submit button .
    const handleSubmit=(e)=>{
      if(password!==confPassword)
      {
        // if 'password' and 'confirm password'
        // does not match.
        alert("password Not Match");
      }
      else{
        // display alert box with user
        // 'name' and 'email' details .
        alert('A form was submitted with Name :"' + name +
        '" ,Age :"'+age +'" and Email :"' + email + '"');
      }
      e.preventDefault();
    }
    



  return (
    <>
    <div className="App">
    <header className="App-header">
    <form onSubmit={(e) => {handleSubmit(e)}}>
     {/*when user submit the form , handleSubmit()
        function will be called .*/}
    <h3> Sign-up Form </h3>
        <input class="form-control me-2" type="search" placeholder="Search"
              aria-label="Search"/>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <br />
            <button class="btn btn-outline-secondary" type="submit"> Search </button>
            <br />
            <br />
        <label >
         First Name:
        </label><br/>
        <input type="text" value={name} required 
        onChange={(e)=> {handleChange(e)}} /><br/>
        <label >
         Last Name:
        </label><br/>
        <input type="text" value={lastName} required 
        onChange={(e)=> {handleLastNameChange(e)}} /><br/>
        <label >
          Age:
        </label><br/>
        <input type="text" value={age} required 
        onChange={(e)=> {handleAgeChange(e)}} /><br/>  
        <label>
          Telephone:
        </label><br/>
        <input type="number" value={telephone} required 
        onChange={(e)=> {handleTelephoneChange(e)}} /><br/>
        <label>
          Email:
        </label><br/>
        <input type="email" value={email} required 
        onChange={(e)=> {handleEmailChange(e)}} /><br/>
        <label>
          Password:
        </label><br/>
        <input type="password" value={password} required 
        onChange={(e)=> {handlePasswordChange(e)}} /><br/>    
        <label>
          Confirm Password:
        </label><br/>
        <input type="password" value={confPassword} required 
        onChange={(e)=> {handleConfPasswordChange(e)}} /><br/>
        <label>
          How many Languages do you know?
        </label><br/>
        <label>English</label>
        <input type="checkbox" value={checked} required 
        onChange={(e)=> {handleCheckChange(e)}} /><br/>
         <label>Hindi</label>
        <input type="checkbox" value={checked} required 
        onChange={(e)=> {handleCheckChange(e)}} /><br/>
       <label>Marathi</label>
        <input type="checkbox" value={checked} required 
        onChange={(e)=> {handleCheckChange(e)}} /><br/>
        <br/>
        <label>Gender:</label>&nbsp;&nbsp;&nbsp;&nbsp;
        <label>
            <input type="radio" checked={value} onChange={handleRadioChange} />
            Male
          </label>&nbsp;&nbsp;&nbsp;&nbsp;
          <label>
            <input type="radio" checked={value} onChange={handleRadioChange} />
            Female
          </label>&nbsp;&nbsp;&nbsp;&nbsp;
          <label>
            <input type="radio" checked={value} onChange={handleRadioChange} />
            Other
          </label>
        <br/><br/>

        <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Which City you belong?
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#mumbai">Mumbai</a></li>
    <li><a class="dropdown-item" href="#hyderabad">Hyderabad</a></li>
    <li><a class="dropdown-item" href="#pune">Pune</a></li>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
  </ul>
</div>

<br/>





        <input type="submit" value="Submit"/>
      </form>
    </header>
    </div>

    </>
    
  );
}

export default Form;
