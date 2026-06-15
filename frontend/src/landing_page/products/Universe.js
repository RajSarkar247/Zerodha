import React from "react";
function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1 className="mb-4 fs-4">The Zerodha Universe</h1>
        <p className="mb-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-lg-4 p-3">
          <img src="media/zerodhaFundhouse.png" className="img-fluid" style={{ width: "45%" }} />
          <p className="mt-3 text-small text-muted p-3">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-lg-4 p-3">
          <img src="media/sensibullLogo.svg" className="img-fluid" style={{ width: "50%" }} />
          <p className="mt-3 text-small text-muted p-3">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-lg-4 p-3">
          <img src="media/goldenpiLogo.png" className="img-fluid" style={{ width: "40%" }} />
          <p className="mt-3 text-small text-muted p-3">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
        <div className="col-lg-4 p-3">
          <img src="media/streakLogo.png" className="img-fluid" style={{ width: "45%" }} />
          <p className="mt-3 text-small text-muted p-3">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-lg-4 p-3">
          <img src="media/smallcaseLogo.png" className="img-fluid" style={{ width: "50%" }} />
          <p className="mt-3 text-small text-muted p-3">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-lg-4 p-3">
          <img src="media/dittoLogo.png" className="img-fluid" style={{ width: "40%" }} />
          <p className="mt-3 text-small text-muted p-3">
            Personalized advice on life and health insurance. No spam and no
            mis-selling. Sign up for free
          </p>
        </div>
        <div className="text-center">
        <button className="btn btn-primary px-4 py-2 mb-5" style={{minWidth:"200px", maxWidth: "250px"}}>Sign up for free</button>
        </div>
      </div>
    </div>
  );
}

export default Universe;
