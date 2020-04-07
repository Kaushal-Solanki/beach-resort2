import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { RoomProvider } from "./Context";

ReactDom.render(
  <RoomProvider>
    <Router>
      <App />
    </Router>
  </RoomProvider>,
  document.getElementById("root")
);
