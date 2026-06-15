import React from "react";
function RightSection({
  imageURL,
  productName,
  productDescription,
  learnmore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-6 p-5 mt-5">
          <h1 className="fs-2 mb-4">{productName}</h1>
          <p className="text-muted" style={{ fontSize: "1.25rem" }}>
            {productDescription}
          </p>
          <div className="mt-4">
            <a
              href={learnmore}
              style={{
                textDecoration: "none",
                textColor: "blue",
              }}
            >
              Learn more<i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
        <div className="col-lg-6">
          <img src={imageURL} className="img-fluid"/>
        </div>
      </div>
    </div>
  );
}

export default RightSection;
