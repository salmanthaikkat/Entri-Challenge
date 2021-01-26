import React, { useEffect } from "react";
import MainContainer from "./components/mainContainer";
import SideContainer from "./components/sideContainer";

const HomePage = () => {
  return (
    <div className="main">
      <MainContainer />
      <SideContainer />
    </div>
  );
};

export default HomePage;
