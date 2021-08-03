import React, { useEffect, useRef, useState } from "react";
import { MDBContainer, MDBModal, MDBModalBody, MDBModalHeader } from "mdbreact";
import {
  getEmpleado,
  postUploadImagenByEmpleadoBannerVideo,
  postUploadImagenByEmpleadoId,
  postUploadImagenByEmpleadoIdBanner,
  postUploadImagenByEmpleadoIdPerfil,
  postUploadImagenByEmpleadoIdVideo,
  postUploadImagenByEmpleadoPerfilBanner,
  postUploadImagenByEmpleadoPerfilVideo,
  putEmpleadoById,
} from "../../../services/empleadoService";
import Swal from "sweetalert2";
import { getUsuarioComboBox } from "../../../services/authService";

const formularioVacio = {
  usuarios: "",
  distrito: "",
  profesion: "",
  fotoPerfil: "",
  fotoBanner: "",
  video: "",
};
const AdminModalEditarEmpleado = ({
  mostrarModalEditarEmpleado,
  setMostrarModalEditarEmpleado,
  objEmpleadoEditar,
  traerEmpleado,
}) => {
  const [objUsuarios, setObjUsuarios] = useState([]);
  const imagenRef = useRef();
  const bannerRef = useRef();
  const videoRef = useRef();

  const [formulario, setFormulario] = useState({ ...formularioVacio });
  useEffect(() => {
    setFormulario({ ...objEmpleadoEditar });
  }, [objEmpleadoEditar]);

  useEffect(() => {
    getUsuarioComboBox().then((respuesta) => {
      setObjUsuarios(respuesta.data);
    });
  }, []);

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFormulario = { ...formulario };

    if (imagenRef.current.files.length === 1) {
      newFormulario.fotoPerfil = "img/" + imagenRef.current.files[0].name;
    }
    if (bannerRef.current.files.length === 1) {
      newFormulario.fotoBanner = "img/" + bannerRef.current.files[0].name;
    }
    if (videoRef.current.files.length === 1) {
      newFormulario.video = "video/" + videoRef.current.files[0].name;
    }

    const usuarioEncontrado = objUsuarios.find(
      (usu) => +usu.id === +formulario.usuarios.id
    );

    if (+formulario.usuarios.id !== +usuarioEncontrado.id) {
      newFormulario.usuarios = { ...usuarioEncontrado };
    }

    putEmpleadoById(newFormulario).then((rpta) => {
      if (rpta.data) {
        if (imagenRef.current.files.length === 1) {
          getEmpleado().then((rpt) => {
            const empleadoencontrado = rpt.data.find(
              (empleadito) =>
                +empleadito.usuarios.id === +rpta.data.content.usuarios.id
            );

            if (empleadoencontrado.id) {
              postUploadImagenByEmpleadoIdPerfil(
                imagenRef.current.files[0],
                empleadoencontrado.id
              ).then((rpta2) => {
                if (rpta2.data) {
                  setMostrarModalEditarEmpleado(false);
                  setFormulario(formularioVacio);
                  Swal.fire({
                    text: "Empleado fue actualizado correctamente",
                    icon: "success",
                    timer: 2000,
                  });
                  traerEmpleado();
                }
              });
            }
          });
        } else if (bannerRef.current.files.length === 1) {
          getEmpleado().then((rpt) => {
            const empleadoencontrado = rpt.data.find(
              (empleadito) =>
                +empleadito.usuarios.id === +rpta.data.content.usuarios.id
            );

            if (empleadoencontrado.id) {
              postUploadImagenByEmpleadoIdBanner(
                bannerRef.current.files[0],
                empleadoencontrado.id
              ).then((rpta2) => {
                if (rpta2.data) {
                  setMostrarModalEditarEmpleado(false);
                  setFormulario(formularioVacio);
                  Swal.fire({
                    text: "Empleado fue actualizado correctamente",
                    icon: "success",
                    timer: 2000,
                  });
                  traerEmpleado();
                }
              });
            }
          });
        } else if (videoRef.current.files.length === 1) {
          getEmpleado().then((rpt) => {
            const empleadoencontrado = rpt.data.find(
              (empleadito) =>
                +empleadito.usuarios.id === +rpta.data.content.usuarios.id
            );

            if (empleadoencontrado.id) {
              postUploadImagenByEmpleadoIdVideo(
                videoRef.current.files[0],
                empleadoencontrado.id
              ).then((rpta2) => {
                if (rpta2.data) {
                  setMostrarModalEditarEmpleado(false);
                  setFormulario(formularioVacio);
                  Swal.fire({
                    text: "Empleado fue actualizado correctamente",
                    icon: "success",
                    timer: 2000,
                  });
                  traerEmpleado();
                }
              });
            }
          });
        } else if (
          imagenRef.current.files.length === 1 &&
          bannerRef.current.files.length === 1
        ) {
          getEmpleado().then((rpt) => {
            const empleadoencontrado = rpt.data.find(
              (empleadito) =>
                +empleadito.usuarios.id === +rpta.data.content.usuarios.id
            );

            if (empleadoencontrado.id) {
              postUploadImagenByEmpleadoPerfilBanner(
                imagenRef.current.files[0],
                bannerRef.current.files[0],
                empleadoencontrado.id
              ).then((rpta2) => {
                if (rpta2.data) {
                  setMostrarModalEditarEmpleado(false);
                  setFormulario(formularioVacio);
                  Swal.fire({
                    text: "Empleado fue actualizado correctamente",
                    icon: "success",
                    timer: 2000,
                  });
                  traerEmpleado();
                }
              });
            }
          });
        } else if (
          imagenRef.current.files.length === 1 &&
          videoRef.current.files.length === 1
        ) {
          getEmpleado().then((rpt) => {
            const empleadoencontrado = rpt.data.find(
              (empleadito) =>
                +empleadito.usuarios.id === +rpta.data.content.usuarios.id
            );

            if (empleadoencontrado.id) {
              postUploadImagenByEmpleadoPerfilVideo(
                imagenRef.current.files[0],
                videoRef.current.files[0],
                empleadoencontrado.id
              ).then((rpta2) => {
                if (rpta2.data) {
                  setMostrarModalEditarEmpleado(false);
                  setFormulario(formularioVacio);
                  Swal.fire({
                    text: "Empleado fue actualizado correctamente",
                    icon: "success",
                    timer: 2000,
                  });
                  traerEmpleado();
                }
              });
            }
          });
        } else if (
          videoRef.current.files.length === 1 &&
          bannerRef.current.files.length === 1
        ) {
          getEmpleado().then((rpt) => {
            const empleadoencontrado = rpt.data.find(
              (empleadito) =>
                +empleadito.usuarios.id === +rpta.data.content.usuarios.id
            );

            if (empleadoencontrado.id) {
              postUploadImagenByEmpleadoBannerVideo(
                bannerRef.current.files[0],
                videoRef.current.files[0],
                empleadoencontrado.id
              ).then((rpta2) => {
                if (rpta2.data) {
                  setMostrarModalEditarEmpleado(false);
                  setFormulario(formularioVacio);
                  Swal.fire({
                    text: "Empleado fue actualizado correctamente",
                    icon: "success",
                    timer: 2000,
                  });
                  traerEmpleado();
                }
              });
            }
          });
        } else if (
          imagenRef.current.files.length === 1 &&
          bannerRef.current.files.length === 1 &&
          videoRef.current.files.length === 1
        ) {
          getEmpleado().then((rpt) => {
            const empleadoencontrado = rpt.data.find(
              (empleadito) =>
                +empleadito.usuarios.id === +rpta.data.content.usuarios.id
            );

            if (empleadoencontrado.id) {
              postUploadImagenByEmpleadoId(
                imagenRef.current.files[0],
                bannerRef.current.files[0],
                videoRef.current.files[0],
                empleadoencontrado.id
              ).then((rpta2) => {
                if (rpta2.data) {
                  setMostrarModalEditarEmpleado(false);
                  setFormulario(formularioVacio);
                  Swal.fire({
                    text: "Empleado fue actualizado correctamente",
                    icon: "success",
                    timer: 2000,
                  });
                  traerEmpleado();
                }
              });
            }
          });
        } else {
          setMostrarModalEditarEmpleado(false);
          setFormulario(formularioVacio);
          Swal.fire({
            text: "Empleado fue actualizado correctamente",
            icon: "success",
            timer: 2000,
          });
          traerEmpleado();
        }
      }
    });
  };
  return (
    <MDBContainer>
      <MDBModal
        isOpen={mostrarModalEditarEmpleado}
        toggle={() => setMostrarModalEditarEmpleado(false)}
        size="lg"
      >
        <MDBModalHeader toggle={() => setMostrarModalEditarEmpleado(false)}>
          Editar Empleado
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
                  <label for="input_Nombre">Distrito</label>
                  <input
                    type="text"
                    className="form-control"
                    id="input_distrito"
                    placeholder="Ejm: Comas"
                    value={formulario.distrito}
                    name="distrito"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="input__DNI">Profesión</label>
                  <select
                    class="custom-select mr-sm-2"
                    value={formulario.profesion}
                    name="profesion"
                    onChange={handleChange}
                  >
                    <option selected>Escoger...</option>
                    <option value="Entrenador">Entrenador</option>
                    <option value="Nutricionista">Nutricionista</option>
                  </select>
                  {/* <input
                  type="text"
                  className="form-control"
                  id="input__profesion"
                  placeholder="Ejm: Entrenador"
                  value={formulario.profesion}
                  name="profesion"
                  onChange={handleChange}
                /> */}
                </div>

                <div className="form-group col-md-6">
                  <div class="input-group-prepend">
                    <label for="input__fotoPerfil">Video</label>
                  </div>
                  <div class="custom-file">
                    <input
                      type="file"
                      ref={videoRef}
                      class="custom-file-input"
                      id="inputGroupFile01"
                    />
                    <label class="custom-file-label" for="inputGroupFile01">
                      Elija el archivo
                    </label>
                  </div>
                </div>

                {/* <div className="form-group col-md-6">
                <label for="input__fotoPerfil">video</label>
                <input type="file" ref={videoRef} />
              </div> */}
              </div>
              <div className="form-row">
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

                {/* <div className="form-group col-md-6">
                <label for="input__fotoPerfil">Foto Perfil</label>
                <input type="file" ref={imagenRef} accept="image/*" />
              </div> */}
                <div className="form-group col-md-6">
                  <div class="input-group-prepend">
                    <label for="input__fotoPerfil">Foto Banner</label>
                  </div>
                  <div class="custom-file">
                    <input
                      type="file"
                      ref={bannerRef}
                      class="custom-file-input"
                      id="inputGroupFile01"
                    />
                    <label class="custom-file-label" for="inputGroupFile01">
                      Elija el archivo
                    </label>
                  </div>
                </div>

                {/* <div className="form-group col-md-6">
                <label for="input__fotoPerfil">Foto Banner</label>
                <input type="file" ref={bannerRef} accept="image/*" />
              </div> */}
              </div>
              <div className="form-row">
                <div className="form-group col-md-12">
                  <label for="input_descripcion">
                    Descripción de su trabajo
                  </label>
                  <textarea
                    type="text"
                    className="form-control"
                    id="input_descripcion"
                    placeholder="Ejm: Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    value={formulario.descripcion}
                    name="descripcion"
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>
              <div className="form-group d-flex flex-row-reverse">
                <button className="btn btn__mostaza" type="submit">
                  Registrar
                </button>
              </div>
            </form>
          ) : null}
        </MDBModalBody>
      </MDBModal>
    </MDBContainer>
  );
};

export default AdminModalEditarEmpleado;
