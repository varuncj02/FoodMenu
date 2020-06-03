import React from 'react';
import logo from './logo.svg';
import './App.css';
import FoodInfo from "./FoodInfo";
import Table from "./Table";
import { Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    /*<div className="App">
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
    </div>*/
    <Router>
    <Route exact path="/" component={FoodInfo} />
    <Route exact path="/view" component={Table} />
  </Router>
  );
}

export default App;
