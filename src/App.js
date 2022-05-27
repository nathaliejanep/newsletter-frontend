import React from 'react';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import SignUp from './components/SignUp';
import LoggedIn from './components/LoggedIn';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Newsletter</h1>
      </header>
      <div className="menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
        </ul>
      </div>

      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/loggedin" element={<LoggedIn />}></Route>
      </Routes>
    </div>
  );
}

export default App;
