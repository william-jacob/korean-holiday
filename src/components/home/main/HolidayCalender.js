import React, { useState } from "react";
import { Calendar } from "antd";
import "antd/dist/antd.css";
import styled from "@emotion/styled";

const CalenderWrapper = styled.div`
  width: 500px;
  height: 500px;
`;

const HolidayCalender = ({ currentDate, onSelectCalenderDate, flag }) => {
  if (flag) {
    return (
      <CalenderWrapper>
        <Calendar value={currentDate} fullscreen={false} />
      </CalenderWrapper>
    );
  }
  return (
    <CalenderWrapper>
      <Calendar onSelect={() => onSelectCalenderDate("a")} fullscreen={false} />
    </CalenderWrapper>
  );
};

export default HolidayCalender;
