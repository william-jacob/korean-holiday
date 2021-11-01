import React, { useMemo } from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const ButtonWrapper = styled.span`
  display: inline-block; //span에서 padding 사용하기 위함
  padding: 5px;
  margin: 5px;
  border-radius: 10px;
  background-color: white;
`;

const Button = styled.button`
  outline: none;
  border: none;
  // width: 100%;
  background-color: white;
  color: blue;
  cursor: pointer;
`;

const Boundary = styled.span`
  border: 1px solid #304ffe;
  background-color: #304ffe;
  border-radius: 30%;
`;

const Holiday = ({ dateName, fullDate, onClickDate }) => {
  //useMemo로 값 연산 리렌더링 막기
  const monthAndDate = useMemo(() => {
    //년도 잘라냄
    const stringFullDate = fullDate.toString();
    const getMonth = stringFullDate.slice(4, 6);
    const getDate = stringFullDate.slice(6);

    //월,일 앞 숫자 0 잘라냄
    const sliceZeroFromMonth =
      getMonth.charAt(0) === "0" ? getMonth.slice(1) : getMonth;
    const sliceZeroFromDate =
      getDate.charAt(0) === "0" ? getDate.slice(1) : getDate;

    //월, 일 추가한뒤 날짜 반환
    return sliceZeroFromMonth + "월 " + sliceZeroFromDate + "일";
  }, [fullDate]);

  const setHoliday = () => {
    return (
      <ButtonWrapper>
        <Button>
          <Link to={{ pathname: "/detail", search: `?holiday=${dateName}` }}>
            {dateName}
          </Link>
        </Button>
        <Boundary></Boundary>
        <Button onClick={() => onClickDate(fullDate)}>{monthAndDate}</Button>
      </ButtonWrapper>
    );
  };

  //해당 날마다 줄바꿈을 넣어 재배치
  const dividDays = ["어린이날", "광복절", "개천절"];
  for (let i = 0; i < dividDays.length; i++) {
    if (dateName === dividDays[i]) {
      return (
        <>
          <br />
          {setHoliday()}
        </>
      );
    }
  }

  //1월1일, 기독탄신일 => 새해, 크리스마스 로 이름 교체
  if (dateName === "1월1일" || dateName === "신정") {
    dateName = "새해";
    return <>{setHoliday()}</>;
  }
  if (dateName === "기독탄신일") {
    dateName = "크리스마스";
    return <>{setHoliday()}</>;
  }

  return <>{setHoliday()}</>;
};

export default Holiday;
