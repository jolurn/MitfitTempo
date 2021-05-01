import React, { useContext } from "react";
import { getCarrito } from "../../../../services/carritoService";
import CarritoContext from "../../context/carritoContext";
import ClientesContext from "../../context/ClientesContext";
import EmpleadoContext from "../../context/EmpleadoContext";
import OfertasContext from "../../context/ofertaContext";

const Dashboard = () => {
  const { totalCliente } = useContext(ClientesContext);
  const { totalEmpleados } = useContext(EmpleadoContext);
  const { totalOfertas } = useContext(OfertasContext);
  const { ingresosTotales } = useContext(CarritoContext);

  getCarrito().then((rpta) => {
    let suma = 0;
    let suma2 = 0;

    console.log(rpta.data);
    console.log(rpta.data[0].ofertas);

    console.log("----------");

    rpta.data.map((objCarrito, i) => {
      objCarrito.ofertas.map((objCostos, i) => {
        suma2 += parseInt(objCostos.costo);
      });
    });

    console.log("El costo ttotal es: " + suma2);
  });

  return (
    <>
      <main className="container">
        <div className="row mt-4">
          <div className="col">
            <h1 className="display-3 text-center dash-card-oscuro">
              Dashboard Administrativo
            </h1>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-4">
            <div className="card shadow">
              <div className="card-header text-center">Total de Clientes</div>
              <div className="card-body text-center dash-card-palido">
                <span className="display-4">
                  {totalCliente} <i class="fas fa-male"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow">
              <div className="card-header text-center">Total de Empleados </div>
              <div className="card-body text-center dash-card-naranjas">
                <span className="display-4">
                  {totalEmpleados} <i class="fas fa-briefcase"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow">
              <div className="card-header text-center">Total de Ofertas</div>
              <div className="card-body text-center">
                <span className="display-4 dash-card-colorado">
                  {totalOfertas} <i className="fas fa-clipboard-check"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col">
            <div className="card shadow">
              <div className="card-header text-center">Total de Ingresos</div>
              <div className="card-body text-center ">
                <p className="display-1 dash-card-oscuro">
                  S/. <span>{ingresosTotales}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
