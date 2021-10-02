import React, { Component } from 'react'
import FundsData from '../mocks/funds.json'
import { Link } from 'react-router-dom'

function Fund() {
  return (
    <div>
      <h1 className="headline">Blockchain Analyzed Funds<span className="brand">.</span></h1>
      {FundsData.map((fundDetail, index)=> {
        return (
          <div key={index}>
            <Link to={fundDetail.name}>
            <div className="fund-link">{fundDetail.name}</div>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default Fund