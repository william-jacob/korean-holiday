import React, { useState, useEffect } from "react";
import axios from "axios";
import dayjs from "dayjs";
import shortid from "shortid";
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
  const [holidayDate, setHolidayDate] = useState(null);
  const [holidayDateAgain, setHolidayDateAgain] = useState(null);
  const [flag, setFlag] = useState(false); // true, false 를 주는 flag변수

  const url = `/getHoliDeInfo?serviceKey=${process.env.REACT_APP_API_KEY}&&_type=json&solYear=${holidayYear}&numOfRows=100`;

  useEffect(() => {
    //바로 return 해주면 안되네
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

    //년도가 바뀔때마다 다시 불러옴
    //eslint-disable-next-line
  }, [holidayYear]);

  const onClickDate = (selectedDate) => {
    setHolidayDate(dayjs(selectedDate?.toString()));
    setHolidayDateAgain(selectedDate);
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
            key={shortid.generate()}
            dateName={v.dateName}
            fullDate={v.locdate}
            onClickDate={onClickDate}
          />
        ))}
      </div>

      <HolidayCalender
        holidayDate={holidayDate}
        holidayDateAgain={holidayDateAgain}
        flag={flag}
      />

      <Button onClick={() => setFlag(() => !flag)}>
        {flag ? "날짜 버튼 활성화 하기" : "달력 버튼 활성화 하기"}
      </Button>
    </>
  );
};

export default Holidays;
