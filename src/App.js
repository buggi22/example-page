import './App.css';
import React from 'react';
import {Route, Switch, Link} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      <nav>
        <div style={{display: "flex", alignItems: "center", gap: "0.5rem"}}>
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/contact"}>Contact</Link>
        </div>
      </nav>
      <Switch>
        <Route exact={true} path={"/"}>
          <Home />
        </Route>
        <Route path={"/about"}>
          <About />
        </Route>
        <Route path={"/contact"}>
          <Contact />
        </Route>
      </Switch>
      <div>Hello react world: {process.env.REACT_APP_EXAMPLE_ENV_VAR}</div>
    </div>
  );
}

export default App;
