import "./ShowData.css";
import Heading from "./Heading";
import Container from "./Container";
import React, { useState } from "react";

function ShowData({ num1, num2, heading }) {
  const [headings, setHeading] = useState(heading);
  const [num, setNum] = useState(num1);
  function headingChange() {
    setNum(23);
    setHeading("updated");
    console.log("cliked");
  }

  return (
    <Container className="data">
      <Heading headings={headings} />
      Result: <h5>{num + num2}</h5>
      <button onClick={headingChange}>Change Heading</button>
    </Container>
  );
}

export default ShowData;
