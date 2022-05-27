import { useEffect, useState } from 'react';
import Login from './Login';
// import Login from '../Login/Login';

const LoggedIn = () => {
  const [subscribe, setSubscribe] = useState(false);
  const [online, setOnline] = useState(true);

  let lsID = localStorage.getItem('ID');
  useEffect(() => {
    fetch(`http://localhost:5000/users/${lsID}`)
      .then((res) => res.json())

      .then((data) => {
        let userInfo = data;
        // set subscription from database
        setSubscribe(userInfo.newsletter);
        console.log(subscribe, 'userinfo:');
      });
  }, []);

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
    console.log('change sub:', subscribe);
    setSubscribe(!subscribe);
  };

  const signOut = () => {
    localStorage.removeItem('ID');
    setOnline(false);
    // return <Dashboard />
  };

  const onlineHtml = (
    <div>
      <button onClick={signOut}>Sign out</button>
      <h2>Loggedin</h2>
      <h3>Subscribe:</h3>
      <p>{subscribe ? 'Yes' : 'No'}</p>
      <button onClick={changeSubscription}>
        {subscribe ? 'End subscription' : 'Subscribe'}
      </button>
    </div>
  );
  return <div>{online ? onlineHtml : <Login />}</div>;
};

export default LoggedIn;
