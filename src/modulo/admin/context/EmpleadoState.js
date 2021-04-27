import React, { useEffect, useState } from "react";
import EmpleadoContext from "./EmpleadoContext";
import { getEmpleado } from "./../../../services/empleadoService";

const EmpleadoState = (props) => {
  const [sidebr, setSidebr] = useState("");
  const [sombr, setSombr] = useState("overlay");
  const [cargando, setCargando] = useState(true);
  const [datatableEmpleado, setDatatableEmpleado] = useState({
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
        label: "DNI",
        field: "dni",
      },
      {
        label: "Primer Nombre",
        field: "primerNombre",
      },
      {
        label: "Segundo Nombre",
        field: "segundoNombre",
      },
      {
        label: "Apellido Paterno",
        field: "apellidoPaterno",
      },
      {
        label: "Apellido Materno",
        field: "apellidoMaterno",
      },
      {
        label: "Profesion",
        field: "profesion",
      },
      {
        label: "LinkFoto",
        field: "linkFoto",
      },
      {
        label: "Descripcion",
        field: "descripcion",
      },
      {
        label: "Correo",
        field: "correo",
      },
      {
        label: "Celular",
        field: "celular",
      },
      {
        label: "Direccion",
        field: "direccion",
      },
      {
        label: "Distrito",
        field: "distrito",
      },
    ],
    rows: [],
  });

  useEffect(() => {
    getEmpleado().then((rpta) => {
      // setClientes(rpta.data);
      console.log(rpta.data);
      if (rpta.data) {
        let datoFormateado = rpta.data.map((objEmpleado, i) => {
          return {
            ...objEmpleado,
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
        setDatatableEmpleado({ ...datatableEmpleado, rows: datoFormateado });
        setCargando(false);
      }
    });
  }, []);
  return (
    <EmpleadoContext.Provider
      value={{
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
