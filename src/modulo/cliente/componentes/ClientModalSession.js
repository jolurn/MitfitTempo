import React, { useState, useContext } from "react";
import { MDBContainer, MDBModal, MDBModalBody, MDBModalHeader } from "mdbreact";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { postLoginCliente } from "../../../services/authServiceCliente";
import AuthContext from "../context/authContext";
import Swal from "sweetalert2";
import IndexContext from "../context/IndexContext";
import { getClientes } from "../../../services/clientesService";

const ClientModalSession = ({
  setMostrarModalSession,
  mostrarModalSession,
  history,
}) => {
  const [formulario, setFormulario] = useState({
    correo: "",
    password: "",
  });

  const { setObjClienteLogin, setClientlogin } = useContext(IndexContext);
  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };
  const { iniciarSesionContext } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    postLoginCliente(formulario).then((rpta) => {
      if (rpta.data.ok) {
        if (rpta.data.usu_tipo === "cliente") {
          getClientes().then((respta) => {
            if (respta.data) {
              setClientlogin(rpta.data.id);
              if (respta.data.length !== 0) {
                respta.data.find((rpt) => {
                  setObjClienteLogin(rpt);
                  if (rpt.usuarios.id === +rpta.data.id) {
                    iniciarSesionContext(rpta.data.token);
                    history.push("/cliente/oferta");
                    setMostrarModalSession(false);
                  } else {
                    history.push("/cliente/registrotwo");
                    // Swal.fire({
                    //   text: "Usted necesita hacer el ultimo paso",
                    //   icon: "success",
                    //   timer: 2000,
                    // });
                  }
                });
              } else {
                history.push("/cliente/registrotwo");
              }
            }
          });
        } else {
          Swal.fire({
            text: "Usted no está registrado como Cliente",
            icon: "error",
            timer: 2000,
          });
        }
      } else {
        Swal.fire({
          text: "Email o contraseña es incorrecta",
          icon: "error",
          timer: 2000,
        });
      }
    });
  };

  return (
    <MDBContainer>
      <MDBModal
        isOpen={mostrarModalSession}
        toggle={() => setMostrarModalSession(false)}
      >
        <MDBModalHeader toggle={() => setMostrarModalSession(false)}>
          <i className="fas fa-key"></i> Iniciar Sesión / Regístrate
        </MDBModalHeader>
        <MDBModalBody>
          <div className="col-md-12">
            <form className="formulario" onSubmit={handleSubmit}>
              <div className="form-group">
                <label for="exampleInputEmail1">Usuario</label>
                <input
                  type="text"
                  className="form-control"
                  name="correo"
                  value={formulario.correo}
                  onChange={handleChange}
                  placeholder="Ejm: jramosn@uni.edu.pe"
                />
                <small id="emailHelp" className="form-text text-muted">
                  Nunca compartiremos su correo electrónico con nadie más.
                </small>
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={formulario.password}
                  onChange={handleChange}
                  placeholder="Contraseña"
                />
              </div>
              <button type="submit" className="btn btn__mostaza">
                Acceso
              </button>
              <Link
                className="btn btn__azul ml-2"
                to="/cliente/registro"
                role="button"
                onClick={() => setMostrarModalSession(false)}
              >
                Regístrate
              </Link>
            </form>
          </div>
        </MDBModalBody>
      </MDBModal>
    </MDBContainer>
  );
};

export default withRouter(ClientModalSession);
