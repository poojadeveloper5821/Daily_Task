import { useState ,useEffect} from "react";

const FormData = () => {
  const [fname, setFname] = useState("");
const[lname,setLname]=useState("");
  
   useEffect(() => {
     localStorage.setItem("fname", JSON.stringify(fname));
   }, [fname]);

   useEffect(() => {
    
    localStorage.setItem("lname", JSON.stringify(lname));
  }, [lname]);



  return (
    <form>
      <input
        type="text"
        value={fname}
        onChange={(e) => setFname(e.target.value)}
        placeholder="First name"
        aria-label="first name"
      />
      <input
        type="text"
        value={lname}
        onChange={(e) => setLname(e.target.value)}
        placeholder="Last name"
        aria-label="last name"
      />
      <input type="submit" value="Submit"></input>
    </form>
  );
}
export default FormData;