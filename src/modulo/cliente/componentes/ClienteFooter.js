import React from "react";
import { Link } from "react-router-dom";

const ClienteFooter = () => {
  return (
    <>
      <footer className=" text-center">
        <div className="container p-4 pie__de__pagina shadow-lg">
          <div className="row">
            <div className="col-lg-6 col-md-12 mb-4 mb-md-0 categor">
              <h5 className="text-uppercase">Nosotros</h5>

              <p>
                Somos la mayor cadena de gimnasios de Latinoamérica y tenemos el
                propósito de ofrecer fitness de alta calidad para todos, en un
                ambiente cómodo, seguro y con la mejor tecnología para potenciar
                tu entrenamiento.
              </p>
            </div>

            <div className="col-md-6">
              <h5 className="text-uppercas">Contactanos</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <Link to="#!">
                    <i className="fas fa-mobile-alt"></i> 970318010
                  </Link>
                </li>
                <li>
                  <Link to="#!">
                    <i className="fas fa-envelope-square"></i>{" "}
                    myfittempo@gmail.com
                  </Link>
                </li>
                <li>
                  <Link to="#!">
                    <i className="fas fa-map-marker-alt"></i> Av. Gran Chimú 085
                    - Urb Zárate SJL
                  </Link>
                </li>
                {/* <li>
                    <a href="#!">Link 4</a>
                  </li> */}
              </ul>
            </div>

            {/* <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 class="text-uppercase mb-0">Links</h5>

                <ul class="list-unstyled">
                  <li>
                    <a href="#!">Link 1</a>
                  </li>
                  <li>
                    <a href="#!">Link 2</a>
                  </li>
                  <li>
                    <a href="#!">Link 3</a>
                  </li>
                  <li>
                    <a href="#!">Link 4</a>
                  </li>
                </ul>
              </div> */}
          </div>
        </div>

        <div className="text-center p-3 pie__año">
          <i className="fas fa-dumbbell"></i> MiFit Tempo - 2021
        </div>
      </footer>
    </>
  );
};

export default ClienteFooter;
