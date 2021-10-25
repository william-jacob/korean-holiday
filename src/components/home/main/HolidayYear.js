import React from "react";
import { TiChevronRight, TiChevronLeft } from "react-icons/ti";
import styled from "@emotion/styled";

const Button = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const HolidayYear = ({ holidayYear, onPlusAYear, onMinusAYear }) => {
  return (
    <div>
      <Button onClick={onMinusAYear}>
        <TiChevronLeft />
      </Button>
      {holidayYear} 년도 공휴일
      <Button onClick={onPlusAYear}>
        <TiChevronRight />
      </Button>
    </div>
  );
};

export default HolidayYear;
