// LoginForm.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'


const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform authentication logic here, like sending a request to a server.
    console.log('Username:', username);
    console.log('Password:', password);
    // Add your authentication logic here, for example, sending data to a server.
  };
  const handleClick = () => {
    axios.post('https://jsonplaceholder.typicode.com/users', { username: 'hehe', password: 'lmao' })
      .then(function (response) { 
        console.log(response);
        // go to another page  
        navigate('/Blog');
      })
      .catch(function (error) { console.log(error); });

  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <br />
      <button onClick={handleClick}>SUBMIT</button>
      <button><Link to='/'>Back to home page</Link></button>
      {/* <button><Link to='/Blog'>Submit</Link></button>     */}
    </form>
  );
};

export default LoginForm;