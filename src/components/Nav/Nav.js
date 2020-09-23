import React from 'react'
import { Link } from "react-router-dom";
import './Nav.scss'

const Nav = () => {
  return (
    <>
      <nav className="nav" >
        <ul className="nav__list">
          <li className="nav__list-item">
            <Link to="/">home</Link>
          </li>
          <li className="nav__list-item">
            <Link to="/about/">aboutMe</Link>
          </li>
          <li className="nav__list-item">
            <Link to="/gallery/">gallery</Link>
          </li>
          <li className="nav__list-item">
            <Link to="/game/">game</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Nav