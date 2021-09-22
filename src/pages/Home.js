import React, { Component } from "react";
import FundsList from "../funds/FundsList";

function Home() {
    return (
        <div>
        <h1 className="headline">Aumni Funds</h1>
        <FundsList />
        </div>
    );
}

export default Home;
