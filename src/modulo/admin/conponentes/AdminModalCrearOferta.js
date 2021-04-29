import React, { useState } from "react";
import { MDBContainer, MDBModal, MDBModalBody, MDBModalHeader } from "mdbreact";
import { postOferta } from "../../../services/ofertasService";

const formularioVacio = {
  dniEmpleado: "",
  diaDeOferta: "",
  horaDeInicio: "",
  costo: "",
};
const AdminModalCrearOferta = ({
  mostrarModalCrearOferta,
  setMostrarModalCrearOferta,
  traerOferta,
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
    postOferta(formulario).then((rpta) => {
      if (rpta.data) {
        setMostrarModalCrearOferta(false);
        alert("¡Creó una Oferta correctamente!");
        setFormulario(formularioVacio);
        traerOferta();
      }
    });
  };
  return (
    <MDBContainer>
      <MDBModal
        isOpen={mostrarModalCrearOferta}
        toggle={() => setMostrarModalCrearOferta(false)}
        size="lg"
      >
        <MDBModalHeader toggle={() => setMostrarModalCrearOferta(false)}>
          Crear Oferta
        </MDBModalHeader>
        <MDBModalBody>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="input__DNI">DNI Empleado</label>
                <input
                  type="number"
                  className="form-control"
                  id="input__DNI"
                  placeholder="Ejm: 84512754"
                  value={formulario.dniEmpleado}
                  name="dniEmpleado"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group col-md-6">
                <label for="input_DiaDOferta">Día de Oferta</label>
                <input
                  type="date"
                  className="form-control"
                  id="input_DiaDOferta"
                  placeholder="Ejm: 2021-04-25"
                  value={formulario.diaDeOferta}
                  name="diaDeOferta"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="input__HoraDInicio">Hora de Inicio</label>
                <input
                  type="time"
                  className="form-control"
                  id="input__HoraDInicio"
                  placeholder=""
                  value={formulario.horaDeInicio}
                  name="horaDeInicio"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group col-md-6">
                <label for="input_costo">Costo</label>
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
              <small>
                Nota: Son dos horas la duración del servicio por cada oferta.
                <br />
                Ejm: Si la Hora de Inicio es 13:00 duraría hasta las 15:00
              </small>
            </div>
            <div className="form-group d-flex flex-row-reverse">
              <button className="btn btn-palido" type="submit">
                Guardar Cambios
              </button>
              <button
                className="btn btn-colorado mr-2"
                onClick={() => setMostrarModalCrearOferta(false)}
              >
                Salir
              </button>
            </div>
          </form>
        </MDBModalBody>
      </MDBModal>
    </MDBContainer>
  );
};

export default AdminModalCrearOferta;
