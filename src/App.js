import React, { useState } from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import { useStateValue } from "./StateProvider";

function App() {
  // BEM naming convention
  const [{ user }, disptach] = useStateValue();

  return (
    <div className="whatsapp">
      {!user ? (
        <Login></Login>
      ) : (
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
      )}
    </div>
  );
}

export default App;
