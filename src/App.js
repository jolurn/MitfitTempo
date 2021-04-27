import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AdminRouter from "./modulo/admin/AdminRouter";
// import "bootstrap/dist/css/bootstrap.min.css";
// import PrivateRoute from "./PrivateRoute";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/admin">
          <AdminRouter />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
