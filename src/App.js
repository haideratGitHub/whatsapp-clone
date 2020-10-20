import React from "react";
import "./App.css";
import Sidebar from "./Sidebar";

function App() {
  // BEM naming convention
  return (
    <div className="app">
      <div className="app__body">
        <Sidebar></Sidebar>
        {/* chat */}
      </div>
    </div>
  );
}

export default App;
