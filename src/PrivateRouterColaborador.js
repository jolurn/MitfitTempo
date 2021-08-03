import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import AuthContext from "./modulo/invitado/context/authContext";

const PrivateRouteColaborador = (props) => {
  const { autenticado, cargando } = useContext(AuthContext);

  return !cargando ? (
    autenticado ? (
      <Route path={props.path}>{props.children}</Route>
    ) : (
      <Redirect to="/" />
    )
  ) : localStorage.getItem("token") ? (
    <div>Cargando...</div>
  ) : (
    <Redirect to="/" />
  );
};

export default PrivateRouteColaborador;
