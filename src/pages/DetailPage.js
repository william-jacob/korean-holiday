import React from "react";
import HolidayDetail from "../components/detail/HolidayDetail";
import { HolidayDetailData } from "../components/detail/HolidayDetailData";

const DetailPage = ({ location }) => {
  let urlSearchParams = new URLSearchParams(location.search.slice(1));
  const value = urlSearchParams.get("holiday");
  //value === 새해
  console.log(value, typeof value);
  console.log(location.search);

  const holidayName = HolidayDetailData[value];

  return (
    <div>
      <HolidayDetail holidayName={holidayName} />
    </div>
  );
};

export default DetailPage;
