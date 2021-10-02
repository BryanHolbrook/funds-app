import React from 'react'
import './funds.css'
import { useParams } from 'react-router-dom'

function FundsList({ funds }) {
  let { fund } = useParams()
  const data = funds.filter((fundData) => fund === fundData.name)[0]
  
  return (
    <div>
      <div>
        <h1>{data.name}<span className="brand">.</span></h1>
        <div className="grid-container">
        {data.companies.map((company, index) => {
          return ( 
            <div className="grid-item">
              <img className="fund-logo" src={company.logo} alt="Company Logo"></img>
              <h4>{company.name}</h4>
              <hr className="data-rule-a"/>
              <p className="card-copy">FOUNDED: <span className="brand">{company.founded}</span></p>
              <p className="card-copy">COST: {company.cost}</p>
              <p className="card-copy">VALUE: {company.impliedValue}</p>
              <p className="card-copy">OWNERSHIP: {company.ownershipPercentage}%</p>
            </div>
          )
          })}
        </div>
      </div>
    </div>
  )
}

export default FundsList
