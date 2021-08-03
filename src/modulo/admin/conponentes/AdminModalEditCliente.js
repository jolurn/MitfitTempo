import React, { useEffect, useRef, useState } from "react";
import { MDBContainer, MDBModal, MDBModalBody, MDBModalHeader } from "mdbreact";
import {
  getClientes,
  postUploadImagenByCliente,
  putClienteById,
} from "../../../services/clientesService";
import Swal from "sweetalert2";
import { getUsuarioComboBoxCliente } from "../../../services/authService";
const formularioVacio = {
  usuarios: "",
  fechaNacimiento: "",
  distrito: "",
  fotoCliente: "",
};
const AdminModalEditCliente = ({
  mostrarModalEditarCliente,
  setMostrarModalEditarCliente,
  objClienteEditar,
  traerClientes,
}) => {
  const [objUsuarios, setObjUsuarios] = useState([]);
  const imagenRef = useRef();
  const [formulario, setFormulario] = useState(objClienteEditar);
  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    setFormulario({ ...objClienteEditar });
  }, [objClienteEditar]);
  useEffect(() => {
    getUsuarioComboBoxCliente().then((respuesta) => {
      setObjUsuarios(respuesta.data);
    });
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();

    const newFormulario = { ...formulario };

    if (imagenRef.current.files.length === 1) {
      newFormulario.fotoPerfil = "img/" + imagenRef.current.files[0].name;
    }

    const usuarioEncontrado = objUsuarios.find(
      (usu) => +usu.id === +formulario.usuarios.id
    );

    if (+formulario.usuarios.id !== +usuarioEncontrado.id) {
      newFormulario.usuarios = { ...usuarioEncontrado };
    }

    putClienteById(newFormulario).then((rpta) => {
      if (rpta.data) {
        if (imagenRef.current.files.length === 1) {
          getClientes().then((rpt) => {
            const clienteencontrado = rpt.data.find(
              (client) => +client.usuarios.id === +rpta.data.content.usuarios.id
            );
            if (clienteencontrado.id) {
              postUploadImagenByCliente(
                imagenRef.current.files[0],
                clienteencontrado.id
              ).then((rpta2) => {
                if (rpta2.data) {
                  setMostrarModalEditarCliente(false);
                  setFormulario(formularioVacio);
                  Swal.fire({
                    text: "Empleado fue actualizado correctamente",
                    icon: "success",
                    timer: 2000,
                  });
                  traerClientes();
                }
              });
            }
          });
        } else {
          setMostrarModalEditarCliente(false);
          setFormulario(formularioVacio);
          Swal.fire({
            text: "Empleado fue actualizado correctamente",
            icon: "success",
            timer: 2000,
          });
          traerClientes();
        }
      }
    });
  };
  return (
    <MDBContainer>
      <MDBModal
        isOpen={mostrarModalEditarCliente}
        toggle={() => setMostrarModalEditarCliente(false)}
        size="lg"
      >
        <MDBModalHeader toggle={() => setMostrarModalEditarCliente(false)}>
          Editar Cliente
        </MDBModalHeader>
        <MDBModalBody>
          {formulario ? (
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="input__usuarios">Usuario</label>
                  <select
                    className="form-control"
                    name="usuarios"
                    onChange={handleChange}
                  >
                    <option value="0">--Usuarios--</option>
                    {objUsuarios.map((rpta) => {
                      return (
                        <option key={rpta.id} value={rpta.id}>
                          {rpta.primerNombre +
                            " " +
                            rpta.segundoNombre +
                            " " +
                            rpta.apellidoPaterno +
                            " " +
                            rpta.apellidoMaterno}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="form-group col-md-6">
                  <label for="input_Nombre">Fecha Nacimiento</label>
                  <input
                    type="date"
                    className="form-control"
                    id="input_fechaNacimiento"
                    placeholder="Ejm: 2020-07-25"
                    value={formulario.fechaNacimiento}
                    name="fechaNacimiento"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="input__SegNombre">Distrito</label>
                  <input
                    type="text"
                    className="form-control"
                    id="input__distrito"
                    placeholder="Ejm: San Juan de Lurigancho"
                    value={formulario.distrito}
                    name="distrito"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group col-md-6">
                  <div class="input-group-prepend">
                    <label for="input__fotoPerfil">Foto Perfil</label>
                  </div>
                  <div class="custom-file">
                    <input
                      type="file"
                      ref={imagenRef}
                      class="custom-file-input"
                      id="inputGroupFile01"
                    />
                    <label class="custom-file-label" for="inputGroupFile01">
                      Elija el archivo
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-group d-flex flex-row-reverse">
                <button className="btn btn-palido" type="submit">
                  Guardar Cambios
                </button>
                <button
                  className="btn btn-colorado mr-2"
                  type="button"
                  onClick={() => setMostrarModalEditarCliente(false)}
                >
                  Salir
                </button>
              </div>
            </form>
          ) : null}
        </MDBModalBody>
      </MDBModal>
    </MDBContainer>
  );
};

export default AdminModalEditCliente;
