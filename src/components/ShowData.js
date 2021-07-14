import "./ShowData.css";
import Heading from "./Heading";
import Container from "./Container";

function ShowData({ num1, num2, heading }) {
  return (
    <Container className="data">
      <Heading headings={heading} />
      Result: <h5>{num1 + num2}</h5>
    </Container>
  );
}

export default ShowData;
