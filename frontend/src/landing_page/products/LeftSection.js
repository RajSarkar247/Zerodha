import React from "react";
function LeftSection({
  imageURL,
  productName,
  productDescription,
  trydemo,
  learnmore,
  googleplay,
  appstore,
}) {
  return (
    <div className="container">
      <div className="row align-items-center py-5">
        <div className="col-lg-5 col-12 text-center mb-4 mb-lg-0">
          <img src={imageURL} className="img-fluid"/>
        </div>
        <div className="col-lg-2"></div>
        <div className="col-lg-5 p-5">
          <h1 className="mb-4 fs-2">{productName}</h1>
          <p className="text-muted" style={{ fontSize: "1.25rem" }}>
            {productDescription}
          </p>
          <div className="mt-4">
            {trydemo}
            <a
              href={learnmore}
              style={{
                marginLeft: "100px",
                textDecoration: "none",
                textColor: "blue",
              }}
            >
              Learn more<i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div className="mt-4">
            <a href={googleplay}>
              <img src="media/googlePlayBadge.svg" className="img-fluid"/>
            </a>
            <a href={appstore} style={{ marginLeft: "40px" }}>
              <img src="media/appstoreBadge.svg" className="img-fluid"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
