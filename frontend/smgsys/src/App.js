import React, { Component } from "react";
import "./App.css";
import Coaches from "./coaches/coaches";
import Comments from "./comments/comments";
import Players from "./players/players";
import Supporters from "./supporters/supporters";
import Tickets from "./tickets/tickets";
import Users from "./users/users";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Coaches />
        <Comments />
        <Players />
        <Supporters />
        <Tickets />
        <Users />
      </div>
    );
  }
}

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */

export default App;
