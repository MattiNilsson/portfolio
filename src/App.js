import './App.scss';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Home from "./views/Home";

import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route to="/" exact component={Home}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
