import React from "react";
function OpenAccoount() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <div className="col-lg">
          <h2 className="mt-5 mb-4 fs-4 text-muted">Open a Zerodha account</h2>
          <p className="text-muted mb-4 fs-6">
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
            F&O trades.
          </p>
          <div className="text-center">
          <button
            className="btn btn-primary px-4 py-2 mb-5"
            style={{ minWidth:"200px", maxWidth: "250px" }}
          >
            Sign up for free
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OpenAccoount;
