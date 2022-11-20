import React from "react";
import './style.css'

function Home() {
  return (
<div class="box-form">
  <div class="left">
    <div class="overlay">      
    <h1 data-text="Friend">Friendo</h1>
    <div className="buttons">
      <a href="/login">
        <button>
        Login
        </button>
      </a>
    </div>

    <div className="buttons">
      <a href="/sign-up">
        <button>
          Sign up
        </button>
      </a>
    </div>

    </div>
  </div>
 
  </div>


  )
}

export default Home;
