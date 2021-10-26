import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import styled from "@emotion/styled";

const Button = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const HolidayYear = ({ holidayYear, onPlusAYear, onMinusAYear }) => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  return (
    <div>
      {holidayYear < currentYear - 2 ? (
        <Button style={{ cursor: "none", visibility: "hidden" }}>
          <IoIosArrowBack />
        </Button>
      ) : (
        <Button onClick={onMinusAYear}>
          <IoIosArrowBack />
        </Button>
      )}
      {holidayYear} 년도 공휴일
      {holidayYear > currentYear + 1 ? null : (
        <Button onClick={onPlusAYear}>
          <IoIosArrowForward />
        </Button>
      )}
    </div>
  );
};

export default HolidayYear;
