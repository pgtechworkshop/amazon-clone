import React, {useEffect} from "react";
import './App.css';
import Login from "./Login"
import { BrowserRouter as Router, Route , Switch } from "react-router-dom";

import Home from "./Home";
import Header from "./Header";
import { auth } from "./firebase.js";

function App() {
return <div className="app">
  <Router>
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/">
        <Header />
        <Home />
      </Route>
    </Switch>
  </Router> 
  </div>
useEffect(() => {

  auth.onAuthStateChanged((authUser) => {
    if(authUser) {
      dispatchEvent({
        type: "SET_USER",
        user: authUser,
      });
    }
    else {
      dispatchEvent({
        type: "SET_USER",
        user: null,
      });
    }
  });

}, [])
}

export default App;
