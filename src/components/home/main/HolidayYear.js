import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import styled from "@emotion/styled";

const HolidayYearWrapper = styled.div`
  font-size: 25px;
`;

const Button = styled.button`
  margin: 0 30px;
  outline: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const HolidayYear = ({ holidayYear, onPlusAYear, onMinusAYear }) => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  return (
    <HolidayYearWrapper>
      {holidayYear < currentYear - 2 ? (
        <Button style={{ cursor: "none", visibility: "hidden" }}>
          <IoIosArrowBack />
        </Button>
      ) : (
        <Button onClick={onMinusAYear}>
          <IoIosArrowBack />
        </Button>
      )}
      <h4 style={{ display: "inline-block" }}>{holidayYear} 년도 공휴일</h4>
      {holidayYear > currentYear + 1 ? (
        <Button style={{ cursor: "none", visibility: "hidden" }}>
          <IoIosArrowForward />
        </Button>
      ) : (
        <Button onClick={onPlusAYear}>
          <IoIosArrowForward />
        </Button>
      )}
    </HolidayYearWrapper>
  );
};

export default HolidayYear;
