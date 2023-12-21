import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleClick2=() =>{
    axios.post('https://jsonplaceholder.typicode.com/users',{username:'hehe',password:'lmao',email:'abc@deloitte.com'})
    .then(function (response) {console.log(response);
      navigate('/Login');})
    .catch(function (error) {console.log(error);});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform user registration logic here, like sending a request to a server.
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Email:', email);
    // Add your user registration logic here, for example, sending data to a server.
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
      <label>
        Email:
        <input type="email" value={email} onChange={handleEmailChange} />
      </label>
      <br />
      <button type="submit" onClick={handleClick2}>Register</button>
      <button><Link to='/'>Back to home page</Link></button>
    </form>
  );
};

export default RegistrationForm;