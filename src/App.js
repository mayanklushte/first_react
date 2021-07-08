import "./App.css";
import Demo from "./components/Demo";
import Data from "./components/Data";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Demo />
        </Route>
        <Route path="/data" exact>
          <Data />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
