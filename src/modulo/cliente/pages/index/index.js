import React, { useContext } from "react";
import IndexContext from "../../../cliente/context/IndexContext";
import entrenador from "./../../../../img/entrenador.png";
import nutricionista from "./../../../../img/nutricionista.jpg";
import Slider from "./Slider";
import ClienteNavbar from "./../../componentes/clienteNavbar";
import ClientModalSession from "../../componentes/ClientModalSession";
import ClientModalCarrito from "../../componentes/ClientModalCarrito";
import LogoYServicios from "../../context/LogoYServicios";
import ClienteFooter from "../../componentes/ClienteFooter";
import distancia from "../../../../img/icon-distancia.png";
import desinfeccao from "../../../../img/icon-desinfeccao.png";
import mascara from "../../../../img/icon-usaremos-mascara.png";
import temperatura from "../../../../img/icon-termometro.png";

const Index = () => {
  const {
    modificarOfertaCarrito,
    mostrarModalSession,
    setMostrarModalSession,
    mostrarModalClientCarrito,
    setMostrarModalClientCarrito,
    cargandoCliente,
    setCargandoCliente,
    Carrito,
  } = useContext(IndexContext);
  return (
    <>
      <div className="container-fluid client__body">
        <header className="blog-header py-3">
          <LogoYServicios />
        </header>
        <ClienteNavbar />
        <div className="container-fluid mb-4 ">
          <Slider />
        </div>
        <div className="container mb-4">
          <div className="row d-flex justify-content-center">
            <div className="col-md-6 mt-3">
              <div className="card shadow">
                <img
                  src={entrenador}
                  className="card-img card__categoria"
                  alt="..."
                />
                <div className="card-img-overlay">
                  <h5 className="card-title">Entrenador</h5>
                </div>
              </div>
            </div>
            <div className="col-md-6 mt-3">
              <div className="card shadow">
                <img
                  src={nutricionista}
                  className="card-img card__categoria"
                  alt="..."
                />
                <div className="card-img-overlay">
                  <h5 className="card-title">Nutricionista</h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mb-4">
          <div className="row d-flex justify-content-center">
            <div className="col-md-3">
              <div className="card shadow">
                <div className="card-header text-center">
                  Desinfección completa
                </div>
                <div className="card-body text-center cuerpo_tarjeta">
                  <img src={desinfeccao} alt="" className="img_tarjeta" />
                  <p>
                    Limpieza profunda por áreas 3 veces al día y desinfección
                    periódica con un sistema de aspersión especializado contra
                    virus y bacterias.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card shadow">
                <div className="card-header text-center">
                  Distanciamiento corporal
                </div>
                <div className="card-body text-center cuerpo_tarjeta">
                  <img src={distancia} alt="" className="img_tarjeta" />
                  <br />
                  <br />
                  <p>
                    Deshabilitamos la mitad de las máquinas cardiovasculares
                    para mantener una distancia segura.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card shadow">
                <div className="card-header text-center">Uso de mascarilla</div>
                <div className="card-body text-center cuerpo_tarjeta">
                  <img src={mascara} alt="" className="img_tarjeta2" />
                  <br />
                  <br />
                  <p>
                    El uso de la mascarilla es obligatorio para los clientes y
                    nuestro equipo.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card shadow">
                <div className="card-header text-center">
                  Control de temperatura
                </div>
                <div className="card-body text-center cuerpo_tarjeta">
                  <img src={temperatura} alt="" className="img_tarjeta2" />
                  <p>
                    Tenemos alfombras en la entrada para que desinfectes tus
                    zapatillas. Mediremos tu temperatura en la recepción. Si
                    está por encima de 37.8° C, ve a casa por favor.
                  </p>
                </div>
              </div>
            </div>
          </div>
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
    </>
  );
};

export default Index;
