import { useState } from 'react';
import LoggedIn from '../LoggedIn/LoggedIn';
const CryptoJS = require('crypto-js');

const Login = () => {
  const [online, setOnline] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const lsID = localStorage.getItem('ID');

  if (lsID) {
    return <LoggedIn />;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    // let username = document.getElementById('username').value;
    // let password = document.getElementById('password').value;

    let userLogin = {
      username: username,
      password: password,
    };
    fetch('http://localhost:5000/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userLogin),
    })
      .then((res) => res.json())
      .then((data) => {
        // let storedUsers = data;
        // const foundUser = storedUsers.find((user) => {
        //   return username === user.username && password === user.password;
        // });
        // if (foundUser) {
        //   localStorage.setItem('ID', `${foundUser._id}`);
        //   console.log('success');
        //   setOnline(true);
        // } else {
        //   console.log('wrong');
        //   setOnline(false);
        // }
        if (data.status === 'error') {
          setOnline(false);
        } else if (data.status === 'ok') {
          console.log('ok');
          localStorage.setItem('ID', data._id);
          setOnline(true);
        }
      });
  };

  const renderForm = (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        name="username"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
        required
      />

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <input type="submit" placeholder="Submit" />
    </form>
  );

  return <div>{online ? <LoggedIn /> : renderForm}</div>;
};

export default Login;
