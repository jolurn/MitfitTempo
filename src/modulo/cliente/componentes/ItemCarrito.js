import React from "react";
import imagenTabla from "./../../../img/card.jpg";

const ItemCarrito = ({
  objItem,
  modificarOfertaCarrito,
  setCargandoCliente,
}) => {
  return (
    <>
      <tr>
        <td>{objItem.empleado.usuarios.celular}</td>
        <td>
          {objItem.empleado.usuarios.primerNombre +
            " " +
            objItem.empleado.usuarios.segundoNombre +
            " " +
            objItem.empleado.usuarios.apellidoPaterno +
            " " +
            objItem.empleado.usuarios.apellidoMaterno}
        </td>
        <td>
          <img
            src={objItem.empleado.fotoPerfil}
            alt=""
            width="60"
            className="imgTabla"
          />
        </td>
        <td>{objItem.horaInicio + " a " + objItem.horaFin}</td>
        <td>S/. {objItem.costo}</td>
        <td>
          <button
            type="button"
            className="btn btn-danger btn-sm"
            onClick={() => {
              modificarOfertaCarrito({ ...objItem }, "resta");
              setCargandoCliente(false);
            }}
          >
            <i className="fas fa-trash-alt"></i>
          </button>
        </td>
      </tr>
    </>
  );
};

export default ItemCarrito;
