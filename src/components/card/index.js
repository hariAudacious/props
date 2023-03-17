import React from "react";

const Card = ({ firstName = "mohit", lastName = "hgjufij" }) => {
  return (
    <div
      style={{
        border: "2px solid red",
        height: "200px",
        width: "200px",
        margin: "20px",
      }}
    >
      <h4>First Name : {firstName}</h4>
      <h4>Last Name : {lastName} </h4>
    </div>
  );
};

export default Card;
