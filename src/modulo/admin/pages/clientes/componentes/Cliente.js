import React from "react";

const Cliente = ({ objCliente }) => {
  return (
    <>
      <th>{objCliente.dni}</th>
      <td>{objCliente.primerNombre}</td>
      <td>{objCliente.segundoNombre}</td>
      <td>{objCliente.apellidoPaterno}</td>
      <td>{objCliente.apellidoMaterno}</td>
      <td>{objCliente.foto}</td>
      <td>{objCliente.correo}</td>
      <td>{objCliente.celular}</td>
      <td>{objCliente.direccion}</td>
      <td>
        <button
          type="button"
          className="btn hambur"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          <i className="fas fa-pencil-alt"></i>
        </button>{" "}
        <button type="button" className="btn btn-outline-danger">
          <i className="fas fa-trash-alt"></i>
        </button>
      </td>
    </>
  );
};

export default Cliente;
