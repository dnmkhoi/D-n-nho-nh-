import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Dashboard from "./components/backend/Dashboard";
import useToken from "./useToken";
import DanhSach from "./components/backend/DanhSach";
//import { PrivateRoute } from './PrivateRoute';

function App() {
  const { token, setToken } = useToken();

  return (
    <Router>
      <Switch>
        {/* <PrivateRoute exact path="/dashboard" component={Dashboard} /> */}
        <Route
          exact
          path="/dashboard"
          render={(props) =>
            token ? <Dashboard /> : <Login setToken={setToken} />
          }
        />
        <Route
          exact
          path="/danhmuc"
          render={(props) =>
            token ? <DanhSach /> : <Login setToken={setToken} />
          }
        />
        <Route
          path="/login"
          render={(props) =>
            token ? <Redirect to="/dashboard" /> : <Login setToken={setToken} />
          }
        />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
