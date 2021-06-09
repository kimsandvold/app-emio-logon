import React, { useContext, createContext, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/Main.scss';
import AuthFooter from "./components/AuthFooter";
import AuthHeader from "./components/AuthHeader";
import Contact from "./pages/Contact";
import { CheckAuth } from "./xhr/AuthApiRequests";
import MyPage from "./pages/MyPage";
import ProductInfo from "./pages/ProductInfo";
import Splash from "./pages/Splash";

const App = () => {

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    CheckAuth().finally(() => {

      setLoading(false);
    })
  }, []);

  if (loading) {
    return <Splash />;
  }
  return (
    <ProvideAuth>
      <Router>
        <div>
          <header>
            <AuthHeader />
          </header>

          <div id="sidebar-left">
            sidebar
          </div>
          <div id="main-content">
            <AuthButton />
            <ul>
              <li>
                <Link to="/contact">Kontakt oss</Link>
              </li>
              <li>
                <Link to="/products">Produkter</Link>
              </li>
              <li>
                <Link to="/mypage">Min side</Link>
              </li>
            </ul>
            <Switch>
              <Route path="/products">
                <ProductInfo />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/login">
                <LoginPage />
              </Route>
              <PrivateRoute path="/mypage">
                <MyPage />
              </PrivateRoute>
            </Switch>


          </div>
          <div className="clear"></div>

          <footer>
            <AuthFooter />
          </footer>

        </div>
      </Router>
    </ProvideAuth>
  );
}

const fakeAuth = {
  isAuthenticated: false,
  signin(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

export const authContext = createContext();

function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(authContext);
}

const useProvideAuth = () => {
  const [user, setUser] = useState(null);

  const signin = cb => {
    return fakeAuth.signin(() => {
      setUser("Pelle");
      cb();
    });
  };

  const signout = cb => {
    return fakeAuth.signout(() => {
      setUser(null);
      cb();
    });
  };

  return {
    user,
    signin,
    signout
  };
}

const AuthButton = () => {
  let history = useHistory();
  let auth = useAuth();

  return auth.user ? (
    <p>

      Welcome!{" "}
      <button
        onClick={() => {
          auth.signout(() => history.push("/"));
        }}
      >
        Sign out
      </button>

    </p>
  ) : (
    <p>You are not logged in.</p>
  );
}

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
const PrivateRoute = ({ children, ...rest }) => {
  let auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

const PublicPage = () => {
  return <h3>Public</h3>;
}

const ProtectedPage = () => {
  return <h3>Protected</h3>;
}

const LoginPage = () => {
  let history = useHistory();
  let location = useLocation();
  let auth = useAuth();

  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    auth.signin(() => {
      history.replace(from);
    });
  };

  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button onClick={login}>Log in</button>
    </div>
  );
}

export default App;
