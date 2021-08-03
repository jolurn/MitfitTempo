import React, { useContext, useEffect, useState } from "react";
import logo from "./../../../img/logo.png";
import { MDBBtn } from "mdbreact";
import IndexContext from "./IndexContext";
import AuthContext from "./authContext";
import { Link, withRouter } from "react-router-dom";
const LogoYServicios = ({ history }) => {
  const { setMostrarModalSession, setMostrarModalClientCarrito } =
    useContext(IndexContext);
  const { ...state } = useContext(AuthContext);
  const { setState } = useContext(AuthContext);

  const [nombreUsuario, setNombreUsuario] = useState();

  useEffect(() => {
    setNombreUsuario(state.usu_nom);
  }, [state]);
  return (
    <>
      <div className="row d-flex justify-content-between align-items-center">
        <div className="col-4 ">
          <div className="input-group">
            {/* <input
              type="text"
              className="form-control col-5"
              placeholder="Hora Inicio de Ofertada"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            /> */}
            <Link
              className="btn btn-outline-secondary ml-2 btn__azul"
              to="/invitado/login"
              type="button"
              id="button-addon2"
            >
              <i class="fas fa-briefcase"></i>
            </Link>
          </div>
        </div>
        <div className="col-4 text-center">
          <img src={logo} alt="" className="logo" />
        </div>
        <div className="col-4 d-flex flex-row-reverse">
          <MDBBtn
            onClick={() => setMostrarModalClientCarrito(true)}
            className="btn ml-2 btn__mostaza"
          >
            <i className="fas fa-shopping-cart"></i>
          </MDBBtn>
          {nombreUsuario ? (
            <Link
              type="button"
              onClick={() => {
                localStorage.removeItem("token");
                history.push("/cliente/index");
                setState({
                  autenticado: false,
                  usu_nom: null,
                  token: null,
                  cargando: false,
                });
              }}
              className="btn ml-2 btn__azul"
            >
              <i class="fas fa-sign-out-alt"></i>
            </Link>
          ) : (
            <MDBBtn
              onClick={() => setMostrarModalSession(true)}
              className="btn ml-2 btn__azul"
            >
              <i className="fas fa-user-tie"></i>
            </MDBBtn>
          )}

          <div className="align-self-center nombre__usuario">
            <h6>{nombreUsuario}</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(LogoYServicios);
