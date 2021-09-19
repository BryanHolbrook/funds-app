import React from "react";
import FundsData from '../mocks/funds.json'

function FundsList() {
  return (
    <div style={{ textAlign: "center" }}>
  
      {FundsData.map((fundDetail, index)=> {
          return (
            <div>
              <h2>{fundDetail.name} {fundDetail.id}</h2>
             
              {fundDetail.companies.map((company, index) => {
                return ( 
                  <div>
                  
                  {company.name}
                  </div>
                )
              })}
            </div>
          )
      })}
    </div>
  );
}

export default FundsList;
