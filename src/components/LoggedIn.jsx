import { useState } from 'react';
// import Login from '../Login/Login';

const LoggedIn = () => {
  //delete local storage on logout
  //show user subscribe info
  // change subscription
  const [subscribe, setSubscribe] = useState(Boolean);

  let lsID = localStorage.getItem('ID');
  const getUserInfo = () => {
    fetch(`http://localhost:5000/users/${lsID}`)
      .then((res) => res.json())

      .then((data) => {
        let userInfo = data;
        // set subscription from database
        setSubscribe(userInfo.newsletter);
      });
  };

  const [show, setShow] = useState(Boolean);
  function handleClick() {
    setShow(!show);
  }

  const changeSubscription = () => {
    let subscription = {
      _id: lsID,
      newsletter: !subscribe,
    };
    fetch('http://localhost:5000/users/change', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(subscription),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  getUserInfo();

  const signOut = () => {
    localStorage.removeItem('ID');
    // return <Dashboard />
  };
  return (
    <div>
      <button onClick={signOut}>Sign out</button>
      <h2>Loggedin</h2>
      <h3>Subscribe:</h3>
      <p>{subscribe ? 'Yes' : 'No'}</p>
      <button onClick={changeSubscription}>
        {subscribe ? 'End subscription' : 'Subscribe'}
      </button>

      <button onClick={handleClick}>KLICK</button>
      {show ? 'show' : 'show sometimes'}
    </div>
  );
};

export default LoggedIn;
