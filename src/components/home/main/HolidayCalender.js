import React, { useState } from "react";
import { Calendar } from "antd";
import "antd/dist/antd.css";
import moment from "moment";
import styled from "styled-components";

const CalenderWrapper = styled.div`
  width: 500px;
  height: 500px;
`;

const HolidayCalender = () => {
  const [value, setValue] = useState(moment("2021-01-01")); //기본값: 현재 날짜

  const onSelect = () => {
    //날짜 선택시 이벤트
    setValue(moment("20160101")); //일수 클릭할때
    setValue(moment("2016-05")); //년도 바꿀때
    // 사용자가 클릭한 날짜 넣기
    //사용자가 날짜 선택시 파란색으로 됨
  };

  const onPanelChange = () => {
    // 날짜 외 나머지 선택시 이벤트
    console.log("b");
  };

  return (
    <CalenderWrapper>
      <Calendar
        value={value}
        onSelect={onSelect}
        onPanelChange={onPanelChange}
        fullscreen={false}
      />
    </CalenderWrapper>
  );
};

export default HolidayCalender;
