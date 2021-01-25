import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchNews } from "../../redux/news/action";
import MainContainer from "./components/mainContainer";
import SideContainer from "./components/sideContainer";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  return (
    <div className="main">
      <MainContainer />
      <SideContainer />
    </div>
  );
};

export default HomePage;
