import React, { useState } from "react";
import Calculate from "./Calculate";

const Form = () => {
  const [num1, setnum1] = useState("");
  const [num2, setnum2] = useState("");
  const [date, setdate] = useState("");

  function num1handler(event) {
    setnum1(() => {
      let data = parseInt(event.target.value);
      return data;
    });
  }
  function num2handler(event) {
    setnum2(() => {
      let data = parseInt(event.target.value);
      return data;
    });
  }
  function datehandler(event) {
    setdate(() => {
      return event.target.value;
    });
  }

  return (
    <div>
      <form>
        <label>Number 1:</label>
        <br />
        <input type="number" onChange={num1handler} />
        <br />
        <label>Number 2:</label>
        <br />
        <input type="number" onChange={num2handler} />
        <br />
        <label>Date</label>
        <br />
        <input type="date" onChange={datehandler} />
        <br />

        <button type="submit">Calculate</button>
      </form>
      <Calculate num1={num1} num2={num2} date={date} />
    </div>
  );
};

export default Form;
