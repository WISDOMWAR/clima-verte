import React from 'react';
import './style.css'
function Page() {
  return (
        <div className="container">
          <h2 id="Create" class="alignee">Create an account</h2>
          <p class="alignee">Already have an account? <a class="lien">Log in</a> </p>
          <form class="formulaire "action="/register" method="post">
            <div className="form-group">
              <label htmlFor="name" class="alignee">User name</label>
              <input type="text" id="name" name="name" placeholder="Enter your name" required />
            </div>
            <div className="form-group">
              <label htmlFor="family-name" class="alignee">Family Name</label>
              <input
                type="text"
                id="family-name"
                name="family-name"
                placeholder="Enter your family name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" class="alignee">Email address</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
            <label htmlFor="password" id="x" class="alignee">Password</label>
            <p class="hide" id="y" >Hide </p>
            <img id="y" class="hide" src='/icon.png'/>
          

              <input type="password" id="y" name="password" placeholder="Enter your password" required />
              <p class="alignee" id="pass"
              >Use 8 or more characters with a mix of letters, numbers & symbols</p>
            
            </div>
            <p class="alignee" id="term">By creating an account, you agree to our <br></br>
             <a class="lien">Terms of use</a> and <a class="lien">Privacy Policy</a></p> <br></br>
      
            <button type="submit" className="btn-register">
              Create an account
            </button>

            


    <img id="topLeftImage" src="signin.jpg" alt="Description de l'image"></img>

  
            
            
          </form>
        </div>
  );
}

export default Page;