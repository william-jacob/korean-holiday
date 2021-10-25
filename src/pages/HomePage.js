import React from "react";
import Title from "../components/home/header/Title";
import Year from "../components/home/header/Year";
import Holidays from "../components/home/main/Holidays";

// import { Row, Col } from "antd";

const HomePage = () => {
  return (
    <>
      <Title />
      <Year />
      <Holidays />
    </>
  );
};

export default HomePage;
