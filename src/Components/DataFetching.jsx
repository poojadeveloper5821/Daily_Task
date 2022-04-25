import React from "react";
//import axios from "axios";

class DataFetching extends React.Component {
  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }

  // ComponentDidMount is used to
  // execute the code
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true,
        });
      });
  }
  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded)
      return (
        <div>
          <h1> Pleses wait some time.... </h1>{" "}
        </div>
      );

    return (
      <div className="App">
        <h1> Fetch data from an api in react </h1>{" "}
        {items.map((item) => (
          <ol key={item.id}>
            User_Name: {item.username}, Full_Name: {item.name}, User_Email:{" "}
            {item.email}
          </ol>
        ))}
      </div>
    );
  }
}

export default DataFetching;


















// function DataFetching() {
//   const [user, setUser] = useState({});
//   const[id,setId]=useState(1);

//   useEffect(() => {
//     axios
//       .get(`https://jsonplaceholder.typicode.com/users/${id}`)
//       .then(res => {
//         console.log(res)
//         setUser(res.data);
//       })
//       .catch((err) => {
//         console.log(err)
//       })
//   },[id]);

//   return (
//     <>
//     <input type="text" value={id} onChange={e=> setId(e.target.value)}/>
//       <div> {user.name}</div>
//       {/* <ul>
//         {user.map((user) => (
//           <li key={user.id}>{user.name}</li>
//         ))}
//       </ul> */}
//     </>
//   );
// }

// export default DataFetching;
