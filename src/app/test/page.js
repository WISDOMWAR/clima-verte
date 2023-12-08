import React from 'react';
import './style.css';

function Page() {
  return (
    <div id="all"> 
      <div className="container">
        <h2 id="Create" className="alignee">Create an account</h2>
        <p className="alignee">Already have an account? <a className="lien" href="/login">Log in</a></p>
        <form className="formulaire" action="/register" method="post">
          <div className="form-group">
            <label htmlFor="name" className="alignee">User name</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" required />
          </div>
          <div className="form-group">
            <label htmlFor="family-name" className="alignee">Family Name</label>
            <input
              type="text"
              id="family-name"
              name="family-name"
              placeholder="Enter your family name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="alignee">Email address</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="alignee">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" required />
            <p className="alignee" id="pass">Use 8 or more characters with a mix of letters, numbers & symbols</p>
          </div>
          <p className="alignee" id="term">By creating an account, you agree to our <br />
            <a className="lien" href="/terms">Terms of use</a> and <a className="lien" href="/privacy">Privacy Policy</a>
          </p>
          <br />
          <button type="submit" className="btn-register">
            Create an account
          </button>
        </form>
      </div>
      <img id="topLeftImage" src="signin.jpg" alt="Description de l'image" />
    </div>
  );
}

export default Page;
