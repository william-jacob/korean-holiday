import React from "react";
import styled from "@emotion/styled";
import { injectGlobal } from "@emotion/css";

injectGlobal`
  * {
    box-sizing: border-box;
  }
  @font-face {
    font-family: 'Dongle-Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108_2@1.0/Dongle-Bold.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
`;

const HolidayAppTitle = styled.h2`
  font-family: "Dongle-Bold";
  font-size: 40px;
  color: red;
`;

const Title = () => {
  return <HolidayAppTitle>공휴일 목록</HolidayAppTitle>;
};

export default Title;
