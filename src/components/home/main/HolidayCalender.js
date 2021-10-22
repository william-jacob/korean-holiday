import React, { useState } from "react";
import { Calendar } from "antd";
import "antd/dist/antd.css";
import styled from "@emotion/styled";
import moment from "moment";

const CalenderWrapper = styled.div`
  width: 500px;
  height: 500px;
`;

const HolidayCalender = ({
  currentDate,
  onSelectCalenderDate,
  calenderDate,
  onClickDate,
  flag,
}) => {
  const [value, setValue] = useState(moment());
  const [state, setState] = useState(moment());

  const onSelect = () => {
    // console.log(flag, currentDate);
    // setState(flag ? state : currentDate);
  };

  const onPanelChange = () => {
    // 날짜 외 나머지 선택시 이벤트
    console.log("b");
  };

  return (
    <CalenderWrapper>
      <Calendar
        // value={flag ? state : currentDate} //prop이름이 반드시 value여야됨
        // state={state}
        // onSelectCalenderDate={() => onSelectCalenderDate()}
        // onSelect={flag ? onSelect : () => onClickDate()}
        onSelect={onSelect} //이것만 있으면 되는건가
        // onPanelChange={onPanelChange}
        fullscreen={false}
      />
    </CalenderWrapper>
  );
};

export default HolidayCalender;
