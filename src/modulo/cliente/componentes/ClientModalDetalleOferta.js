import React from "react";
import { Link } from "react-router-dom";
import { MDBContainer, MDBModal, MDBModalBody, MDBModalHeader } from "mdbreact";
// import video from "./../../../img/video.mp4";

const ClientModalDetalleOferta = ({
  mostrarModalDetalleOferta,
  setMostrarModalDetalleOferta,
  objClienteOferta,
  modificarOfertaCarrito,
}) => {
  return (
    <MDBContainer>
      <MDBModal
        isOpen={mostrarModalDetalleOferta}
        toggle={() => setMostrarModalDetalleOferta(false)}
        size="lg"
      >
        <MDBModalHeader toggle={() => setMostrarModalDetalleOferta(false)}>
          {objClienteOferta
            ? objClienteOferta.empleado.usuarios.primerNombre +
              " " +
              objClienteOferta.empleado.usuarios.apellidoPaterno +
              " " +
              objClienteOferta.empleado.usuarios.apellidoMaterno
            : null}
        </MDBModalHeader>
        <MDBModalBody>
          <div className="col-md-12 d-flex">
            <div className="col-md-4">
              <video
                src={objClienteOferta ? objClienteOferta.empleado.video : null}
                width="240"
                height="430"
                controls
                className="imgTabla"
              ></video>
            </div>
            <div className="col-md-8 modal__detalle__body">
              <h4>
                <i className="fas fa-user-tie"></i>{" "}
                {objClienteOferta ? objClienteOferta.empleado.profesion : null}
              </h4>
              <br />
              <p className="parrafo_detalle_oferta">
                {objClienteOferta
                  ? objClienteOferta.empleado.descripcion
                  : null}
              </p>
              <h6>Contacto :</h6>
              <ul className="list-unstyled mb-0">
                <li>
                  <i className="fas fa-envelope-square"></i> <b>Correo:</b>{" "}
                  {objClienteOferta
                    ? objClienteOferta.empleado.usuarios.email
                    : null}
                </li>
                <li>
                  <i className="fas fa-map-marker-alt"></i> <b>Distrito:</b>{" "}
                  {objClienteOferta ? objClienteOferta.empleado.distrito : null}
                </li>
              </ul>
              <br />
              <h6>Oferta :</h6>
              <i class="fas fa-calendar-alt"></i> <b>Fecha de Sesión:</b>{" "}
              {objClienteOferta ? objClienteOferta.fechaOferta : null}
              <br />
              <i className="fas fa-hourglass-half"></i> <b>Hora Inicio:</b>{" "}
              {objClienteOferta ? objClienteOferta.horaInicio : null}{" "}
              <b>Hora Fin:</b>{" "}
              {objClienteOferta ? objClienteOferta.horaFin : null}
              <br />
              <i className="fas fa-hand-holding-usd"></i> <b>Inversión:</b> S/.{" "}
              {objClienteOferta ? objClienteOferta.costo : null}
              <br />
              <br />
              {/* <Link
                to={objClienteOferta ? objClienteOferta.init_point : null}
                className="btn btn__mostaza"
              >
                Comprar
              </Link> */}
              <button
                type="button"
                className="btn btn__mostaza"
                onClick={() => {
                  modificarOfertaCarrito({ ...objClienteOferta }, "sumar");
                  setMostrarModalDetalleOferta(false);
                }}
              >
                Agregar a Carrito
              </button>
            </div>
          </div>
        </MDBModalBody>
      </MDBModal>
    </MDBContainer>
  );
};

export default ClientModalDetalleOferta;
