import React from "react";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  console.log("HOME COMPONENT LOADED");
  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;