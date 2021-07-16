import React from "react";
import Container from "./Container";

const Calculate = ({ num1, num2, date }) => {
  return (
    <Container>
      result: {num1 + num2}
      <br />
      date: {date}
      <br />
    </Container>
  );
};

export default Calculate;
