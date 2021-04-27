import React, { useContext, useState } from "react";
import {
  MDBDataTableV5,
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "mdbreact";
import logo from "./../../../../img/logo.png";
import OfertasContext from "../../context/ofertaContext";

const Ofertas = () => {
  const { datatableOfertas, cargando } = useContext(OfertasContext);

  const [modalOfertasAdd, setModalOfertasAdd] = useState(false);
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 d-flex justify-content-between">
            <h1>Ofertas</h1>
            <div>
              <form className="d-flex mt-3">
                <input
                  className="form-control mr-2"
                  type="search"
                  placeholder="Buscar"
                  aria-label="Search"
                />
                <button className="btn btn-palido mr-2" type="submit">
                  <i class="fas fa-search"></i>
                </button>
                <button className="btn btn-naranja mr-2" type="button">
                  <i class="fas fa-plus-square"></i>
                </button>
                <div>
                  <MDBBtn
                    onClick={() => setModalOfertasAdd(true)}
                    className="btn btn-colorado"
                  >
                    <i class="fas fa-print"></i>
                  </MDBBtn>
                </div>
              </form>
            </div>
          </div>

          <div className="col-md-12 tablita">
            {cargando ? (
              <div className="alert alert-info">Cargando...</div>
            ) : (
              <MDBDataTableV5
                striped
                searching={false}
                data={datatableOfertas}
              />
            )}
          </div>

          <MDBContainer>
            <MDBModal
              isOpen={modalOfertasAdd}
              toggle={() => setModalOfertasAdd(false)}
              size="lg"
            >
              <MDBModalHeader toggle={() => setModalOfertasAdd(false)}>
                Lista de Ofertas
              </MDBModalHeader>
              <MDBModalBody>
                <div className="container">
                  <div className="col-md-12">
                    <div className="invoice">
                      <div className="invoice-content">
                        <div className="table-responsive">
                          <div className="col-md-12 d-flex justify-content-between">
                            <div class="col-lg-6">
                              <div class="invoice-logo">
                                <img
                                  width="150"
                                  src={logo}
                                  alt="Invoice logo"
                                />
                              </div>
                            </div>

                            <div class="col-lg-6">
                              <div class="invoice-from">
                                <ul class="list-unstyled text-right">
                                  <li>Dash LLC</li>
                                  <li>2500 Ridgepoint Dr, Suite 105-C</li>
                                  <li>Austin TX 78754</li>
                                  <li>VAT Number EU826113958</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <table className="table table-invoice">
                            <thead>
                              <tr>
                                <th>TASK DESCRIPTION</th>
                                <th className="text-center" width="10%">
                                  RATE
                                </th>
                                <th className="text-center" width="10%">
                                  HOURS
                                </th>
                                <th className="text-right" width="20%">
                                  LINE TOTAL
                                </th>
                                <th className="text-right" width="20%">
                                  LINE TOTAL
                                </th>
                                <th className="text-right" width="20%">
                                  LINE TOTAL
                                </th>
                                <th className="text-right" width="20%">
                                  LINE TOTAL
                                </th>
                                <th className="text-right" width="20%">
                                  LINE TOTAL
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <span className="text-inverse">Jorge</span>
                                </td>
                                <td className="text-center">$50.00</td>
                                <td className="text-center">50</td>
                                <td className="text-right">$2,500.00</td>
                                <td className="text-center">$50.00</td>
                                <td className="text-center">50</td>
                                <td className="text-right">$2,500.00</td>
                                <td className="text-center">$50.00</td>
                                <td className="text-center">50</td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="text-inverse">Jorge</span>>
                                </td>
                                <td className="text-center">$50.00</td>
                                <td className="text-center">40</td>
                                <td className="text-right">$2,000.00</td>
                                <td className="text-center">$50.00</td>
                                <td className="text-center">40</td>
                                <td className="text-right">$2,000.00</td>
                                <td className="text-center">$50.00</td>
                                <td className="text-center">40</td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="text-inverse">Jorge</span>>
                                </td>
                                <td className="text-center">$50.00</td>
                                <td className="text-center">50</td>
                                <td className="text-right">$2,500.00</td>
                                <td className="text-center">$50.00</td>
                                <td className="text-center">50</td>
                                <td className="text-right">$2,500.00</td>
                                <td className="text-center">$50.00</td>
                                <td className="text-center">50</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      <div className="invoice-footer">
                        <p className="text-center m-b-5 f-w-600">MyFit Tempo</p>
                        <p className="text-center">
                          <span className="m-r-10">
                            <i className="fa fa-fw fa-lg fa-globe"></i>{" "}
                            matiasgallipoli.com
                          </span>
                          <span className="m-r-10">
                            <i className="fa fa-fw fa-lg fa-phone-volume"></i>{" "}
                            T:016-18192302
                          </span>
                          <span className="m-r-10">
                            <i className="fa fa-fw fa-lg fa-envelope"></i>{" "}
                            rtiemps@gmail.com
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </MDBModalBody>
              <MDBModalFooter>
                <MDBBtn
                  className="btn-colorado"
                  onClick={() => setModalOfertasAdd(false)}
                >
                  Salir
                </MDBBtn>
                <MDBBtn className="btn-palido">Guardar cambios</MDBBtn>
              </MDBModalFooter>
            </MDBModal>
          </MDBContainer>
        </div>
      </div>
    </>
  );
};

export default Ofertas;
