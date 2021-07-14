import "./App.css";
import ShowData from "./components/ShowData";

function App() {
  return (
    <div>
      <ShowData num1={12} num2={43} sign={"-"} heading={"add two numbers"} />
      <ShowData num1={50} num2={100} sign={"+"} heading={"add"} />
      <ShowData num1={1000} num2={3000} sign={"*"} heading={"add"} />
      <ShowData num1={10000} num2={30000} sign={"/"} heading={"add"} />
    </div>
  );
}

export default App;
