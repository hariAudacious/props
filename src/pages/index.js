import React from "react";
import Card from "../components/card";
import { myData } from "../constant/index";
const Main = () => {
  console.log(myData);
  return (
    <div style={{ display: "flex" }}>
      {myData.map((value) => (
        <div>
          <Card firstName={value.fistName} lastName={value.lastName} />
        </div>
      ))}
    </div>
  );
};

export default Main;
