import React, { Component } from "react";
import FundsData from "../mocks/funds.json";
import styles from '../App.css';
import { Link } from "react-router-dom"

function Fund() {
    return (
        <div>
        <h1 className="headline">Aumni Analyzed Funds<span className="blue">.</span></h1>
        {FundsData.map((fundDetail, index)=> {
        return (
          <div>
            <Link to={fundDetail.name}>
            <h2>{fundDetail.name}</h2>
            </Link>
          </div>
          )
      })}
    </div>
    );
}

export default Fund;