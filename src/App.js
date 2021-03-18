import './App.css';
import React from "react";
import Header from "./Header.js";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    
    <Router>
      <Header/>
      <Switch>
      <Route path="/chat">
        <h1>I am the chat page</h1>
      </Route>
      <Route path="/">
        <h1>I am homepage</h1>
      </Route>
      </Switch>
    </Router>
  );
}

export default App;
