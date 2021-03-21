import './App.css';
import React from "react";
import Header from "./Header.js";
import TinderCards from "./TinderCards.js";
import SwipeButtons from "./SwipeButtons";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    
    <Router>
      <Header/>
      <Switch>



      <Route path="/chat">
        <h1>I am the chat page</h1>
      </Route>

      <Route path="/message">
        <h1>I am the message page</h1>
      </Route>

      <Route path="/">
        <TinderCards />
        <SwipeButtons />
      </Route>

      


      </Switch>
    </Router>
  );
}

export default App;
