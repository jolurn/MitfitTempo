import React, { useEffect, useState } from "react";
import UsuarioContext from "./UsuarioContext";
import { getUsuario, putDeleteUsuario } from "./../../../services/authService";
import Swal from "sweetalert2";
// import Swal from "sweetalert2";

const EmpleadoState = (props) => {
  const [sidebr, setSidebr] = useState("");
  const [sombr, setSombr] = useState("overlay");
  const [cargando, setCargando] = useState(true);
  const [totalUsuarios, setTotalUsuarios] = useState(0);
  // const [totalClientes, setTotalClientes] = useState(0);
  const [mostrarModalCrearUsuario, setMostrarModalCrearUsuario] =
    useState(false);
  const [mostrarModalEditarUsuario, setMostrarModalEditarUsuario] =
    useState(false);
  const [objUsuarioEditar, setObjUsuarioEditar] = useState(null);
  const eliminarUsuario = (id) => {
    Swal.fire({
      title: "¿Seguro que deseas eliminar el Usuario?",
      text: "¡Los cambios serán irreversibles!",
      showCancelButton: true,
      icon: "error",
    }).then((rpta) => {
      if (rpta.isConfirmed) {
        putDeleteUsuario(id).then((rpta) => {
          if (rpta.data) {
            Swal.fire({
              text: "Usuario eliminado correctamente",
              icon: "success",
              timer: 1500,
            });
            traerUsuario();
          }
        });
      }
    });
  };
  const [datatableUsuario, setDatatableUsuario] = useState({
    columns: [
      {
        label: "Acciones",
        field: "accion",
      },
      {
        label: "Username",
        field: "username",
      },
      {
        label: "Password",
        field: "password",
      },
      {
        label: "primer Nombre",
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
        label: "Dni",
        field: "dni",
      },
      {
        label: "Celular",
        field: "celular",
      },
      {
        label: "Email",
        field: "email",
      },
      {
        label: "Direccion",
        field: "direccion",
      },
      {
        label: "Usu_tipo",
        field: "usu_tipo",
      },
    ],
    rows: [],
  });
  const traerUsuario = () => {
    getUsuario().then((rpta) => {
      if (rpta.data) {
        // let contador = 0;
        let datoFormateado = rpta.data.map((objUsuario, i) => {
          // if (objUsuario.usu_tipo === "cliente") {
          //   setTotalClientes(contador + 1);
          // }
          setTotalUsuarios(i + 1);
          return {
            ...objUsuario,
            posicion: i + 1,
            accion: (
              <>
                <button
                  className="btn btn-colorado"
                  onClick={() => {
                    eliminarUsuario(objUsuario.id);
                  }}
                >
                  <i class="fas fa-trash-alt"></i>
                </button>
                <button
                  className="btn btn-palido ml-2"
                  onClick={() => {
                    setObjUsuarioEditar({ ...objUsuario });
                    setMostrarModalEditarUsuario(true);
                  }}
                >
                  <i class="fas fa-pencil-alt"></i>
                </button>
              </>
            ),
          };
        });
        setDatatableUsuario({ ...datatableUsuario, rows: datoFormateado });
        setCargando(false);
      }
    });
  };
  useEffect(() => {
    traerUsuario();
  }, []);
  return (
    <UsuarioContext.Provider
      value={{
        // totalClientes: totalClientes,
        totalUsuarios: totalUsuarios,
        traerUsuario: traerUsuario,
        objUsuarioEditar: objUsuarioEditar,
        setObjUsuarioEditar: setObjUsuarioEditar,
        mostrarModalEditarUsuario: mostrarModalEditarUsuario,
        setMostrarModalEditarUsuario: setMostrarModalEditarUsuario,
        mostrarModalCrearUsuario: mostrarModalCrearUsuario,
        setMostrarModalCrearUsuario: setMostrarModalCrearUsuario,
        datatableUsuario: datatableUsuario,
        sidebr: sidebr,
        setSidebr: setSidebr,
        sombr: sombr,
        setSombr: setSombr,
        cargando: cargando,
        setCargando: setCargando,
      }}
    >
      {props.children}
    </UsuarioContext.Provider>
  );
};

export default EmpleadoState;
