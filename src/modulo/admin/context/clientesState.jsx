import React, { useEffect, useState } from "react";
import ClientesContext from "./ClientesContext";
import { getClientes } from "./../../../services/clientesService";

const ClientesState = (props) => {
  const [sidebr, setSidebr] = useState("");
  const [sombr, setSombr] = useState("overlay");
  const [cargando, setCargando] = useState(true);
  const [mostrarModalCrearCliente, setMostrarModalCrearCliente] = useState(
    false
  );
  const [mostrarModalEditarCliente, setMostrarModalEditarCliente] = useState(
    false
  );
  const [objClienteEditar, setObjClienteEditar] = useState(null);
  const [datatable, setDatatable] = useState({
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
        label: "Foto",
        field: "foto",
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
    ],
    rows: [],
  });
  const traerClientes = () => {
    setCargando(true);
    getClientes().then((rpta) => {
      if (rpta.data) {
        let datoFormateado = rpta.data.map((objClient, i) => {
          return {
            ...objClient,
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
                    setObjClienteEditar({ ...objClient });
                    setMostrarModalEditarCliente(true);
                  }}
                >
                  <i class="fas fa-pencil-alt"></i>
                </button>
              </>
            ),
          };
        });
        setDatatable({ ...datatable, rows: datoFormateado });
        setCargando(false);
      }
    });
  };
  useEffect(() => {
    traerClientes();
  }, []);
  return (
    <ClientesContext.Provider
      value={{
        mostrarModalCrearCliente: mostrarModalCrearCliente,
        setMostrarModalCrearCliente: setMostrarModalCrearCliente,
        traerClientes: traerClientes,
        objClienteEditar: objClienteEditar,
        mostrarModalEditarCliente: mostrarModalEditarCliente,
        setMostrarModalEditarCliente: setMostrarModalEditarCliente,
        datatable: datatable,
        sidebr: sidebr,
        setSidebr: setSidebr,
        sombr: sombr,
        setSombr: setSombr,
        cargando: cargando,
        setCargando: setCargando,
      }}
    >
      {props.children}
    </ClientesContext.Provider>
  );
};

export default ClientesState;
