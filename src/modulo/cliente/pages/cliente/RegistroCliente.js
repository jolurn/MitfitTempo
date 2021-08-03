import React, { useState } from "react";
import LogoYServicios from "../../context/LogoYServicios";
import ClienteNavbar from "./../../componentes/clienteNavbar";
import ClienteFooter from "../../componentes/ClienteFooter";
import Swal from "sweetalert2";
import { postCliente } from "../../../../services/clientesService";
import { withRouter } from "react-router-dom";
const formularioVacio = {
  username: "",
  password: "",
  primerNombre: "",
  segundoNombre: "",
  apellidoPaterno: "",
  apellidoMaterno: "",
  dni: "",
  celular: "",
  email: "",
  direccion: "",
};

const RegistroCliente = ({ history }) => {
  const [formulario, setFormulario] = useState({ ...formularioVacio });
  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postCliente(formulario).then((rpta) => {
      if (rpta.data) {
        setFormulario(formularioVacio);
        history.push("/cliente/index");
        Swal.fire({
          text: "Primer Paso realizado correctamente, haga Login por favor",
          icon: "success",
          timer: 2000,
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
                  Registro de Cliente Paso 1
                </div>
                <div className="card-body">
                  {/* <h5 class="card-title">Light card title</h5> */}
                  <form onSubmit={handleSubmit}>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label for="input__Username">Username</label>
                        <input
                          type="text"
                          className="form-control"
                          id="input__Username"
                          placeholder="Ejm: jramosn"
                          value={formulario.username}
                          name="username"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label for="input_Nombre">Password</label>
                        <input
                          type="password"
                          className="form-control"
                          id="input_Password"
                          placeholder="Ejm: ***"
                          value={formulario.password}
                          name="password"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label for="input__DNI">DNI</label>
                        <input
                          type="text"
                          minlength="8"
                          className="form-control"
                          id="input__DNI"
                          placeholder="Ejm: 84512754"
                          value={formulario.dni}
                          name="dni"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label for="input_Nombre">Primer Nombre</label>
                        <input
                          type="text"
                          className="form-control"
                          id="input_Nombre"
                          placeholder="Ejm: Jorge"
                          value={formulario.primerNombre}
                          name="primerNombre"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label for="input__SegNombre">Segundo Nombre</label>
                        <input
                          type="text"
                          className="form-control"
                          id="input__SegNombre"
                          placeholder="Ejm: Luis"
                          value={formulario.segundoNombre}
                          name="segundoNombre"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label for="input_ApPaterno">Apellido Paterno</label>
                        <input
                          type="text"
                          className="form-control"
                          id="input_ApPaterno"
                          placeholder="Ejm: Ramos"
                          value={formulario.apellidoPaterno}
                          name="apellidoPaterno"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label for="input__ApMaterno">Apellido Materno</label>
                        <input
                          type="text"
                          className="form-control"
                          id="input__ApMaterno"
                          placeholder="Ejm: Nolasco"
                          value={formulario.apellidoMaterno}
                          name="apellidoMaterno"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label for="input__Correo">Correo</label>
                        <input
                          type="text"
                          className="form-control"
                          id="input__Correo"
                          placeholder="Ejm: jramosn@uni.edu.pe"
                          value={formulario.email}
                          name="email"
                          onChange={handleChange}
                        />
                      </div>
                      {/* <div className="form-group col-md-6">
                        <label for="exampleFormControlFile1">Foto</label>
                        <input
                          type="file"
                          class="form-control-file"
                          value={formulario.foto}
                          name="foto"
                          onChange={handleChange}
                        ></input>

                      </div> */}
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label for="input__Celular">Celular</label>
                        <input
                          type="text"
                          className="form-control"
                          minlength="9"
                          id="input__Celular"
                          placeholder="Ejm: 970318010"
                          value={formulario.celular}
                          name="celular"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label for="input__Direccion">Dirección</label>
                        <input
                          type="text"
                          className="form-control"
                          id="input__Direccion"
                          placeholder="Ejm: Mz f3 lt4 10 de Octubre II Etapa San Juan de Lurigancho Lima"
                          value={formulario.direccion}
                          name="direccion"
                          onChange={handleChange}
                        />
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

export default withRouter(RegistroCliente);
