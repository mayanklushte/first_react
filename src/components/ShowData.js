import "./ShowData.css";
import Form from "./Form";

import Container from "./Container";
import React from "react";

function ShowData() {
  function demo(data) {
    let r_func = data;
    let { num1, num2, date } = r_func;
    console.log(num1, num2, date);
  }

  return (
    <Container className="data">
      <Form demo={demo}></Form>
    </Container>
  );
}

export default ShowData;
