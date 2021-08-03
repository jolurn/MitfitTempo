import axios from "axios";
// import { URL_BACKEND_LOGIN } from "../environments/enviromentsLogin";
import { URL_BACKENDo } from "./../environments/enviromentsDjango";

export const postLogin = async (objLogin) => {
  const rpta = await axios.post(
    `${URL_BACKENDo}/login`,
    JSON.stringify(objLogin),
    {
      headers: { "Content-type": "application/json" },
    }
  );
  return rpta;
};

export const getUsuario = async () => {
  const rpta = await axios.get(URL_BACKENDo + "/user");
  return rpta;
};

export const getUsuarioComboBox = async () => {
  const rpta = await axios.get(URL_BACKENDo + "/user_cliente");
  return rpta;
};
export const getUsuarioComboBoxCliente = async () => {
  const rpta = await axios.get(URL_BACKENDo + "/user_combocliente");
  return rpta;
};

export const postUsuario = async (objUsuario) => {
  const rpta = await axios.post(
    `${URL_BACKENDo}/user`,
    JSON.stringify(objUsuario),
    { headers: { "Content-type": "application/json" } }
  );
  return rpta;
};

export const buscarOneUser = async (objUsuario) => {
  const rpta = await axios.put(`${URL_BACKENDo}/usuario/${objUsuario}`);
  return rpta;
};

export const putUsuarioById = async (objUsuario) => {
  const rpta = await axios.put(
    `${URL_BACKENDo}/user/${objUsuario}`,
    JSON.stringify(objUsuario),
    { headers: { "Content-type": "application/json" } }
  );
  return rpta;
};

export const putDeleteUsuario = async (id) => {
  const rpta = await axios.put(`${URL_BACKENDo}/user_cliente/${id}`);
  return rpta;
};

export const postVerificar = async (token) => {
  const rpta = await axios.post(`${URL_BACKENDo}/verificar`, null, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return rpta;
};
