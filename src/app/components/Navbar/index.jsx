import React from 'react';
import './style.scss';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="left-section">
        <h2 className="logo">searchin</h2>
      </div>
      <div className="middle-section">
        <form action="" className="search-bar">
          <input type="text" className="search-input" />
        </form>
      </div>
      <div className="right-section">
        <button className="sign-up">Sign up</button>
        <button className="login">Log in</button>
      </div>
    </nav>
  )
}

export default Navbar;
