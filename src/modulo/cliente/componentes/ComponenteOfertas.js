import React, { useContext } from "react";
import { MDBBtn } from "mdbreact";
import imagen from "./../../../img/card.jpg";
import IndexContext from "../context/IndexContext";

const ComponenteOfertas = ({ objOferta }) => {
  const { setMostrarModalDetalleOferta, setObjClienteOferta } =
    useContext(IndexContext);

  return (
    <div className="col-md-4 mt-3">
      <div className="card shadow-lg">
        <img src={imagen} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{objOferta.dniEmpleado}</h5>
          <MDBBtn
            onClick={() => {
              setObjClienteOferta({ ...objOferta });
              setMostrarModalDetalleOferta(true);
            }}
            className="btn btn__azul"
          >
            <i className="fas fa-search"></i> Entrenador Físico
          </MDBBtn>
        </div>
      </div>
    </div>
  );
};

export default ComponenteOfertas;
