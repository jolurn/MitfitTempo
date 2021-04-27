import React, { useContext } from "react";
import { Route, Link, Switch } from "react-router-dom";
import ClientesContext from "../context/ClientesContext";
import Empleado from "../pages/empleado/AdminEmpleadoPage";
import Ofertas from "../pages/ofertas/AdminOfertasPage";
import FotoPerfil from "./../../../img/jolu.jpg";
// import Empleado from "";
// import Ofertas from "";
// import Ventas from "";
// import Home from "";
import Cliente from "./../pages/clientes/AdminClientesPage";

const AdminSidebar = () => {
  const { sidebr, setSidebr } = useContext(ClientesContext);
  const { sombr, setSombr } = useContext(ClientesContext);

  const cerrarMenu = (e) => {
    e.preventDefault();
    setSidebr("");
    setSombr("overlay");
  };
  return (
    <>
      <nav id="sidebar" className={sidebr}>
        <div id="dismiss" onClick={cerrarMenu}>
          <i className="fas fa-arrow-left"></i>
        </div>
        <div className="sidebar-header">
          <h3>MyFit Tempo</h3>
        </div>
        <div className="d-flex justify-content-center">
          <img src={FotoPerfil} alt="" className="img__perfil" />
        </div>
        <ul className="list-unstyled components">
          <p>Jorge Luis Ramos Nolasco</p>
          <li className="active">
            <Link to="/" aria-expanded="false">
              Home
            </Link>
          </li>
          <li onClick={cerrarMenu}>
            <Link to="/admin/clientes">Cliente</Link>
          </li>
          <li onClick={cerrarMenu}>
            <Link to="/admin/empleado">Empleado</Link>
          </li>
          <li onClick={cerrarMenu}>
            <Link to="/admin/ofertas">Ofertas</Link>
          </li>
          {/* <li onClick={cerrarMenu}>
            <Link to="/ventas">Venta</Link>
          </li> */}
        </ul>
        <ul className="list-unstyled CTAs">
          <li>
            <a
              href=""
              onClick={localStorage.removeItem("token")}
              className="download"
            >
              Salir <i className="fas fa-sign-out-alt"></i>
            </a>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/clientes" component={Cliente} />
        <Route path="/empleado" component={Empleado} />
        <Route path="/ofertas" component={Ofertas} />
        {/* <Route path="/ventas" component={Ventas} />
        <Route path="/" component={Home} /> */}
      </Switch>
      <div className={sombr} id="sombr"></div>
    </>
  );
};

export default AdminSidebar;
