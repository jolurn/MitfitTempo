import React from "react";
import { Switch, Route } from "react-router-dom";
import IndexState from "./context/indexState";
import Index from "./pages/index/index";
import Oferta from "./pages/ofertas/oferta";
import AllOffers from "./pages/ofertas/allOffers";
import "./../../css/cliente.css";
import RegistroCliente from "./pages/cliente/RegistroCliente";
import ClientePeril from "./pages/cliente/Perfil";
import AuthState from "./context/authState";
import PrivateRouteCliente from "../../PrivateRouterCliente";
import RegistroClienteTwo from "./pages/cliente/RegistroClienteTwo";
const ClienteRouter = () => {
  return (
    <AuthState>
      <IndexState>
        <Switch>
          <Route path="/cliente/index">
            <Index />
          </Route>
          <Route path="/cliente/allOffers">
            <AllOffers />
          </Route>
          <PrivateRouteCliente path="/cliente/oferta">
            <Oferta />
          </PrivateRouteCliente>
          <Route path="/cliente/registro">
            <RegistroCliente />
          </Route>
          <Route path="/cliente/registrotwo">
            <RegistroClienteTwo />
          </Route>
          <Route path="/cliente/perfil">
            <ClientePeril />
          </Route>
        </Switch>
      </IndexState>
    </AuthState>
  );
};

export default ClienteRouter;
