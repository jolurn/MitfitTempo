import React, { useContext } from "react";
import { Route, Link, Switch } from "react-router-dom";
import AuthContext from "../context/authContext";

import Index from "./../pages/index/index";
import Oferta from "./../pages/ofertas/oferta";
import Perfil from "./../pages/cliente/Perfil";

const Clientenavbar = () => {
  const { ...state } = useContext(AuthContext);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar__cliente">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse d-flex justify-content-center"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/cliente/index"
              >
                Home
              </Link>
              {state.token ? (
                <Link className="nav-link" to="/cliente/perfil">
                  Perfil
                </Link>
              ) : null}
              {/* <Link className="nav-link" to="#">
                Nutricionista
              </Link> */}
              <Link
                className="nav-link"
                to={state.token ? "/cliente/oferta" : "/cliente/allOffers"}
                tabIndex="-1"
                aria-disabled="true"
              >
                Ofertas de Profesionales
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <Switch>
        <Route path="/perfil" component={Perfil} />
        <Route path="/oferta" component={Oferta} />
        <Route path="/index" component={Index} />
      </Switch>
    </>
  );
};

export default Clientenavbar;
