import React, { useEffect, useState } from "react";
import { getCarrito } from "../../../services/carritoService";
import CarritoContext from "./carritoContext";
import { MDBBtn } from "mdbreact";

const CarritoState = (props) => {
  const [sidebr, setSidebr] = useState("");
  const [sombr, setSombr] = useState("overlay");
  const [cargando, setCargando] = useState(true);
  const [idCarrito, setIdCarrito] = useState(0);
  const [mostrarModalCarritoDetail, setMostrarModalCarritoDetail] = useState(
    false
  );
  const [objCarritoEditar, setObjCarritoEditar] = useState(null);

  const [datatableCarrito, setDatatableCarrito] = useState({
    columns: [
      {
        label: "Acciones",
        field: "accion",
      },
      {
        label: "#",
        field: "posicion",
      },
      {
        label: "Fecha",
        field: "carrito_fech",
      },
      {
        label: "Id del Cliente",
        field: "idCliente",
      },
      {
        label: "Estado",
        field: "carrito_est",
      },
      {
        label: "Detalle",
        field: "detalle",
      },
    ],
    rows: [],
  });
  const traerCarrito = () => {
    getCarrito().then((rpta) => {
      if (rpta.data) {
        let datoFormateado = rpta.data.map((objCarrito, i) => {
          return {
            ...objCarrito,
            posicion: i + 1,
            accion: (
              <>
                <MDBBtn
                  onClick={() => alert("Listo para imprimir")}
                  className="btn btn-colorado"
                >
                  <i class="fas fa-print"></i>
                </MDBBtn>
              </>
            ),
            detalle: (
              <button
                className="btn btn-palido"
                onClick={() => {
                  setIdCarrito(objCarrito.id);
                  setMostrarModalCarritoDetail(true);
                }}
              >
                <i class="fas fa-indent"></i>
              </button>
            ),
          };
        });
        setDatatableCarrito({ ...datatableCarrito, rows: datoFormateado });
        setCargando(false);
      }
    });
  };
  useEffect(() => {
    traerCarrito();
  }, []);
  return (
    <CarritoContext.Provider
      value={{
        idCarrito: idCarrito,
        setIdCarrito: setIdCarrito,
        objCarritoEditar: objCarritoEditar,
        setObjCarritoEditar: setObjCarritoEditar,
        setMostrarModalCarritoDetail: setMostrarModalCarritoDetail,
        mostrarModalCarritoDetail: mostrarModalCarritoDetail,
        datatableCarrito: datatableCarrito,
        sidebr: sidebr,
        setSidebr: setSidebr,
        sombr: sombr,
        setSombr: setSombr,
        cargando: cargando,
        setCargando: setCargando,
      }}
    >
      {props.children}
    </CarritoContext.Provider>
  );
};

export default CarritoState;