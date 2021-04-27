import { URL_BACKEND } from "./../environments/environments";
import axios from "axios";

export const getClientes = async () => {
  const rpta = await axios.get(URL_BACKEND + "/cliente");

  return rpta;
};
export const putClienteById = async (objCliente) => {
  console.log(objCliente.id);
  const rpta = await axios.put(
    `${URL_BACKEND}/cliente/${objCliente.id}`,
    JSON.stringify(objCliente),
    { headers: { "Content-type": "application/json" } }
  );
  return rpta;
};
export const postCliente = async (objCliente) => {
  const rpta = axios.post(
    `${URL_BACKEND}/cliente`,
    JSON.stringify(objCliente),
    { headers: { "Content-type": "application/json" } }
  );
  return rpta;
};
