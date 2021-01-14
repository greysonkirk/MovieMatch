import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
 
import Detail from "./pages/Detail";
 
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
 
            <Detail />
 
      </div>
    </Router>
  );
}

export default App;
