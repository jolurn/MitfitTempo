import React from "react";

const Dashboard = () => {
  return (
    <>
      <main className="container">
        <div className="row mt-4">
          <div className="col">
            <h1 className="display-3 text-center">Dashboard Administrativo</h1>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-4">
            <div className="card shadow">
              <div className="card-header text-center">Total de Clientes</div>
              <div className="card-body text-center">
                <span className="display-4">15</span>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow">
              <div className="card-header text-center">Total de Empleados</div>
              <div className="card-body text-center">
                <span className="display-4">20</span>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow">
              <div className="card-header text-center">Total de Ofertas</div>
              <div className="card-body text-center">
                <span className="display-4">300</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col">
            <div className="card shadow">
              <div className="card-header text-center">Total Ingresos</div>
              <div className="card-body text-center">
                <p className="display-1">
                  S/. <span>30000</span>
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
