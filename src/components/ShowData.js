import "./ShowData.css";

function ShowData({ num1, num2 }) {
  return (
    <div className="container">
      <h1>Addition of Two Numbers</h1>
      Result: <h5>{num1 + num2}</h5>
    </div>
  );
}

export default ShowData;
