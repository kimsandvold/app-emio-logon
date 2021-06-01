import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import ChooseLogonMethod from "./pages/ChooseLogonMethod";
import LogonForm from "./pages/Logon";

function App() {
  return (
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Choose method</Link>
          </li>
          <li>
            <Link to="/logon">Logon</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/">
          <ChooseLogonMethod />
        </Route>
        <Route exact path="/logon">
          <LogonForm />
        </Route>
  
      </Switch>
    </div>
  </Router>
  );

}

export default App;
