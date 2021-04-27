import { URL_BACKEND } from "./../environments/environments";
import axios from "axios";

export const getEmpleado = async () => {
  const rpta = await axios.get(URL_BACKEND + "/empleado");

  return rpta;
};
