import "./App.css";
import ShowData from "./components/ShowData";

function App() {
  return (
    <div>
      <ShowData num1={12} num2={43} sign={"-"} heading={"add two numbers"} />
    </div>
  );
}

export default App;
