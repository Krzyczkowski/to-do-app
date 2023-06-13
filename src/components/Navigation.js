import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
function Navigation() {
  return (
    <nav className='navigation'>
      <ul>
        <li>
          <Link to="/to-do-app/">Home</Link>
        </li>
        <li>
          <Link to="/to-do-app/todo/">Todo</Link>
        </li>
        <li>
          <Link to="/to-do-app/contact/">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;