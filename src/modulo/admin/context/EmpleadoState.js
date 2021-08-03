import React, { useEffect, useState } from "react";
import EmpleadoContext from "./EmpleadoContext";
import {
  deleteEmpleadoById,
  getEmpleado,
} from "./../../../services/empleadoService";
import Swal from "sweetalert2";

const EmpleadoState = (props) => {
  const [sidebr, setSidebr] = useState("");
  const [sombr, setSombr] = useState("overlay");
  const [cargando, setCargando] = useState(true);
  const [totalEmpleados, setTotalEmpleados] = useState(0);
  const [mostrarModalCrearEmpleado, setMostrarModalCrearEmpleado] =
    useState(false);
  const [mostrarModalEditarEmpleado, setMostrarModalEditarEmpleado] =
    useState(false);
  const [objEmpleadoEditar, setObjEmpleadoEditar] = useState(null);
  const eliminarEmpleado = (id) => {
    Swal.fire({
      title: "¿Seguro que deseas eliminar al Empleado?",
      text: "¡Los cambios serán irreversibles!",
      showCancelButton: true,
      icon: "error",
    }).then((rpta) => {
      if (rpta.isConfirmed) {
        deleteEmpleadoById(id).then((rpta) => {
          if (rpta.data) {
            Swal.fire({
              text: "Empleado eliminado correctamente",
              icon: "success",
              timer: 1500,
            });
            traerEmpleado();
          }
        });
      }
    });
  };
  const [datatableEmpleado, setDatatableEmpleado] = useState({
    columns: [
      {
        label: "Acciones",
        field: "accion",
      },
      {
        label: "Usuario",
        field: "usuario",
      },
      {
        label: "distrito",
        field: "distrito",
      },
      {
        label: "profesion",
        field: "profesion",
      },
      {
        label: "descripcion",
        field: "descripcion",
      },
      {
        label: "Foto de Perfil",
        field: "fotoPerfil",
      },
      {
        label: "Foto de Banner",
        field: "fotoBanner",
      },
      {
        label: "Video",
        field: "video",
      },
    ],
    rows: [],
  });
  const traerEmpleado = () => {
    getEmpleado().then((rpta) => {
      if (rpta.data) {
        let datoFormateado = rpta.data.map((objEmpleado, i) => {
          setTotalEmpleados(i + 1);
          return {
            ...objEmpleado,
            usuario:
              objEmpleado.usuarios.primerNombre +
              " " +
              objEmpleado.usuarios.segundoNombre +
              " " +
              objEmpleado.usuarios.apellidoPaterno +
              " " +
              objEmpleado.usuarios.apellidoMaterno,
            fotoPerfil: (
              <img
                src={objEmpleado.fotoPerfil}
                width="100"
                className="imgTabla"
              />
            ),
            fotoBanner: (
              <img
                src={objEmpleado.fotoBanner}
                width="100"
                className="imgTabla"
              />
            ),
            video: (
              <video
                src={objEmpleado.video}
                width="90"
                height="150"
                controls
                className="imgTabla"
              ></video>
            ),
            posicion: i + 1,
            accion: (
              <>
                <button
                  className="btn btn-colorado"
                  onClick={() => {
                    eliminarEmpleado(objEmpleado.id);
                  }}
                >
                  <i class="fas fa-trash-alt"></i>
                </button>
                <button
                  className="btn btn-palido ml-2"
                  onClick={() => {
                    setObjEmpleadoEditar({ ...objEmpleado });
                    setMostrarModalEditarEmpleado(true);
                  }}
                >
                  <i class="fas fa-pencil-alt"></i>
                </button>
              </>
            ),
          };
        });
        setDatatableEmpleado({ ...datatableEmpleado, rows: datoFormateado });
        setCargando(false);
      }
    });
  };
  useEffect(() => {
    traerEmpleado();
  }, []);
  return (
    <EmpleadoContext.Provider
      value={{
        totalEmpleados: totalEmpleados,
        traerEmpleado: traerEmpleado,
        objEmpleadoEditar: objEmpleadoEditar,
        setObjEmpleadoEditar: setObjEmpleadoEditar,
        mostrarModalEditarEmpleado: mostrarModalEditarEmpleado,
        setMostrarModalEditarEmpleado: setMostrarModalEditarEmpleado,
        mostrarModalCrearEmpleado: mostrarModalCrearEmpleado,
        setMostrarModalCrearEmpleado: setMostrarModalCrearEmpleado,
        datatableEmpleado: datatableEmpleado,
        sidebr: sidebr,
        setSidebr: setSidebr,
        sombr: sombr,
        setSombr: setSombr,
        cargando: cargando,
        setCargando: setCargando,
      }}
    >
      {props.children}
    </EmpleadoContext.Provider>
  );
};

export default EmpleadoState;
