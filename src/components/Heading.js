import React from "react";
import Container from "./Container";

export default function Heading({ headings }) {
  return (
    <Container>
      <h1>{headings}</h1>
    </Container>
  );
}
