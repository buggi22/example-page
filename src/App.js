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
        <ul id="navigation">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
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
    </div>
  );
}

export default App;
