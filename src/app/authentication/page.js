"use client"
import './LoginPage.css';

function Page() {
  return (
        <div className="container">
          <div class="row">

  </div>
          <h2 id="registre">Log in</h2>
          <div class="dont"> Don't have an acount ?<sis> sign up </sis> </div>
          <form class="formulaire "action="/register" method="post">
            <div className="form-group">
            <p>


    

  <button class="facebook">
    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
      <circle cx="16.5" cy="16.5" r="14" fill="#0C82EE"/>
      <path d="M21.7137 20.7816L22.3356 16.8301H18.4452V14.267C18.4452 13.1857 18.9877 12.1311 20.7302 12.1311H22.5V8.76699C22.5 8.76699 20.8945 8.5 19.3603 8.5C16.1548 8.5 14.0617 10.3929 14.0617 13.8184V16.8301H10.5V20.7816H14.0617V30.3345C14.7767 30.444 15.5082 30.5 16.2534 30.5C16.9986 30.5 17.7302 30.444 18.4452 30.3345V20.7816H21.7137Z" fill="white"/>
    </svg>
    <p class="logface">Log in with Facebook</p>
  </button>
</p>  <button class="google">
<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="33" height="33" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path></svg>
   <p class="logface">  Log in with Google</p></button>

   <div class="or"> or</div>
            </div>
            <div className="form-group">
              <label class="labemail"  htmlFor="email" >Your Email :</label>
              <input type="email" class="email" id="email" name="email" placeholder="Enter your email" required />
            </div>

            <div className="form-group">
            
              <div class="box">< label id='y' class="labpass" htmlFor="password">Your Password :</label>
              <p class="hide">&nbsp;&nbsp;&nbsp;Hide&nbsp;
              
            <img  class="hide" width="15" height="15" id='x'  src='/hide.png'/></p></div>
             <input type="password" class="password"  id="password" name="password" placeholder="Enter your password" required  />
            </div>
            <button type="submit" className="btn-register">
              Login
            </button>
          </form>
        </div>
  );
}


export default Page;
