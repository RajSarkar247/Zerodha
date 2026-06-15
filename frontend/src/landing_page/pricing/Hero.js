import React from "react";
function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 text-center border-bottom fs-6">
        <h1 className="fs-2">Charges</h1>
        <h4 className="text-muted fs-5 mt-3">List of all charges and taxes</h4>
        <div className="row p-3 mt-3 fs-6 text-center">
          <div className="col-lg-4 p-4 text-muted">
            <img src="media/pricingEquity.svg" />
            <h1 className="fs-3">Free Equity Delivery</h1>
            <p className="mt-3">
              All equity delivery investments (NSE, BSE),
              <br />
              are absolutely free — ₹ 0 brokerage.
            </p>
          </div>
          <div className="col-lg-4 p-4 text-muted">
            <img src="media/intradayTrades.svg" />
            <h1 className="fs-3">Intraday and F&O trades</h1>
            <p className="mt-3">
              Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
              intraday trades across equity, currency, and commodity trades.
              Flat ₹20 on all option trades.
            </p>
          </div>
          <div className="col-lg-4 p-4 text-muted">
            <img src="media/pricingEquity.svg" />
            <h1 className="fs-3">Free direct MF</h1>
            <p className="mt-3">
              All direct mutual fund investments are absolutely free — ₹ 0
              commissions & DP charges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
