import React from "react";
import { Switch, Route } from "react-router-dom";
import "./../../css/estilos.css";
import Login from "./pages/login/login";
import Colaborador from "./pages/colaborador/colaborador";
import "./../../css/cliente.css";
import AuthState from "./context/authState";
import ColaboradorState from "./context/colaboradorState";
import PrivateRouteColaborador from "../../PrivateRouterColaborador";
const ColaboradoresRouter = () => {
  return (
    <AuthState>
      <ColaboradorState>
        <Switch>
          <Route path="/invitado/login">
            <Login />
          </Route>
          <PrivateRouteColaborador path="/invitado/colaborador">
            <Colaborador />
          </PrivateRouteColaborador>
        </Switch>
      </ColaboradorState>
    </AuthState>
  );
};

export default ColaboradoresRouter;
