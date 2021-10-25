import React, { useState, useEffect } from "react";
import axios from "axios";
import dayjs from "dayjs";
import styled from "@emotion/styled";

import HolidayYear from "./HolidayYear";
import Holiday from "./Holiday";
import HolidayCalender from "./HolidayCalender";

const Button = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const Holidays = () => {
  const [holidayData, setHolidayData] = useState(null);
  const [holidayYear, setHolidayYear] = useState(new Date().getFullYear());
  const [currentDate, setCurrentDate] = useState(null);
  const [flag, setFlag] = useState(false); // true, false 를 주는 조건 역할

  const url = `/getHoliDeInfo?serviceKey=${process.env.REACT_APP_API_KEY}&&_type=json&solYear=${holidayYear}&numOfRows=100`;

  useEffect(() => {
    const getHolidaysData = async () => {
      try {
        const response = await axios.get(url);
        const { item } = response.data.response.body.items;
        setHolidayData(item); //item이 배열 이고 이 배열안에 객체들이 존재
      } catch (e) {
        alert(e);
      }
    };
    getHolidaysData();

    //eslint-disable-next-line
  }, [holidayYear]);

  const onClickDate = (selectedDate) => {
    setCurrentDate(dayjs(selectedDate?.toString()));
  };

  const onSelectCalenderDate = (a) => {
    console.log(a);
  };

  const onPlusAYear = () => {
    setHolidayYear(parseInt(holidayYear) + 1);
  };
  const onMinusAYear = () => {
    setHolidayYear(parseInt(holidayYear) - 1);
  };

  return (
    <>
      <HolidayYear
        holidayYear={holidayYear}
        onPlusAYear={onPlusAYear}
        onMinusAYear={onMinusAYear}
      />
      <div>
        {holidayData?.map((v, i) => (
          <Holiday
            key={v.locdate}
            dateName={v.dateName}
            fullDate={v.locdate}
            onClickDate={onClickDate}
          />
        ))}
      </div>
      <Button onClick={() => setFlag(() => !flag)}>
        {flag ? "날짜 버튼 활성화 하기" : "달력 버튼 활성화 하기"}
      </Button>
      <HolidayCalender
        currentDate={currentDate}
        onSelectCalenderDate={onSelectCalenderDate}
        holidayYear={holidayYear}
        flag={flag}
      />
    </>
  );
};

export default Holidays;
