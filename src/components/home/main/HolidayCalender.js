import React, { useState, useMemo } from "react";
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
  holidayDate,
  holidayDateAgain,
  holidayYear,
  flag,
}) => {
  const [selectedValue, setSelectedValue] = useState(dayjs());

  const holidayFullDate = useMemo(() => {
    if (holidayDateAgain) {
      //문자열로 변환
      const stringFullDate = holidayDateAgain.toString();

      //년, 월, 일 단위로 자르기
      const getHolidayYear = stringFullDate.slice(0, 4);
      const getHolidayMonth = stringFullDate.slice(4, 6);
      const getHolidayDate = stringFullDate.slice(6);

      //월, 일 앞의 0 자르기
      const sliceZeroFromMonth =
        getHolidayMonth.charAt(0) === "0"
          ? getHolidayMonth.slice(1)
          : getHolidayMonth;
      const sliceZeroFromDate =
        getHolidayDate.charAt(0) === "0"
          ? getHolidayDate.slice(1)
          : getHolidayDate;

      //년, 월, 일 반환 하기
      return (
        getHolidayYear + ". " + sliceZeroFromMonth + ". " + sliceZeroFromDate
      );
    }
  }, [holidayDateAgain]);

  const onSelect = () => {
    setSelectedValue(selectedValue);
  };

  if (flag) {
    return (
      <CalenderWrapper>
        <Calendar onSelect={onSelect} fullscreen={false} />
      </CalenderWrapper>
    );
  }
  return (
    <CalenderWrapper>
      <div className="site-calendar-customize-header-wrapper">
        <Calendar
          value={holidayDate}
          fullscreen={false}
          //customize-calendar-header
          headerRender={() => {
            return (
              <div>
                <Typography.Title level={4}>
                  {holidayFullDate
                    ? holidayFullDate
                    : dayjs().format("YYYY. M. D")}
                </Typography.Title>
              </div>
            );
          }}
        />
      </div>
    </CalenderWrapper>
  );
};

export default HolidayCalender;
