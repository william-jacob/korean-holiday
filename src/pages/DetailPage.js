import React from "react";
import HolidayDetail from "../components/detail/HolidayDetail";
import { HolidayDetailData } from "../components/detail/HolidayDetailData";

const DetailPage = ({ location }) => {
  let urlSearchParams = new URLSearchParams(location.search.slice(1));
  const value = urlSearchParams.get("holiday");
  //value === 새해
  // console.log(location.search); //?holiday=새해
  // console.log(value, typeof value); //새해, string

  const { id, name, image, description } = HolidayDetailData[value];
  // description: "새해는 달력상으로 ... "
  // id: "-Qyo5MsYy"
  // image: "img/newYear.png"

  return (
    <div>
      <HolidayDetail
        name={name}
        id={id}
        image={image}
        description={description}
      />
    </div>
  );
};

export default DetailPage;
