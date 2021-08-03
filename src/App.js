import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import AdminRouter from "./modulo/admin/AdminRouter";
import "./css/boletaImprimir.css";
import ClienteRouter from "./modulo/cliente/ClienteRouter";
import ColaboradorRouter from "./modulo/invitado/colaboradoresRouter";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/admin">
          <AdminRouter />
        </Route>
        <Route path="/cliente">
          <ClienteRouter />
        </Route>
        <Route path="/invitado">
          <ColaboradorRouter />
        </Route>
        <Route path="/">
          <Redirect to="/cliente/index" />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
