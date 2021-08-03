import React, { useContext } from "react";
import LogoYServicios from "./../../conponentes/LogoYServicios";
import ClienteNavbar from "./../../conponentes/clienteNavbar";
import { MDBDataTableV5, MDBBtn } from "mdbreact";
import ColaboradorContext from "../../context/ColaboradorContext";
import ColaboradorModalCrearOferta from "../../conponentes/ColaboradorModalCrearOferta";
import ColaboradorModalEditarOferta from "../../conponentes/ColaboradorModalEditarOferta";

const Colaborador = () => {
  const {
    datatableColaborador,
    cargando,
    setMostrarModalEditarOferta,
    mostrarModalEditarOferta,
    objObjOfertaEmpleadoEditar,
    usuLogin,
    traerOfertaEmpleado,
    mostrarModalCrearOferta,
    setMostrarModalCrearOferta,
  } = useContext(ColaboradorContext);

  return (
    <>
      <div className="container-fluid cuerpo_colaborador">
        <header className="blog-header py-3">
          <LogoYServicios />
        </header>
        <ClienteNavbar />

        <div className="container mb-4">
          <div className="col-md-12">
            <div className="row">
              <div className="card border-light col-md-12 ">
                <div className="card-header col-md-12 d-flex justify-content-between">
                  Ofertas Realizadas
                </div>
                <div className="card-body">
                  <div className="container">
                    <div className="col-md-12">
                      <div className="invoice">
                        <div className="col-md-12 d-flex justify-content-between">
                          {/* <h1>Empleado</h1> */}
                          <div>
                            <form className="d-flex mt-3">
                              <div>
                                <MDBBtn
                                  onClick={() =>
                                    setMostrarModalCrearOferta(true)
                                  }
                                  className="btn btn__hex mr-2"
                                >
                                  <i className="fas fa-plus-square"></i>
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
                              data={datatableColaborador}
                            />
                          )}
                        </div>

                        <ColaboradorModalEditarOferta
                          traerOfertaEmpleado={traerOfertaEmpleado}
                          objObjOfertaEmpleadoEditar={
                            objObjOfertaEmpleadoEditar
                          }
                          usuLogin={usuLogin}
                          mostrarModalEditarOferta={mostrarModalEditarOferta}
                          setMostrarModalEditarOferta={
                            setMostrarModalEditarOferta
                          }
                        />
                        <ColaboradorModalCrearOferta
                          mostrarModalCrearOferta={mostrarModalCrearOferta}
                          setMostrarModalCrearOferta={
                            setMostrarModalCrearOferta
                          }
                          usuLogin={usuLogin}
                          traerOfertaEmpleado={traerOfertaEmpleado}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Colaborador;
