import React, { useEffect, useState } from "react";
//import axios from "axios";

const UserDetails = () => {
  const [data, setData] = useState([]);

  const apiGet = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
          console.log(json);
          setData(json)
    });
  };


  useEffect(()=>{
      apiGet();
  },[]);



  return (
    <>
      <h2 text="center">MY API</h2>
      <br />
      <button onClick={apiGet}>Fetch API</button>
      <br />
      <prev>{JSON.stringify(data,null,2)}</prev> 
      {/* <div>
          <ul>
              {data.map((item)=>(
                  <li key={item.id}>{item.title}</li>
                  
                  ))}
          </ul>
      </div> */}
      
    </>
  );
};

export default UserDetails;

// export default class App extends React.Component {
//   state = {
//     isLoading: true,
//     users: [],
//     error: null,
//   };

//   fetchUsers() {
//     // Where we're fetching data from
//     fetch(`https://jsonplaceholder.typicode.com/users`)
//       // We get the API response and receive data in JSON format...
//       .then((response) => response.json())
//       // ...then we update the users state
//       .then((data) =>
//         this.setState({
//           users: data,
//           isLoading: false,
//         })
//       )
//       // Catch any errors we hit and update the app
//       .catch((error) => this.setState({ error, isLoading: false }));
//   }

//   componentDidMount() {
//     this.fetchUsers();
//   }

//   fetchdata=(id)=>{
//       console.log(id);
//     fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
//       .then((res) => res.json())
//       .then((json) => {
//           console.log(json);
//         this.setState({
//           fetchdata: json
//         });
//       });
// };

//   render() {
//     const { isLoading, users, error } = this.state;
//     return (
//       <>
//         <h1>Random User</h1>
//         {/* // Display a message if we encounter an error */}
//         {error ? <p>{error.message}</p> : null}
//         {/* // Here's our data check */}
//         {!isLoading ? (
//           users.map((user) => {
//             const { username, name, email } = user;
//             return (
//               <div key={username}>
//                 <p>Name: {name}</p>
//                 <p>Email Address: {email}</p>
//                 <hr />
//               </div>
//             );
//           })
//         ) : (
//           // If there is a delay in data, let's let the user know it's loading
//           <h3>Loading...</h3>
//         )}
//       </>
//     );
//   }
// }
