import React, { useState, useEffect } from "react";
import axios from "axios";
import Holiday from "./Holiday";

const Holidays = () => {
  const [data, setData] = useState(null);
  const [year, setYear] = useState(new Date().getFullYear());

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

  return (
    <>
      <div>
        <span>1,2,3,4: </span>
        {data?.map((v, i) => (
          <Holiday key={v.locdate} dateName={v.dateName} date={v.locdate} />
        ))}
      </div>
    </>
  );
};

export default Holidays;
