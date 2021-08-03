import React, { useState } from "react";
import { MDBContainer, MDBModal, MDBModalBody, MDBModalHeader } from "mdbreact";
import { postUsuario } from "../../../services/authService";
import Swal from "sweetalert2";
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
  usu_tipo: "",
};
const AdminModalCrearUsuario = ({
  mostrarModalCrearUsuario,
  setMostrarModalCrearUsuario,
  traerUsuario,
}) => {
  const [formulario, setFormulario] = useState({ ...formularioVacio });
  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    postUsuario(formulario).then((rpta) => {
      if (rpta.data) {
        setMostrarModalCrearUsuario(false);
        setFormulario(formularioVacio);
        Swal.fire({
          text: "Empleado registrado correctamente",
          icon: "success",
          timer: 2000,
        });
        traerUsuario();
      }
    });
  };

  return (
    <MDBContainer>
      <MDBModal
        isOpen={mostrarModalCrearUsuario}
        toggle={() => setMostrarModalCrearUsuario(false)}
        size="lg"
      >
        <MDBModalHeader toggle={() => setMostrarModalCrearUsuario(false)}>
          Crear Usuario
        </MDBModalHeader>
        <MDBModalBody>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="input__DNI">Username</label>
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
                <label for="input_Nombre">password</label>
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
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="input__Celular">Celular</label>
                <input
                  type="text"
                  minlength="9"
                  className="form-control"
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
            <div className="form-row">
              <div class="form-group col-md-6">
                <label class="mr-sm-2" for="inlineFormCustomSelect">
                  Preference
                </label>
                <select
                  class="custom-select mr-sm-2"
                  value={formulario.usu_tipo}
                  name="usu_tipo"
                  onChange={handleChange}
                >
                  <option selected>Escoger...</option>
                  <option value="cliente">Cliente</option>
                  <option value="administrador">Administrador</option>
                  <option value="colaborador">Colaborador</option>
                </select>
              </div>
            </div>
            <div className="form-group d-flex flex-row-reverse">
              <button className="btn btn__mostaza" type="submit">
                Registrar
              </button>
            </div>
          </form>
        </MDBModalBody>
      </MDBModal>
    </MDBContainer>
  );
};

export default AdminModalCrearUsuario;
