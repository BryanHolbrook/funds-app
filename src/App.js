import React, { Component } from "react";
import logo from "./images/logo.png";
import FundsList from "./funds/FundsList";
import "./App.css";
import FundsData from './mocks/funds.json'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
// import Home from "./pages/Home";
import Fund from "./pages/Fund";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
          <Link className="logo-link" to="/">aumni</Link>
          </li>
        </ul>
      </nav>

      <div className="header">
        <Route path="/" exact component={Fund} />
        <Route path="/:fund">
          <FundsList funds={FundsData} />
        </Route>
      </div>
      
    </Router>
   
  );
}

export default App;
