import { useState } from 'react';

const SignUp = () => {
  //   const [username, setUsername] = useState('');
  //   const [password, setPassword] = useState('');

  const [checked, setChecked] = useState(true);
  function changeCheck() {
    if (document.getElementById('newSubscribe').checked) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }
  const signUp = (e) => {
    e.preventDefault();
    // setUsername(e.target.value);
    // setPassword(e.target.value);
    let username = document.getElementById('newUsername').value;
    let password = document.getElementById('newPassword').value;

    let subscribe = '';

    console.log(subscribe);
    let user = {
      username: username,
      password: password,
      newsletter: checked,
    };

    fetch('http://localhost:5000/users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={signUp}>
        <label htmlFor="username">Admin:</label>
        <input
          type="text"
          id="newUsername"
          name="username"
          placeholder="Username"
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="newPassword"
          name="password"
          placeholder="Password"
          required
        />
        Subscribe to our Newsletter:
        <input
          onChange={changeCheck}
          type="checkbox"
          id="newSubscribe"
          name="subscribe"
        />
        <input type="submit" placeholder="Submit" />
      </form>
    </div>
  );
};

export default SignUp;
