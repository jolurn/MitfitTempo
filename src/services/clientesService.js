import { URL_BACKENDo } from "./../environments/enviromentsDjango";
import axios from "axios";

export const postCliente = async (objCliente) => {
  const rpta = await axios.post(
    `${URL_BACKENDo}/user_cliente`,
    JSON.stringify(objCliente),
    { headers: { "Content-type": "application/json" } }
  );
  return rpta;
};
export const postClienteTwo = async (objCliente) => {
  const rpta = await axios.post(
    `${URL_BACKENDo}/clientes`,
    JSON.stringify(objCliente),
    { headers: { "Content-type": "application/json" } }
  );
  return rpta;
};
export const getClientes = async () => {
  const rpta = await axios.get(URL_BACKENDo + "/clientes");
  return rpta;
};
export const putClienteById = async (objCliente) => {
  const rpta = await axios.put(
    `${URL_BACKENDo}/cliente/${objCliente.id}`,
    JSON.stringify(objCliente),
    { headers: { "Content-type": "application/json" } }
  );
  return rpta;
};

export const postUploadImagenByCliente = async (file, id) => {
  let miFormData = new FormData();
  miFormData.append("imagen", file);
  miFormData.append("id", id);

  const rpta = await axios.post(
    `${URL_BACKENDo}/cliente/imagen/perfil`,
    miFormData,
    {
      headers: {
        "Content-type": "multipart/form-data",
      },
    }
  );
  return rpta;
};

export const deleteClienteById = async (id) => {
  const rpta = await axios.delete(`${URL_BACKENDo}/clientedelete/${id}`);
  return rpta;
};
