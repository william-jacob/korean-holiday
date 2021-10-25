import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

import Holiday from "./Holiday";
import HolidayCalender from "./HolidayCalender";

const Holidays = () => {
  const [data, setData] = useState(null);
  const [year, setYear] = useState(new Date().getFullYear());
  const [currentDate, setCurrentDate] = useState(null);
  const [flag, setFlag] = useState(false);

  const url = `/getHoliDeInfo?serviceKey=${process.env.REACT_APP_API_KEY}&&_type=json&solYear=${year}&numOfRows=50`;

  useEffect(() => {
    const getHolidaysData = async () => {
      try {
        const response = await axios.get(url);
        const { item } = response.data.response.body.items;
        // console.log(item);
        setData(item); //item이 배열 이고 이 배열안에 객체들이 존재
      } catch (e) {
        alert(e);
      }
    };
    getHolidaysData();

    //eslint-disable-next-line
  }, []);

  const onClickDate = (selectedDate) => {
    setCurrentDate(moment(selectedDate?.toString()));
  };

  const onSelectCalenderDate = (a) => {
    console.log(a);
  };

  return (
    <>
      <div>
        {data?.map((v, i) => (
          <Holiday
            key={v.locdate}
            dateName={v.dateName}
            fullDate={v.locdate}
            onClickDate={onClickDate}
          />
        ))}
        <button onClick={() => setFlag(() => !flag)}>
          {flag ? "달력 버튼 활성화 하기" : "날짜 버튼 활성화 하기"}
        </button>
        <HolidayCalender
          currentDate={currentDate}
          onSelectCalenderDate={onSelectCalenderDate}
          // calenderDate={calenderDate}
          // onClickDate={onClickDate}
          flag={flag}
        />
      </div>
    </>
  );
};

export default Holidays;
