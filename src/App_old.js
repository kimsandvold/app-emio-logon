import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ChooseLogonMethod from "./pages/ChooseLogonMethod";
import LogonForm from "./pages/Logon";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const isAuth = false;
  console.log(process.env.NODE_ENV === "development" ? "DEV" : "PROD");
  document.title = "emio >> Logg inn"
  return (
    <Router>


      <div className="">

        <Switch>
          <Route exact path="/">
            {!isAuth ? (
              <LogonForm />
            ) : (
              <ChooseLogonMethod />
            )}
          </Route>
          <Route exact path="/marked/apps">
            <ChooseLogonMethod />
          </Route>

        </Switch>
      </div>
    </Router>
  );

}

export default App;
