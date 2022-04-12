import{useState} from "react"
//import Signup from "./Signup";

function Login(){
    const [user,setUser]=useState();
    const[pwd,setPwd]=useState();
    const[confpwd,setConfPwd]=useState();


    const handleUserChange=(e)=>{
        setUser(e.target.value);
    
    }
    const handlePwdChange=(e)=>{
        setPwd(e.target.value);
    }
    const handleConfPwdChange=(e)=>{
        setConfPwd(e.target.value);
    }
const handleSubmit=(e)=>{
    if(pwd!==confpwd){
        alert("password not correct");
    }
    else{
        alert("password enter successfully");
    }
    e.preventDefault();
}

    return(
        <>
        <h1>LoginForm</h1>
        <form onSubmit={(e)=>{handleSubmit(e)}}>
<label>
    UserName:
</label>
<input type="text" value={user} required onChange={(e)=>
{handleUserChange(e)}}/>

<label>
    Password:
</label>
<input type="password" value={pwd} required onChange={(e)=>
{handlePwdChange(e)}}/>


<label>
    Confirm Password:
</label>
<input type="password" value={confpwd} required onChange={(e)=>
{handleConfPwdChange(e)}}/>

<button onClick={handleSubmit} className="btn" type="submit">
          Submit
        </button> &nbsp;&nbsp;&nbsp;&nbsp;

        <p>
          <buttontoolbar>
            <button const path = '/Signup'> Register </button>
          </buttontoolbar>
        </p>

{/* 
        <button onClick={handleSubmit} className="btn" type="submit">
          Register
        </button> */}

        </form>
       
        </>
    );
}
export default Login