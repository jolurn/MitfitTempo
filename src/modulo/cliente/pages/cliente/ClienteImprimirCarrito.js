import React, { useContext, useRef } from "react";
import logo from "./../../../../img/logo.png";
import IndexContext from "../../context/IndexContext";
import LogoYServicios from "../../context/LogoYServicios";
import ClienteNavbar from "../../componentes/clienteNavbar";
import ClienteFooter from "../../componentes/ClienteFooter";
import ReactToPrint from "react-to-print";
import ClientModalSession from "../../componentes/ClientModalSession";
import ClientModalCarrito from "../../componentes/ClientModalCarrito";

const ClienteModalImprimirCarrito = () => {
  let SubTotal = 0;
  const {
    Carrito,
    mostrarModalSession,
    setMostrarModalSession,
    setCargandoCliente,
    modificarOfertaCarrito,
    cargandoCliente,
    mostrarModalClientCarrito,
    setMostrarModalClientCarrito,
  } = useContext(IndexContext);
  const boletaRef = useRef();

  return (
    <div className="container-fluid client__body">
      <header className="blog-header py-3">
        <LogoYServicios />
      </header>
      <ClienteNavbar />

      <div className="container mb-4">
        <div className="col-md-12">
          <div className="row ">
            <div className="card border-light col-md-12 ">
              <div className="card-header col-md-12 d-flex justify-content-between">
                Boleta de Venta{" "}
                <ReactToPrint
                  trigger={() => (
                    <button className="btn btn__mostaza">
                      <i className="fas fa-print"></i>
                    </button>
                  )}
                  content={() => boletaRef.current}
                />
              </div>

              <div className="card-body">
                <div className="container" ref={boletaRef}>
                  <div className="col-md-12">
                    <div className="invoice">
                      <div className="invoice-header">
                        <div className="col-md-12 d-flex justify-content-between">
                          <div class="col-lg-6 d-flex justify-content-center">
                            <div class="invoice-logo ">
                              <img width="150" src={logo} alt="Invoice logo" />
                            </div>
                          </div>

                          <div class="col-lg-6">
                            <div class="invoice-from">
                              <ul class="list-unstyled text-right">
                                <li>-----------------</li>
                                <li>R.U.C. 10007456085</li>
                                <li>BOLETE DE VENTA</li>
                                <li>Nº 002- 0000504</li>
                                <li>-----------------</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="invoice-content">
                        <div className="table-responsive">
                          <table className="table table-invoice">
                            <thead>
                              <tr>
                                <th className="text-center">#</th>
                                <th className="text-center">Id Empleado</th>
                                <th className="text-center">Hora de Inicio</th>
                                <th className="text-center">Hora de Fin</th>
                                <th className="text-center">Precio</th>
                              </tr>
                            </thead>
                            <tbody>
                              {Carrito.map((objDetalleC, i) => {
                                SubTotal += +objDetalleC.costo;
                                return (
                                  <tr>
                                    <td className="text-center">{i + 1}</td>
                                    <td className="text-center">
                                      {objDetalleC
                                        ? objDetalleC.empleado.primerNombre +
                                          " " +
                                          objDetalleC.empleado.apellidoPaterno +
                                          " " +
                                          objDetalleC.empleado.apellidoMaterno
                                        : null}
                                    </td>
                                    <td className="text-center">
                                      {objDetalleC
                                        ? objDetalleC.horaInicio
                                        : null}
                                    </td>
                                    <td className="text-center">
                                      {objDetalleC ? objDetalleC.horaFin : null}
                                    </td>
                                    <td className="text-center">
                                      S/. {objDetalleC.costo}
                                    </td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </div>

                        <div className="invoice-price">
                          <div className="invoice-price-left">
                            <div className="invoice-price-row">
                              <div className="sub-price">
                                <small>SUBTOTAL</small>
                                <span className="text-inverse">
                                  S/. {SubTotal}
                                </span>
                              </div>
                              <div className="sub-price">
                                <i className="fa fa-plus text-muted"></i>
                              </div>
                              <div className="sub-price">
                                <small>I.G.V. (18%)</small>
                                <span className="text-inverse">
                                  S/. {(SubTotal * 0.18).toFixed(2)}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="invoice-price-right">
                            <small>TOTAL</small>{" "}
                            <span className="f-w-600">
                              S/. {SubTotal + SubTotal * 0.18}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="invoice-note">
                        * Haga todos los cheques pagaderos a [MyFit Tempo]
                        <br />
                        * El pago vence en 30 días
                        <br />* Si tiene alguna pregunta sobre esta factura,
                        contacto [Jorge Luis, 970318010, jramosn@uni.edu.pe]
                      </div>

                      <div className="invoice-footer">
                        <p className="text-center m-b-5 f-w-600">
                          GRACIAS POR HACER NEGOCIOS
                        </p>
                        <p className="text-center">
                          <span className="m-r-10">
                            <i className="fa fa-fw fa-lg fa-globe"></i>{" "}
                            www.myfittempo.pe
                          </span>
                          <span className="m-r-10">
                            <i className="fa fa-fw fa-lg fa-phone-volume"></i>{" "}
                            T:01-3819230
                          </span>
                          <span className="m-r-10">
                            <i className="fa fa-fw fa-lg fa-envelope"></i>{" "}
                            myfittempo@gmail.comm
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
        modificarOfertaCarrito={modificarOfertaCarrito}
        cargandoCliente={cargandoCliente}
        Carrito={Carrito}
        mostrarModalClientCarrito={mostrarModalClientCarrito}
        setMostrarModalClientCarrito={setMostrarModalClientCarrito}
      />
    </div>
  );
};

export default ClienteModalImprimirCarrito;
