import React, { useEffect, useState } from "react";
import { MDBContainer, MDBModal, MDBModalBody, MDBModalHeader } from "mdbreact";
import ItemCarrito from "./ItemCarrito";
import { Link } from "react-router-dom";

import { postMercadoPago } from "../../../services/ofertasService";
const formularioVacioCarrito = {
  carrito_fech: "",
  idCliente: "",
  carrito_est: "",
  ofertas: [],
};

const ClientModalCarrito = ({
  mostrarModalClientCarrito,
  setMostrarModalClientCarrito,
  modificarOfertaCarrito,
  cargandoCliente,
  Carrito,
  setCargandoCliente,
}) => {
  const [FormularioCarrito, setFormularioCarrito] = useState({
    ...formularioVacioCarrito,
  });

  let montoTotal = 0;
  const [linkMercado, setLinkMercado] = useState({});
  useEffect(() => {
    postMercadoPago(Carrito).then((rpta) => {
      if (rpta.data) {
        setLinkMercado(rpta.data.rpt);
      }
    });
  }, [Carrito]);
  return (
    <MDBContainer>
      <MDBModal
        isOpen={mostrarModalClientCarrito}
        toggle={() => setMostrarModalClientCarrito(false)}
        size="lg"
      >
        <MDBModalHeader toggle={() => setMostrarModalClientCarrito(false)}>
          <i className="fas fa-shopping-cart"></i> Mi Carrito
        </MDBModalHeader>
        <MDBModalBody>
          <table className="table">
            <thead>
              <tr>
                <th>Celular</th>
                <th>Profesional</th>
                <th>Imagen</th>
                <th>Hora Inicio / Fin</th>
                <th>Precio</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {cargandoCliente ? (
                <tr>
                  <td>Cargando...</td>
                </tr>
              ) : (
                Carrito.map((objItem) => {
                  montoTotal += +objItem.costo;
                  return (
                    <ItemCarrito
                      objItem={objItem}
                      key={objItem.id}
                      modificarOfertaCarrito={modificarOfertaCarrito}
                      setCargandoCliente={setCargandoCliente}
                    />
                  );
                })
              )}

              <tr style={{ fontSize: "19px" }}>
                <td>
                  <h1>Total:</h1>
                </td>
                <td colSpan="7" className="text-end">
                  <h1>S/. {montoTotal}</h1>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="form-group d-flex flex-row-reverse">
            {montoTotal > 0 ? (
              <Link
                className="btn btn__mostaza"
                // to="/cliente/imprimir"
                to={linkMercado}
                role="button"
                onClick={() => {
                  setFormularioCarrito({
                    carrito_fech: Carrito.fechaOferta,
                    idCliente: Carrito.id,
                    carrito_est: "pagado",
                    ofertas: [...Carrito],
                  });

                  window.location.assign(linkMercado);

                  setMostrarModalClientCarrito(false);
                }}
              >
                Pagar Carrito
              </Link>
            ) : (
              <button
                className="btn btn__azul"
                type="button"
                onClick={() => {
                  setMostrarModalClientCarrito(false);
                }}
              >
                Salir
              </button>
            )}
          </div>
        </MDBModalBody>
      </MDBModal>
    </MDBContainer>
  );
};

export default ClientModalCarrito;
