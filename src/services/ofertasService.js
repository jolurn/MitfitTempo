import { URL_BACKEND } from "./../environments/environments";
import axios from "axios";

export const getOfertas = async () => {
  const rpta = await axios.get(URL_BACKEND + "/oferta");

  return rpta;
};
