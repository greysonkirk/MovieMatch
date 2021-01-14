import React from "react";
import Logo from "../../../src/MMlogo.png";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
      Movie <img src={Logo} height="50px"></img> Match
      </a>
    </nav>
  );
}

export default Nav;
