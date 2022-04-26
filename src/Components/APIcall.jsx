import React,{useEffect,useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

 function APIcall() {
   const [user, setUser] = useState({});
   //const[id,setId]=useState(1);

   useEffect(() => {

    const fetch=async()=>{
        try{
            const{data}=await axios.get("https://jsonplaceholder.typicode.com/users")
            setUser(data);
        }
        catch(err){
            console.error(err);
        }
    };
    fetch();
},[]);

//      axios
//        .get(`https://jsonplaceholder.typicode.com/users/${id}`)
//        .then(res => {
//          console.log(res)
//          setUser(res.data);
//        })
//        .catch((err) => {
//          console.log(err)
//        })
//    },[id]);

   return (
     <>

     {user.map((el)=>(
         <article key={el.id}>
             <Link to={`/user/${el.id}`}>
             <h1>{el.name}</h1>
             </Link>
             <p>{el.body}</p>
         </article>
     ))}
     {/* <input type="text" value={id} onChange={e=> setId(e.target.value)}/>
       <div> {user.name}</div> */}
       {/* <ul>
         {user.map((user) => (
          <li key={user.id}>{user.name}</li>
         ))}
       </ul> */}
     </>
   );
 }

export default APIcall;