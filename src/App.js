import React from 'react';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import SignUp from './components/SignUp/SignUp';
import LoggedIn from './components/LoggedIn/LoggedIn';

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

      <div className="app-intro">
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/loggedin" element={<LoggedIn />}></Route>
        </Routes>
      </div>
      {/* <Login />
      <SignUp />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
