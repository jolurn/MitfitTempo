import React, { useEffect, useState } from "react";
import IndexContext from "./../context/IndexContext";
import { getOfertas } from "./../../../services/ofertasService";

const IndexState = (props) => {
  const [ClientLogin, setClientlogin] = useState();
  const [ObjClienteLogin, setObjClienteLogin] = useState();
  const [mostrarModalSession, setMostrarModalSession] = useState(false);
  const [mostrarModalClientCarrito, setMostrarModalClientCarrito] =
    useState(false);
  const [mostrarModalDetalleOferta, setMostrarModalDetalleOferta] =
    useState(false);
  const [clienteLogin, setclienteLogin] = useState([]);
  const [Carrito, setCarrito] = useState([]);
  const [cargandoCliente, setCargandoCliente] = useState(true);
  const [ofertas, setOfertas] = useState([]);

  const modificarOfertaCarrito = (objAgregarOfert, accion) => {
    setCargandoCliente(true);
    let carritoActuales = [...Carrito];

    let ofertaEncontrado = carritoActuales.findIndex(
      (objOferta) => +objAgregarOfert.id === +objOferta.id
    );
    if (ofertaEncontrado >= 0) {
      if (accion === "sumar") {
        //ya habia un pedido
        carritoActuales.oferta_cant++;

        setCarrito(carritoActuales);
        setCargandoCliente(false);
      } else {
        if (carritoActuales.oferta_cant > 1) {
          carritoActuales.oferta_cant--;
          setCarrito(carritoActuales);
        } else {
          //borrar un elemento dado su posicion
          carritoActuales.splice(ofertaEncontrado, 1);
          setCarrito(carritoActuales);
        }
      }
    } else {
      if (accion === "sumar") {
        carritoActuales.push({
          ...objAgregarOfert,
          oferta_cant: 1,
        });
        setCarrito(carritoActuales);
        setCargandoCliente(false);
      }
    }
  };

  useEffect(() => {
    getOfertas().then((rpta) => {
      if (rpta.data) {
        setOfertas(rpta.data);
      }
    });
  }, []);
  return (
    <IndexContext.Provider
      value={{
        ObjClienteLogin: ObjClienteLogin,
        setObjClienteLogin: setObjClienteLogin,
        ClientLogin: ClientLogin,
        setClientlogin: setClientlogin,
        ofertas: ofertas,
        modificarOfertaCarrito: modificarOfertaCarrito,
        setCargandoCliente: setCargandoCliente,
        cargandoCliente: cargandoCliente,
        setCarrito: setCarrito,
        Carrito: Carrito,
        clienteLogin: clienteLogin,
        setclienteLogin: setclienteLogin,
        mostrarModalClientCarrito: mostrarModalClientCarrito,
        setMostrarModalClientCarrito: setMostrarModalClientCarrito,
        mostrarModalSession: mostrarModalSession,
        setMostrarModalSession: setMostrarModalSession,
        mostrarModalDetalleOferta: mostrarModalDetalleOferta,
        setMostrarModalDetalleOferta: setMostrarModalDetalleOferta,
      }}
    >
      {props.children}
    </IndexContext.Provider>
  );
};

export default IndexState;
