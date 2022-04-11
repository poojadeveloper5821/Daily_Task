import React,{useState} from "react";

const Store = () => {

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
 
    const handle = () => {
       localStorage.setItem('Name', username);
       localStorage.setItem('Password', password);
    };
    const remove = () => {
       localStorage.removeItem('Name');
       localStorage.removeItem('Password');
    };
    // handleFormSubmit = () => {
    //     const { username, password} = this.state;
    //     localStorage.setItem('password', password);
    //     localStorage.setItem('username', password ? username : '');
    //   };



    return (
       <div className="App">
          <h1>Name of the user:</h1>
          <input
             placeholder="Name"
             value={username}
             onChange={(e) => setUserName(e.target.value)}/>
          <h1>Password of the user:</h1>
          <input
             type="password"
             placeholder="Password"
             value={password}
             onChange={(e) => setPassword(e.target.value)}/>
          <div>
             <button onClick={handle}>Done</button>
          </div><br/>
          {localStorage.getItem('Name') && (
             <div>
                Name: <p>{localStorage.getItem('Name')}</p>
             </div>
          )}
          {localStorage.getItem('Password') && (
             <div>
                Password: <p>{localStorage.getItem('Password')}</p>
             </div>
          )}
          <div>
             <button onClick={remove}>Remove</button>
          </div>
       </div>
    )
 }
 export default Store;
 