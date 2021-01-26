import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Movies from "./pages/Movies";
import MoviesBuild from "./components/SwipeChoice";
import Start from "./pages/Start";
import Profile from "./pages/Profile";


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={"/"}>
            <Home />
          </Route>
          <Route exact path={"/login"}>
            <Login />
          </Route>
          <Route exact path={"/signup"}>
            <Signup />
          </Route>
          <Route exact path={"/movies"}>
            <Movies />
          </Route>
          <Route exact path={"/moviesbuild"}>
            <MoviesBuild />
          </Route>
          <Route exact path={"/start"}>
            <Start />
          </Route>
          <Route exact path={"/profile"}>
            <Profile />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
