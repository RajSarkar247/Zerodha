import React from 'react';
function People() {
    return ( 
       <div className="container">
      <div className="row p-2 mt-3 border-top">
        <h1 className="mt-5 text-center fs-4">People</h1>
      </div>
      <div className="row fs-6 text-muted" style={{lineHeight:"1.9",fontSize:"1.2rem"}}>
        <div className="col-lg-6 p-4 text-muted text-center">
            <img src="media/nithinKamath.jpg" style={{borderRadius:"100%",width:"50%"}}/>
            <h4 className="mt-3 fs-6">Nithin Kamath</h4>
            <h5 className="mt-4 fs-6">Founder, CEO</h5>
        </div>
        <div className="col-lg-6 p-5">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>
            Playing basketball is his zen.
          </p>
          <p>
            Connect on <a href="" style={{textDecoration:"none",textColor:"blue"}}>Homepage</a> / <a href=""style={{textDecoration:"none",textColor:"blue"}}>TradingQnA</a> / <a href="" style={{textDecoration:"none",textColor:"blue"}}>Twitter</a>
          </p>
        </div>
      </div>
    </div>
     );
}

export default People;