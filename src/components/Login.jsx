import { useState } from 'react';
import LoggedIn from './LoggedIn';

const Login = () => {
  const [online, setOnline] = useState(false);
  const [error, setError] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const lsID = localStorage.getItem('ID');

  if (lsID) {
    return <LoggedIn />;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);

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
        if (data.status === 'error') {
          setOnline(false);
          setError(true);
        } else if (data.status === 'ok') {
          console.log('ok');
          localStorage.setItem('ID', data._id);
          setOnline(true);
        }
      });

    e.target.reset();
  };

  const renderForm = (
    <div className="wrapper">
      <h2>Log In</h2>
      <form onSubmit={handleSubmit}>
        <div className="container">
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

          <input type="submit" placeholder="Submit" value="LOG IN" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="maincontainer">
      <div>{online ? <LoggedIn /> : renderForm}</div>
      <div>
        {error ? <p>Invalid username or password</p> : <p>Welcome to Log In</p>}
      </div>
    </div>
  );
};

export default Login;
