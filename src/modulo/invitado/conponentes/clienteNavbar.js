import React from "react";
import { Link } from "react-router-dom";

const clientenavbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar__colaborador">
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
              {/* <Link
                className="nav-link active"
                aria-current="page"
                to="/invitado/colaborador"
              >
                Home
              </Link> */}
              <Link className="nav-link" to="#">
                Físicamente Fuerte, Mentalmente Indestructible
              </Link>
              {/* <Link className="nav-link" to="#">
                Editar Perfil
              </Link> */}
              {/* <Link
                className="nav-link"
                to="/cliente/allOffers"
                tabIndex="-1"
                aria-disabled="true"
              >
                Ofertas de Profesionales
              </Link> */}
            </div>
          </div>
        </div>
      </nav>
      {/* <Switch>
        <Route path="/oferta" component={Oferta} />
        <Route path="/index" component={Index} />
      </Switch> */}
    </>
  );
};

export default clientenavbar;
