import React,{useEffect,useState} from "react";
import axios from "axios";

 function DataFetching() {
   const [user, setUser] = useState({});
   const[id,setId]=useState(1);

   useEffect(() => {
     axios
       .get(`https://jsonplaceholder.typicode.com/users/${id}`)
       .then(res => {
         console.log(res)
         setUser(res.data);
       })
       .catch((err) => {
         console.log(err)
       })
   },[id]);

   return (
     <>
     <input type="text" value={id} onChange={e=> setId(e.target.value)}/>
       <div> {user.name}</div>
       {/* <ul>
         {user.map((user) => (
          <li key={user.id}>{user.name}</li>
         ))}
       </ul> */}
     </>
   );
 }

export default DataFetching;