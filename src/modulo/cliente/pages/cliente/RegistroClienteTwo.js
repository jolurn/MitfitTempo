import React, { useContext, useRef, useState } from "react";
import LogoYServicios from "../../context/LogoYServicios";
import ClienteNavbar from "./../../componentes/clienteNavbar";
import ClienteFooter from "../../componentes/ClienteFooter";
import Swal from "sweetalert2";
import {
  getClientes,
  postClienteTwo,
  postUploadImagenByCliente,
} from "../../../../services/clientesService";
import { withRouter } from "react-router-dom";
import { buscarOneUser } from "../../../../services/authService";
import IndexContext from "../../context/IndexContext";
const formularioVacio = {
  usuarios: "",
  fechaNacimiento: "",
  distrito: "",
  fotoCliente: "",
};

const RegistroClienteTwo = ({ history }) => {
  const [formulario, setFormulario] = useState({ ...formularioVacio });
  const clienteFotoRef = useRef();
  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };
  const { ClientLogin } = useContext(IndexContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    buscarOneUser(ClientLogin).then((rpta) => {
      if (rpta.data) {
        const usuUsuarioEncontrado = rpta.data;
        const newFormulario = { ...formulario };
        newFormulario.fotoCliente =
          "img/" + clienteFotoRef.current.files[0].name;
        newFormulario.usuarios = { ...usuUsuarioEncontrado[0] };
        postClienteTwo(newFormulario).then((rxpta) => {
          if (rxpta.data) {
            getClientes().then((rpt) => {
              rpt.data.find((client) => {
                if (+client.usuarios.id === +newFormulario.usuarios.id) {
                  console.log(client.id);
                  postUploadImagenByCliente(
                    clienteFotoRef.current.files[0],
                    client.id
                  ).then((rpta2) => {
                    if (rpta2.data) {
                      history.push("/cliente/oferta");
                      setFormulario(formularioVacio);
                      Swal.fire({
                        text: "Cliente registrado correctamente, puede hacer Login",
                        icon: "success",
                        timer: 2000,
                      });
                    }
                  });
                }
              });
            });
          }
        });
      }
    });
  };
  return (
    <>
      <div className="container-fluid client__body">
        <header className="blog-header py-3">
          <LogoYServicios />
        </header>
        <ClienteNavbar />

        <div className="container mb-4">
          <div className="col-md-12">
            <div className="row ">
              <div className="card border-light col-md-12 ">
                <div className="card-header col-md-12">
                  Registro de Cliente Paso 2
                </div>
                <div className="card-body">
                  {/* <h5 class="card-title">Light card title</h5> */}
                  <form onSubmit={handleSubmit}>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label for="input__Username">Fecha Nacimiento</label>
                        <input
                          type="date"
                          className="form-control"
                          id="input__fechaNacimiento"
                          placeholder="Ejm: 2021-07-24"
                          value={formulario.fechaNacimiento}
                          name="fechaNacimiento"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label for="input_Nombre">Distrito</label>
                        <input
                          type="text"
                          className="form-control"
                          id="input_distrito"
                          placeholder="Ejm: san Juan de Lurigancho"
                          value={formulario.distrito}
                          name="distrito"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <div class="input-group-prepend">
                          <label for="input__fotoPerfil">Foto</label>
                        </div>
                        <div class="custom-file">
                          <input
                            type="file"
                            ref={clienteFotoRef}
                            class="custom-file-input"
                            id="inputGroupFile01"
                          />
                          <label
                            class="custom-file-label"
                            for="inputGroupFile01"
                          >
                            Elija el archivo
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="form-group d-flex flex-row-reverse">
                      <button className="btn btn__mostaza" type="submit">
                        Registrar
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12"></div>
        </div>
        <ClienteFooter />
      </div>
    </>
  );
};

export default withRouter(RegistroClienteTwo);
