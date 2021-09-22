import React from "react";
import FundsData from "../mocks/funds.json";
import "./funds.css"
import { useParams } from "react-router-dom";

function FundsList(props) {
  let { fund } = useParams();
  // console.log(props.funds)
  console.log(fund)
  const data = props.funds.filter((fundData) => fund === fundData.name)[0]
  console.log(data)
  return (
    <div>
          <div>
            <h1>{data.name}<span className="blue">.</span></h1>
            <div className="grid-container">
            {data.companies.map((company, index) => {
              return ( 
                  <div className="grid-item">
                    <img className="fund-logo" src={company.logo} alt="Company Logo"></img>
                    <h4>{company.name}</h4>
                     <hr className="data-rule-a"/>
                    <p className="card-copy">FOUNDED: <span className="blue">{company.founded}</span></p>
                   
                    <p className="card-copy">COST: {company.cost}</p>
                    
                    <p className="card-copy">VALUE: {company.impliedValue}</p>
                    
                    <p className="card-copy">OWNERSHIP: {company.ownershipPercentage}%</p>
                  </div>
                )
              })}
            </div>
          </div>
    </div>
  );
}

export default FundsList;
