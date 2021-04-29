import React, { useContext, useEffect, useState } from "react";
import { MDBContainer, MDBModal, MDBModalBody, MDBModalHeader } from "mdbreact";
import { getCarritoById } from "../../../services/carritoService";
import CarritoContext from "../context/carritoContext";
import { MDBDataTableV5 } from "mdbreact";

const AdminModalCarritoDetalle = ({
  idCarrito,
  setIdCarrito,
  mostrarModalCarritoDetail,
  setMostrarModalCarritoDetail,
}) => {
  const { cargando } = useContext(CarritoContext);

  const [datatableCarritoDeail, setDatatableCarritoDetail] = useState({
    columns: [
      {
        label: "#",
        field: "posicion",
      },
      {
        label: "Id Oferta",
        field: "id",
      },
      {
        label: "costo de la Oferta",
        field: "costo",
      },
      {
        label: "Id Cliente",
        field: "idCliente",
      },
    ],
    rows: [],
  });
  const traerCarritoDetail = () => {
    getCarritoById(idCarrito).then((rpta) => {
      if (rpta.data) {
        let datoFormateadoDetail = rpta.data.ofertas.map(
          (objCarritoDetail, i) => {
            return {
              ...objCarritoDetail,
              posicion: i + 1,
            };
          }
        );
        setDatatableCarritoDetail({
          ...datatableCarritoDeail,
          rows: datoFormateadoDetail,
        });
        // setCargando(false);
      }
    });
  };

  useEffect(() => {
    traerCarritoDetail();
  }, [idCarrito]);

  return (
    <MDBContainer>
      <MDBModal
        isOpen={mostrarModalCarritoDetail}
        toggle={() => setMostrarModalCarritoDetail(false)}
        size="lg"
      >
        <MDBModalHeader toggle={() => setMostrarModalCarritoDetail(false)}>
          Detaller de Carrito
        </MDBModalHeader>
        <MDBModalBody>
          {cargando ? (
            <div className="alert alert-info">Cargando...</div>
          ) : (
            <MDBDataTableV5
              striped
              searching={false}
              data={datatableCarritoDeail}
            />
          )}
        </MDBModalBody>
      </MDBModal>
    </MDBContainer>
  );
};

export default AdminModalCarritoDetalle;
