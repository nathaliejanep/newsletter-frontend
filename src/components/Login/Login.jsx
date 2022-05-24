import { useState } from 'react';

const Login = () => {
  // const [errorMsg, setErrorMsg] = useState({});
  const [online, setOnline] = useState(false);

  // const renderErrorMsg = (name) => {
  //   name === errorMsg.name && <div className="error">{errorMsg.message}</div>;
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    fetch('http://localhost:5000/users')
      .then((res) => res.json())
      .then((data) => {
        let storedUsers = data;

        const foundUser = storedUsers.find((user) => {
          return username === user.username && password === user.password;
        });

        if (foundUser) {
          localStorage.setItem('ID', `${foundUser._id}`);
          console.log('success');
          setOnline(true);
        } else {
          console.log('wrong');
          setOnline(false);
        }
      });
  };

  const renderForm = (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Admin:</label>
      <input
        type="text"
        id="username"
        name="username"
        placeholder="Username"
        required
      />

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Password"
        required
      />

      <input type="submit" placeholder="Submit" />
    </form>
  );
  return <div>{online ? <div>User is logged in</div> : renderForm}</div>;
};

export default Login;