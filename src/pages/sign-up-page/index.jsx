import React from "react";
import luis from "../../img/luis.jpeg"

function Sign_up() {
  return (
<div class="login-card">
  <div class="login-card-content">
    <div class="header">
      <div class="logo">
        <div><img src={luis} alt="luis" height="400" width="200"/></div>
      </div>
      <a href="/"><h2>Frien<span class="highlight">do</span></h2></a>
      <h3>Making friends has never been this easy!</h3>
    </div>
   
    <div class="form">
      <div class="form-field username">
        <div class="icon">
          <i class="fas fa-user"></i>
        </div>
        <input type="text" placeholder="Create a username"/>
      </div>
      <div class="form-field email">
        <div class="icon">
          <i class="fas fa-address-card"></i>
        </div>
        <input type="text" placeholder="Type a valid email"/>
      </div>
      <div class="form-field password">
        <div class="icon">
          <i class="fas fa-lock"></i>
        </div>
        <input type="password" placeholder="Enter a password"/>
      </div>
      <div class="form-field password">
        <div class="icon">
          <i class="fas fa-lock"></i>
        </div>
        <input type="password" placeholder="Re-type password"/>
      </div>

      <button type="submit">
        Sign up
      </button>
    </div>
  </div>
  <div>
    Already have an account? <a href="/login">Login</a>
  </div>
</div>
  )
}

export default Sign_up;