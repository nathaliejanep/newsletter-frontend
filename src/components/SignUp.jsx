import { useState } from 'react';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [checked, setChecked] = useState(Boolean);

  // Handles checbox value
  const changeCheck = () => {
    if (document.getElementById('newSubscribe').checked) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let user = {
      username: username,
      password: password,
      newsletter: checked,
    };

    fetch('https://janes-newsletter.herokuapp.com/users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 'error') {
          setSubmitted(false);
          setError(true);
        } else {
          setSubmitted(true);
          setError(false);
        }
        console.log(data);
      });

    e.target.reset();
  };

  const renderForm = (
    <div className="wrapper">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <label htmlFor="username">Email:</label>
          <input
            type="email"
            id="newUsername"
            name="username"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="newPassword"
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label>
            Check to subscribe to our newsletter
            <input
              onChange={changeCheck}
              type="checkbox"
              id="newSubscribe"
              name="subscribe"
            />
          </label>
          <br />
          <input type="submit" placeholder="Submit" value="SUBMIT" />
        </div>
      </form>
    </div>
  );
  return (
    <div className="form-container">
      {renderForm}
      <div style={{ display: error ? '' : 'none' }}>
        <p>Username already taken</p>
      </div>
      <div style={{ display: submitted ? '' : 'none' }}>
        <p>{username} Successfully registered</p>
      </div>
    </div>
  );
};

export default SignUp;
