import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{textAlign: "center" }}
      className="container-main py-3"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
