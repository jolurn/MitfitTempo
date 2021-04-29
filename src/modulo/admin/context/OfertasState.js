import React, { useEffect, useState } from "react";
import OfertasContext from "./ofertaContext";
import {
  deleteOfertaById,
  getOfertas,
} from "./../../../services/ofertasService";

const OfertasState = (props) => {
  const [sidebr, setSidebr] = useState("");
  const [sombr, setSombr] = useState("overlay");
  const [cargando, setCargando] = useState(true);
  const [mostrarModalCrearOferta, setMostrarModalCrearOferta] = useState(false);
  const [mostrarModalEditarOferta, setMostrarModalEditarOferta] = useState(
    false
  );
  const [objOfertaEditar, setObjOfertaEditar] = useState(null);
  const eliminarOferta = (id) => {
    let r = window.confirm(
      "¡Los cambios serán irreversibles!\n¿Seguro que deseas eliminar al Empleado?"
    );
    if (r === true) {
      deleteOfertaById(id).then((rpta) => {
        if (rpta.data) {
          alert("Empleado eliminado correctamente");
          traerOferta();
        }
      });
    } else {
      alert("¡Gracias por No Eliminar!");
    }
  };
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
        label: "Día de Oferta",
        field: "diaDeOferta",
      },
      {
        label: "Hora de Inicio",
        field: "horaDeInicio",
      },
      {
        label: "Costo",
        field: "costo",
      },
    ],
    rows: [],
  });
  const traerOferta = () => {
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
                    eliminarOferta(objOfertas.id);
                  }}
                >
                  <i class="fas fa-trash-alt"></i>
                </button>
                <button
                  className="btn btn-palido ml-2"
                  onClick={() => {
                    setObjOfertaEditar({ ...objOfertas });
                    setMostrarModalEditarOferta(true);
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
  };
  useEffect(() => {
    traerOferta();
  }, []);
  return (
    <OfertasContext.Provider
      value={{
        traerOferta: traerOferta,
        objOfertaEditar: objOfertaEditar,
        setObjOfertaEditar: setObjOfertaEditar,
        mostrarModalEditarOferta: mostrarModalEditarOferta,
        setMostrarModalEditarOferta: setMostrarModalEditarOferta,
        mostrarModalCrearOferta: mostrarModalCrearOferta,
        setMostrarModalCrearOferta: setMostrarModalCrearOferta,
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
