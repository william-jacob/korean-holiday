import React from "react";

const Holiday = ({ dateName, date }) => {
  if (dateName === "어린이날") {
    return (
      <>
        <br />
        <span>5,6,7: </span>
        <span>{dateName}</span>
        <span>{date}</span>
      </>
    );
  }
  if (dateName === "광복절") {
    return (
      <>
        <br />
        <span>8,9,10: </span>
        <span>{dateName}</span>
        <span>{date}</span>
      </>
    );
  }
  if (dateName === "기독탄신일") {
    return (
      <>
        <br />
        <span>11,12: </span>
        <span>{dateName}</span>
        <span>{date}</span>
      </>
    );
  }
  return (
    <>
      <span>{dateName}</span>
      <span>{date}</span>
    </>
  );
};

export default Holiday;
