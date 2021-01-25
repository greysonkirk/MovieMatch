import React from "react";
import Logo from "../../../src/MMlogo.png";

function Nav() {
  return (

<nav className="navbar navbar-expand-lg navbar-light bg-info">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Movie
      <img src={Logo} alt="logo" height="50" className="d-inline-block align-top"></img>
      Match</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/login">Login</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
 
      </ul>
    </div>
  </div>
</nav>

  );
}

export default Nav;
