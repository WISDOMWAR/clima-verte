// Page.js
import React from 'react';
import './style.css';

function Page() {
  return (
    <nav>

      <div className="logo"></div>
      <ul>
        <li><a id="home" href="#">Home</a></li>
        <li><a id="reclamation" href="#">Reclamation</a></li>
        <li><a id="store" href="#">Store</a></li>
        <li><a id="contact" href="#">Contact</a></li>
      </ul>
      <div className="buttons">
        <button className="signInButton">Sign In</button>
        <button className="logInButton">Log In</button>
      </div>
    </nav>
  );
}

export default Page;
