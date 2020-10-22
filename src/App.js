import React from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  // BEM naming convention
  return (
    <div className="app">
      <div className="app__body">
        <Router>
          <Sidebar></Sidebar>
          <Switch>
            <Route path="/rooms/:roomId" component={Chat}></Route>
            {/* <Route path="/">
              <Chat></Chat>
            </Route> */}
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
