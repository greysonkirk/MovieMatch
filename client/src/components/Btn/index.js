import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
export function DeleteBtn(props) {
  return (
    <span className="delete-btn btn btn-hover" {...props} role="button" tabIndex="0">
      ✗
    </span>
  );
}
export function LoginBtn(props) {
  return (
    <span className="btn btn-info btn-hover mx-3" {...props} role="button" tabIndex="0">
      Login
    </span>
  );
}
export function SignUpBtn(props) {
  return (
    <span className="btn btn-success btn-hover mx-3" {...props} role="button" tabIndex="0">
      Sign Up
    </span>
  );
}

