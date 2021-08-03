import React, { useContext } from "react";
import LogoYServicios from "../../context/LogoYServicios";
import ClienteNavbar from "./../../componentes/clienteNavbar";
import ClienteFooter from "../../componentes/ClienteFooter";
import { withRouter } from "react-router-dom";
import perfilimg from "../../../../img/perfil.jpg";

import IndexContext from "../../context/IndexContext";

const Perfil = ({ history }) => {
  const { ObjClienteLogin } = useContext(IndexContext);
  // const [nombreUsuario, setNombreUsuario] = useState();
  // console.log(ObjClienteLogin);
  // useEffect(() => {
  //   setNombreUsuario(clientlogin.usu_nom);
  // }, [clientlogin]);

  return (
    <>
      <div className="container-fluid client__body">
        <header className="blog-header py-3">
          <LogoYServicios />
        </header>
        <ClienteNavbar />

        <div className="container mb-4">
          <div className="col-md-12">
            <div className="row ">
              <div className="card border-light col-md-12 ">
                <div className="card-header col-md-12">Perfil</div>
                <div className="card-body d-flex justify-content-center ">
                  <div className="col-md-4">
                    <img
                      src={
                        ObjClienteLogin
                          ? ObjClienteLogin.fotoCliente
                          : perfilimg
                      }
                      alt=""
                      className="imgPerfilCliente"
                    />
                  </div>
                  <div className="col-md-8 detalle_perfil_cliente">
                    <h2>
                      {ObjClienteLogin
                        ? ObjClienteLogin.usuarios.primerNombre +
                          " " +
                          ObjClienteLogin.usuarios.segundoNombre +
                          " " +
                          ObjClienteLogin.usuarios.apellidoPaterno +
                          " " +
                          ObjClienteLogin.usuarios.apellidoMaterno
                        : "Nombre : ..."}
                    </h2>
                    <br />
                    {/* <h5>
                      Username:{" "}
                      {ObjClienteLogin
                        ? ObjClienteLogin.usuarios.username
                        : "..."}
                    </h5> */}
                    <br />
                    <h5>
                      Celular:{" "}
                      {ObjClienteLogin
                        ? ObjClienteLogin.usuarios.celular
                        : "..."}
                    </h5>
                    <br />
                    <h5>
                      Correo:{" "}
                      {ObjClienteLogin ? ObjClienteLogin.usuarios.email : "..."}
                    </h5>
                    <br />
                    <h5>
                      Dirección:{" "}
                      {ObjClienteLogin
                        ? ObjClienteLogin.usuarios.direccion
                        : "..."}
                    </h5>
                    <br />
                    <h5>
                      Distrito:{" "}
                      {ObjClienteLogin ? ObjClienteLogin.distrito : "..."}
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12"></div>
        </div>
        <ClienteFooter />
      </div>
    </>
  );
};

export default withRouter(Perfil);
