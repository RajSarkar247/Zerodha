import React, { useState, useEffect } from "react";
import Hero from "./Hero.js";
import LeftSection from "./LeftSection.js";
import RightSection from "./RightSection.js";
import Universe from "./Universe.js";

import Navbar from "../Navbar.js";
import Footer from "../Footer.js";
function ProductsPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const status = localStorage.getItem("loggedIn");
    setIsLoggedIn(status === "true");
  }, []);

  const goToDashboard = () => {
    console.log("Button clicked");
    console.log("Dashboard URL:", process.env.REACT_APP_DASHBOARD_URL);
    window.location.href = "http://localhost:3000";
  };

  return (
    <>
      <Hero />
      <LeftSection
        imageURL="media/kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        trydemo={
          isLoggedIn ? (
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                goToDashboard();
              }}
            >
              Try Demo
            </a>
          ) : null
        }
        learnmore=""
        googleplay=""
        appstore=""
      />
      <RightSection
        imageURL="media/console.png"
        productName="Console"
        productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnmore=""
      />
      <LeftSection
        imageURL="media/coin.png"
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        trydemo=""
        learnmore=""
        googleplay=""
        appstore=""
      />
      <RightSection
        imageURL="media/kiteconnect.png"
        productName="Kite Connect API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        learnmore=""
      />
      <LeftSection
        imageURL="media/varsity.png"
        productName="Varsity mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        trydemo=""
        learnmore=""
        googleplay=""
        appstore=""
      />
      <RightSection
        imageURL="media/console.png"
        productName="Console"
        productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnmore=""
      />
      <p className="text-center mb-5" style={{ fontSize: "1.35rem" }}>
        Want to know more about our technology stack? Check out the{" "}
        <b>
          <a href="" style={{ textDecoration: "none", textColor: "blue" }}>
            Zerodha.tech
          </a>
        </b>{" "}
        blog.
      </p>
      <Universe />
    </>
  );
}

export default ProductsPage;
