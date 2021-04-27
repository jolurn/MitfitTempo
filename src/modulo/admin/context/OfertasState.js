import React, { useEffect, useState } from "react";
import OfertasContext from "./ofertaContext";
import { getOfertas } from "./../../../services/ofertasService";

const OfertasState = (props) => {
  const [sidebr, setSidebr] = useState("");
  const [sombr, setSombr] = useState("overlay");
  const [cargando, setCargando] = useState(true);
  const [datatableOfertas, setDatatableOfertas] = useState({
    columns: [
      {
        label: "Acciones",
        field: "accion",
      },
      {
        label: "#",
        field: "posicion",
      },
      {
        label: "Dni Empleado",
        field: "dniEmpleado",
      },
      {
        label: "Dia De Oferta",
        field: "diaDeOferta",
      },
      {
        label: "Hora De Inicio",
        field: "horaDeInicio",
      },
      {
        label: "Costo",
        field: "costo",
      },
      {
        label: "Dni Cliente",
        field: "dniCliente",
      },
    ],
    rows: [],
  });

  useEffect(() => {
    getOfertas().then((rpta) => {
      if (rpta.data) {
        let datoFormateado = rpta.data.map((objOfertas, i) => {
          return {
            ...objOfertas,
            posicion: i + 1,
            accion: (
              <>
                <button
                  className="btn btn-colorado"
                  onClick={() => {
                    alert("Hola jolu");
                  }}
                >
                  <i class="fas fa-trash-alt"></i>
                </button>
                <button
                  className="btn btn-palido ml-2"
                  onClick={() => {
                    alert("Hola jolu");
                  }}
                >
                  <i class="fas fa-pencil-alt"></i>
                </button>
              </>
            ),
          };
        });
        setDatatableOfertas({ ...datatableOfertas, rows: datoFormateado });
        setCargando(false);
      }
    });
  }, []);
  return (
    <OfertasContext.Provider
      value={{
        datatableOfertas: datatableOfertas,
        sidebr: sidebr,
        setSidebr: setSidebr,
        sombr: sombr,
        setSombr: setSombr,
        cargando: cargando,
        setCargando: setCargando,
      }}
    >
      {props.children}
    </OfertasContext.Provider>
  );
};

export default OfertasState;
