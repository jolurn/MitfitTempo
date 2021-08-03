import React, { useContext, useEffect, useState } from "react";
import logo from "./../../../img/logo.png";
import img from "./../../../img/perfil.jpg";
import { MDBBtn } from "mdbreact";
// import IndexContext from "../context/IndexContext";
import AuthContext from "../context/authContext";
import { getEmpleado } from "../../../services/empleadoService";
const LogoYServicios = () => {
  // const { setMostrarModalSession } = useContext(IndexContext);
  const { ...state } = useContext(AuthContext);
  const { setState } = useContext(AuthContext);

  const [objEmpleado, setObjEmpleado] = useState();
  useEffect(() => {
    getEmpleado().then((rpta) => {
      if (rpta.data) {
        const obj = rpta.data.find((empl) => +empl.usuarios.id === +state.id);
        setObjEmpleado(obj);
      }
    });
  }, []);

  return (
    <>
      <div className="row d-flex justify-content-between align-items-center">
        <div className="col-4 ">
          <img
            src={objEmpleado ? objEmpleado.fotoPerfil : img}
            alt=""
            className="logo_perfil"
          />
        </div>
        <div className="col-4 text-center">
          <img src={logo} alt="" className="logo" />
        </div>
        <div className="col-4 d-flex flex-row-reverse">
          <MDBBtn
            onClick={() => {
              localStorage.removeItem("token");
              setState({
                autenticado: false,
                usu_nom: null,
                token: null,
                cargando: false,
              });
            }}
            className="btn ml-2 btn__hex"
          >
            <i class="fas fa-sign-out-alt"></i>
          </MDBBtn>
          {/* <MDBBtn onClick="" className="btn ml-2 btn__mostaza">
            <i className="fas fa-shopping-cart"></i>
          </MDBBtn> */}
          {/* {nombreUsuario ? (
            <MDBBtn
              onClick={() => {
                localStorage.removeItem("token");
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
            </MDBBtn>
          ) : (
            <MDBBtn onClick="" className="btn ml-2 btn__azul">
              <i className="fas fa-user-tie"></i>
            </MDBBtn>
          )} */}

          <div className="align-self-center nombre__usuario">
            <h6>
              {objEmpleado
                ? objEmpleado.usuarios.primerNombre +
                  " " +
                  objEmpleado.usuarios.segundoNombre +
                  " " +
                  objEmpleado.usuarios.apellidoPaterno +
                  " " +
                  objEmpleado.usuarios.apellidoMaterno
                : "nadie"}
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogoYServicios;
