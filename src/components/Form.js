import React, { useState } from "react";

const Form = ({ demo }) => {
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

  function formSubmit() {
    const data = {
      num1: num1,
      num2: num2,
      date: date,
    };

    demo(data);
  }

  return (
    <div>
      <form onSubmit={formSubmit}>
        <label>Number 1:</label>
        <br />
        <input type="number" value={num1} onChange={num1handler} />
        <br />
        <label>Number 2:</label>
        <br />
        <input type="number" value={num2} onChange={num2handler} />
        <br />
        <label>Date</label>
        <br />
        <input type="date" value={date} onChange={datehandler} />
        <br />

        <button type="submit">Calculate</button>
      </form>
    </div>
  );
};

export default Form;
