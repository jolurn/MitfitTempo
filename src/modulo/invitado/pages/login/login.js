import React, { useState, useContext } from "react";
import { Link, withRouter } from "react-router-dom";
import Swal from "sweetalert2";
import { postLogin } from "../../../../services/authService";
import { getEmpleadoByIdUsu } from "../../../../services/colaboradorService";
import AuthContext from "../../context/authContext";
import ColaboradorContext from "../../context/ColaboradorContext";
import Colaborador from "../../../../img/colaborador.png";

const Login = ({ history }) => {
  const [formulario, setFormulario] = useState({
    correo: "",
    password: "",
  });
  const { setUsulogin } = useContext(ColaboradorContext);

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };
  const { iniciarSesionContext } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    postLogin(formulario).then((rpta) => {
      if (rpta.data.ok) {
        if (rpta.data.usu_tipo === "colaborador") {
          setUsulogin(rpta.data.id);
          getEmpleadoByIdUsu(rpta.data.id).then((rta) => {
            if (rta.data.profesion !== "") {
              //informar la contexto que hemos iniciado sesion
              iniciarSesionContext(rpta.data.token);
              history.push("/invitado/colaborador");
            } else {
              Swal.fire({
                text: "Usted no es un Colaborador",
                icon: "error",
                timer: 2000,
              });
            }
          });
        } else {
          Swal.fire({
            text: "Usted no es un Usuario",
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
    <>
      <main className="container-fluid cuerpo_colaborador">
        <div className="row justify-content-center align-items-center colborador_login">
          <div className="col-md-4">
            <div className="card formulario__login">
              <div className="card-body">
                <div className="d-flex justify-content-center">
                  <img src={Colaborador} className="logo_login_colaborador" />
                </div>
                <br />
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="" className="form-label">
                      Email :
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="correo"
                      value={formulario.correo}
                      onChange={handleChange}
                      placeholder="correo..."
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="" className="form-label">
                      Password :
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      onChange={handleChange}
                      value={formulario.password}
                      placeholder="password..."
                    />
                  </div>
                  <button type="submit" className="btn btn-azul-login">
                    Acceso
                  </button>
                  <Link
                    className="btn ml-2 btn-outline-danger"
                    to="/"
                    type="button"
                  >
                    Salir
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default withRouter(Login);
