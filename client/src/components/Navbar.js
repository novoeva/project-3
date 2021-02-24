import { Link } from 'react-router-dom'
import React from 'react'
//import axios from 'axios'
export default function Navbar() {
  return <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-menu is-active">
      <div className="navbar-start">
        <img className="navbar-logo" src="../images/transparent-logo.png"/>
        <div className="navbar-item">
          <div className="buttons">
            <Link to="/cityscapes" className="button">
              Home
            </Link>
            <Link to='/cityscapes/discover' className="button">
              Discover
            </Link>
            <Link to='/cityscapes/flights' className="button">
              Flights
            </Link>
          </div>
        </div>  
      </div>
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <Link to="/register" className="button" id="reg-log-button">
              Register
            </Link>
            <Link to="/login" className="button" id="reg-log-button">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  </nav>
}
