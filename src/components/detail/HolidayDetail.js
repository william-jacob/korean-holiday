import React from "react";

const HolidayDetail = ({ id, name, image, description }) => {
  return (
    <>
      <h2>{name}</h2>
      <img src={image} alt={name} width="300px" height="200px"></img>
      <p>{description}</p>
    </>
  );
};

export default HolidayDetail;
