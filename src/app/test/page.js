import React from 'react';
import './style.css'
function Page() {
  return (
        <div className="container">
          <h2 id="registre">Sign in</h2>
          <form class="formulaire "action="/register" method="post">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Enter your name" required />
            </div>
            <div className="form-group">
              <label htmlFor="family-name">Family Name</label>
              <input
                type="text"
                id="family-name"
                name="family-name"
                placeholder="Enter your family name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" placeholder="Enter your password" required />
            </div>
            <button type="submit" className="btn-register">
              Register
            </button>
          </form>
        </div>
  );
}

export default Page;
