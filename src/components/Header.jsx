import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  <nav>
    <ul>
      <li>
        <Link to={'/login'}>Login</Link>
      </li>
      <li>
        <Link to={'/animals'} activeclassname="active">
          Signup
        </Link>
      </li>
    </ul>
  </nav>;
};

export default Header;
