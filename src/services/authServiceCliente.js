import axios from "axios";
// import { URL_BACKEND_LOGIN } from "../environments/enviromentsLogin";
import { URL_BACKENDo } from "./../environments/enviromentsDjango";

export const postLoginCliente = async (objLogin) => {
  const rpta = await axios.post(
    `${URL_BACKENDo}/login`,
    JSON.stringify(objLogin),
    {
      headers: { "Content-type": "application/json" },
    }
  );
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
