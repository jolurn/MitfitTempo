import React, { useContext } from "react";
import ClientModalSession from "../../componentes/ClientModalSession";
import IndexContext from "../../context/IndexContext";
import LogoYServicios from "../../context/LogoYServicios";
import ClienteNavbar from "./../../componentes/clienteNavbar";
import ClienteFooter from "../../componentes/ClienteFooter";
import ClientModalCarrito from "../../componentes/ClientModalCarrito";

import imagen from "./../../../../img/perfil.jpg";

const Oferta = () => {
  const {
    mostrarModalSession,
    setMostrarModalSession,
    mostrarModalClientCarrito,
    setMostrarModalClientCarrito,
    setCargandoCliente,
    cargandoCliente,
    ofertas,
  } = useContext(IndexContext);

  return (
    <>
      <div className="container-fluid client__body">
        <header className="blog-header py-3">
          <LogoYServicios />
        </header>
        <ClienteNavbar />

        <div className="container mb-4">
          <div className="col-12">
            <div className="row row-cols-1 row-cols-md-2 g-4">
              {ofertas.map((objOferta) => {
                return (
                  <div className="col-md-4 mt-3" key={objOferta.id}>
                    <div className="card shadow-lg">
                      <img
                        src={
                          objOferta.empleado.fotoPerfil
                            ? objOferta.empleado.fotoPerfil
                            : imagen
                        }
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title">
                          {objOferta.empleado.usuarios.primerNombre +
                            " " +
                            objOferta.empleado.usuarios.apellidoPaterno +
                            " " +
                            objOferta.empleado.usuarios.apellidoMaterno}
                        </h5>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-12"></div>
        </div>

        <ClienteFooter />
        <ClientModalSession
          mostrarModalSession={mostrarModalSession}
          setMostrarModalSession={setMostrarModalSession}
        />
        <ClientModalCarrito
          setCargandoCliente={setCargandoCliente}
          cargandoCliente={cargandoCliente}
          mostrarModalClientCarrito={mostrarModalClientCarrito}
          setMostrarModalClientCarrito={setMostrarModalClientCarrito}
        />
      </div>
    </>
  );
};

export default Oferta;
