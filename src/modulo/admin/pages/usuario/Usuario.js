import React, { useContext } from "react";
import { MDBDataTableV5, MDBBtn } from "mdbreact";
import UsuarioContext from "../../context/UsuarioContext";
import AdminModalCrearUsuario from "../../conponentes/AdminModalCrearUsuario";
import AdminModalEditUsuario from "../../conponentes/AdminModalEditUsuario";

const Usuario = () => {
  const {
    datatableUsuario,
    cargando,
    mostrarModalEditarUsuario,
    setMostrarModalEditarUsuario,
    objUsuarioEditar,
    traerUsuario,
    mostrarModalCrearUsuario,
    setMostrarModalCrearUsuario,
  } = useContext(UsuarioContext);
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 d-flex justify-content-between">
            <h1>Usuario</h1>
            <div>
              <form className="d-flex mt-3">
                <div>
                  <MDBBtn
                    onClick={() => setMostrarModalCrearUsuario(true)}
                    className="btn btn-naranja mr-2"
                  >
                    <i className="fas fa-plus-square"></i>
                  </MDBBtn>
                </div>
              </form>
            </div>
          </div>

          <div className="col-md-12 tablita">
            {cargando ? (
              <div className="alert alert-info">Cargando...</div>
            ) : (
              <MDBDataTableV5
                striped
                searching={false}
                data={datatableUsuario}
              />
            )}
          </div>

          <AdminModalEditUsuario
            traerUsuario={traerUsuario}
            objUsuarioEditar={objUsuarioEditar}
            mostrarModalEditarUsuario={mostrarModalEditarUsuario}
            setMostrarModalEditarUsuario={setMostrarModalEditarUsuario}
          />
          <AdminModalCrearUsuario
            mostrarModalCrearUsuario={mostrarModalCrearUsuario}
            setMostrarModalCrearUsuario={setMostrarModalCrearUsuario}
            traerUsuario={traerUsuario}
          />
        </div>
      </div>
    </>
  );
};

export default Usuario;
