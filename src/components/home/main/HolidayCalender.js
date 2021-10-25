import React, { useState } from "react";
import Calendar from "../../Calender";
import { Typography } from "antd";
import "antd/dist/antd.css";
import styled from "@emotion/styled";
import dayjs from "dayjs";

const CalenderWrapper = styled.div`
  width: 500px;
  height: 500px;
`;

const HolidayCalender = ({
  currentDate,
  onSelectCalenderDate,
  holidayYear,
  flag,
}) => {
  // const [value, setValue] = useState(dayjs());

  if (flag) {
    return (
      <CalenderWrapper>
        <Calendar fullscreen={false} />
      </CalenderWrapper>
    );
  }
  return (
    <CalenderWrapper>
      <div className="site-calendar-customize-header-wrapper">
        <Calendar
          value={currentDate}
          fullscreen={false}
          //customize-header
          headerRender={() => {
            return (
              <div>
                <Typography.Title level={4}>{holidayYear}</Typography.Title>
              </div>
            );
          }}
        />
      </div>
    </CalenderWrapper>
  );
};

export default HolidayCalender;
