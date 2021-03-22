import './App.css';
import React from "react";
import Header from "./Header.js";
import TinderCards from "./TinderCards.js";
import SwipeButtons from "./SwipeButtons";
import Chats from "./Chats";
import ChatsScreen from "./ChatsScreen";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    
    <Router>
      
      <Switch>

      <Route path="/chat/:person">
      <Header backButton = "/chats" />
        <ChatsScreen />
      </Route>

      <Route path="/chats">
      <Header backButton = "/" />
        <Chats />
      </Route>

      <Route path="/message">
        <h1>I am the message page</h1>
      </Route>

      <Route path="/">
      <Header/>
        <TinderCards />
        <SwipeButtons />
      </Route>

      </Switch>
    </Router>
  );
}

export default App;
