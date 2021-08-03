import React, { useContext, useEffect, useState } from "react";
import ColaboradorContext from "./ColaboradorContext";
import {
  getColaboradorById,
  putDelete,
} from "./../../../services/colaboradorService";
import Swal from "sweetalert2";
import AuthContext from "./authContext";

const ColaboradorState = (props) => {
  const { ...state } = useContext(AuthContext);
  const [usuLogin, setUsulogin] = useState();
  const [cargando, setCargando] = useState(true);
  const [totalOferta, setTotalOferta] = useState(0);
  const [mostrarModalCrearOferta, setMostrarModalCrearOferta] = useState(false);
  const [mostrarModalEditarOferta, setMostrarModalEditarOferta] =
    useState(false);
  const [objObjOfertaEmpleadoEditar, setObjOfertaEmpleadoEditar] =
    useState(null);
  const eliminarColaborador = (id) => {
    Swal.fire({
      title: "¿Seguro que deseas eliminar la Oferta?",
      text: "¡Los cambios serán irreversibles!",
      showCancelButton: true,
      icon: "error",
    }).then((rpta) => {
      if (rpta.isConfirmed) {
        putDelete(id).then((rpta) => {
          if (rpta.data) {
            Swal.fire({
              text: "Oferta eliminado correctamente",
              icon: "success",
              timer: 1500,
            });
            traerOfertaEmpleado();
          }
        });
      }
    });
  };
  const [datatableColaborador, setDatatableColaborador] = useState({
    columns: [
      {
        label: "Fecha Oferta",
        field: "fechaOferta",
      },
      {
        label: "Hora Inicio",
        field: "horaInicio",
      },
      {
        label: "Hora Final",
        field: "horaFin",
      },
      {
        label: "Costo",
        field: "costo",
      },
      {
        label: "Acciones",
        field: "accion",
      },
    ],
    rows: [],
  });
  const traerOfertaEmpleado = () => {
    getColaboradorById(state.id).then((rpta) => {
      if (rpta.data) {
        let datoFormateado = rpta.data.map((objOferta, i) => {
          setTotalOferta(i + 1);
          return {
            ...objOferta,
            posicion: i + 1,
            accion: (
              <>
                <button
                  className="btn btn-colorado"
                  onClick={() => {
                    eliminarColaborador(objOferta.id);
                  }}
                >
                  <i class="fas fa-trash-alt"></i>
                </button>
                <button
                  className="btn btn__hex ml-2"
                  onClick={() => {
                    setObjOfertaEmpleadoEditar({ ...objOferta });
                    setMostrarModalEditarOferta(true);
                  }}
                >
                  <i class="fas fa-pencil-alt"></i>
                </button>
              </>
            ),
          };
        });
        setDatatableColaborador({
          ...datatableColaborador,
          rows: datoFormateado,
        });
        setCargando(false);
      }
    });
  };
  useEffect(() => {
    traerOfertaEmpleado();
  }, [state.id]);
  return (
    <ColaboradorContext.Provider
      value={{
        usuLogin: usuLogin,
        setUsulogin: setUsulogin,
        totalOferta: totalOferta,
        traerOfertaEmpleado: traerOfertaEmpleado,
        objObjOfertaEmpleadoEditar: objObjOfertaEmpleadoEditar,
        setObjOfertaEmpleadoEditar: setObjOfertaEmpleadoEditar,
        mostrarModalEditarOferta: mostrarModalEditarOferta,
        setMostrarModalEditarOferta: setMostrarModalEditarOferta,
        mostrarModalCrearOferta: mostrarModalCrearOferta,
        setMostrarModalCrearOferta: setMostrarModalCrearOferta,
        datatableColaborador: datatableColaborador,
        cargando: cargando,
        setCargando: setCargando,
      }}
    >
      {props.children}
    </ColaboradorContext.Provider>
  );
};

export default ColaboradorState;
