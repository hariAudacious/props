import React, { useEffect, useState } from "react";
const Main = () => {
  const [fromValue, setFormValue] = useState({});

  const getValue = (e) => {
    const { value, name } = e.target;
    setFormValue({ ...fromValue, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fromValue);
  };
  return (
    <div>
      Run
      <form onSubmit={(event) => handleSubmit(event)}>
        <input
          placeholder="Enter Your Name"
          onChange={(e) => getValue(e)}
          name="UserName"
        />
        <br />
        <input
          placeholder="Enter Your Father Name"
          onChange={(e) => getValue(e)}
          name="FatherName"
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Main;
