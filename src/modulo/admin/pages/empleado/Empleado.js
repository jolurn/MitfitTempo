import React, { useContext, useState } from "react";
import { MDBDataTableV5, MDBBtn } from "mdbreact";
import EmpleadoContext from "../../context/EmpleadoContext";
import AdminModalEditarEmpleado from "../../conponentes/AdminModalEditarEmpleado";
import AdminModalCrearEmpleado from "../../conponentes/AdminModalCrearEmpleado";

const Empleado = () => {
  const {
    datatableEmpleado,
    cargando,
    mostrarModalEditarEmpleado,
    setMostrarModalEditarEmpleado,
    objEmpleadoEditar,
    traerEmpleado,
    mostrarModalCrearEmpleado,
    setMostrarModalCrearEmpleado,
  } = useContext(EmpleadoContext);
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 d-flex justify-content-between">
            <h1>Empleado</h1>
            <div>
              <form className="d-flex mt-3">
                <input
                  className="form-control mr-2"
                  type="search"
                  placeholder="Buscar"
                  aria-label="Search"
                />
                <button className="btn btn-palido mr-2" type="submit">
                  <i class="fas fa-search"></i>
                </button>
                <div>
                  <MDBBtn
                    onClick={() => setMostrarModalCrearEmpleado(true)}
                    className="btn btn-naranja mr-2"
                  >
                    <i class="fas fa-plus-square"></i>
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
                data={datatableEmpleado}
              />
            )}
          </div>

          <AdminModalEditarEmpleado
            traerEmpleado={traerEmpleado}
            objEmpleadoEditar={objEmpleadoEditar}
            mostrarModalEditarEmpleado={mostrarModalEditarEmpleado}
            setMostrarModalEditarEmpleado={setMostrarModalEditarEmpleado}
          />
          <AdminModalCrearEmpleado
            mostrarModalCrearEmpleado={mostrarModalCrearEmpleado}
            setMostrarModalCrearEmpleado={setMostrarModalCrearEmpleado}
            traerEmpleado={traerEmpleado}
          />
        </div>
      </div>
    </>
  );
};

export default Empleado;
