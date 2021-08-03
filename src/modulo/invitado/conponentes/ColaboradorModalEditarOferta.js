import React, { useState } from "react";
import { MDBContainer, MDBModal, MDBModalBody, MDBModalHeader } from "mdbreact";

import Swal from "sweetalert2";

import { putUpdate } from "../../../services/colaboradorService";
import { useEffect } from "react";
import { getEmpleado } from "../../../services/empleadoService";
const formularioVacio = {
  fechaOferta: "",
  horaInicio: "",
  horaFin: "",
  costo: "",
  empleado: "",
};
const ColaboradorModalEditarOferta = ({
  mostrarModalEditarOferta,
  traerOfertaEmpleado,
  objObjOfertaEmpleadoEditar,
  usuLogin,
  setMostrarModalEditarOferta,
}) => {
  const [formulario, setFormulario] = useState({ ...formularioVacio });

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    setFormulario({ ...objObjOfertaEmpleadoEditar });
  }, [objObjOfertaEmpleadoEditar]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFormulario = { ...formulario };
    getEmpleado().then((rpta) => {
      if (rpta.data) {
        const usuarioEncontrado = rpta.data.find(
          (usu) => +usu.usuarios.id === +usuLogin
        );
        newFormulario.empleado = { ...usuarioEncontrado };

        putUpdate(newFormulario).then((rpta) => {
          if (rpta.data) {
            setMostrarModalEditarOferta(false);
            setFormulario(formularioVacio);
            Swal.fire({
              text: "Empleado registrado correctamente",
              icon: "success",
              timer: 2000,
            });
            traerOfertaEmpleado();
          }
        });
      }
    });
  };
  return (
    <MDBContainer>
      <MDBModal
        isOpen={mostrarModalEditarOferta}
        toggle={() => setMostrarModalEditarOferta(false)}
        size="lg"
      >
        <MDBModalHeader toggle={() => setMostrarModalEditarOferta(false)}>
          Crear Oferta
        </MDBModalHeader>
        <MDBModalBody>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="input__DNI">Día de la Oferta</label>
                <input
                  type="date"
                  className="form-control"
                  id="input__fechaOferta"
                  placeholder="Ejm: jramosn"
                  value={formulario.fechaOferta}
                  name="fechaOferta"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group col-md-6">
                <label for="input_Nombre">Hora de Inicio de la sessión</label>
                <input
                  type="time"
                  className="form-control"
                  id="input_horaInicio"
                  placeholder="Ejm: ***"
                  value={formulario.horaInicio}
                  name="horaInicio"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="input__DNI">Hora que termina la sessión</label>
                <input
                  type="time"
                  className="form-control"
                  id="input__horaFin"
                  placeholder="Ejm: 84512754"
                  value={formulario.horaFin}
                  name="horaFin"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group col-md-6">
                <label for="input_Nombre">Costo por la sessión</label>
                <input
                  type="text"
                  className="form-control"
                  id="input_costo"
                  placeholder="Ejm: 50"
                  value={formulario.costo}
                  name="costo"
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
        </MDBModalBody>
      </MDBModal>
    </MDBContainer>
  );
};

export default ColaboradorModalEditarOferta;
