import React from 'react'
import './Header.css';
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <div className='header'>
      <nav>
        <ul className='nav-left'>
          <li>
            <NavLink to="/">Login</NavLink>
          </li>|
          <li>
            <NavLink to="/welcome">Welcome</NavLink>
          </li>|
          <li>
            <NavLink to="/marksheet">Marksheet</NavLink>
          </li>|
          <li>
            <NavLink to="/marksheet-list">Marksheet List</NavLink>
          </li>|
          <li>
            <NavLink to="/college">College</NavLink>
          </li>|
          <li>
            <NavLink to="/college-list">College List</NavLink>
          </li>|
          
        </ul>
        <div className="nav-right">
          <span>Welcome Guest</span> | <NavLink to="/logout">Logout</NavLink>
        </div>
      </nav>
    </div>
  )
}

export default Header