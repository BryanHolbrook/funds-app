import React, { Component } from "react";
import FundsList from "./funds/FundsList";
import logo from "./images/logo.png";
import "./App.css";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <img src={logo} alt="Aumni Logo" />
      <h1>Aumni Frontend Coding Challenge</h1>
      <FundsList />
    </div>
  );
}

export default App;
