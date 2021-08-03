import axios from "axios";
import { URL_BACKENDo } from "./../environments/enviromentsDjango";

export const getColaboradorById = async (objColaborador) => {
  const rpta = await axios.get(
    `${URL_BACKENDo}/ofertas_empleado/${objColaborador}`
  );
  return rpta;
};
export const getEmpleadoByIdUsu = async (objColaborador) => {
  const rpta = await axios.get(
    `${URL_BACKENDo}/usu_empleado/${objColaborador}`
  );
  return rpta;
};
export const postOferta = async (objOferta) => {
  const rpta = await axios.post(
    `${URL_BACKENDo}/oferta`,
    JSON.stringify(objOferta),
    { headers: { "Content-type": "application/json" } }
  );

  return rpta;
};

export const putDelete = async (objOferta) => {
  const rpta = await axios.put(`${URL_BACKENDo}/ofertas_empleado/${objOferta}`);
  return rpta;
};

export const putUpdate = async (objOferta) => {
  const rpta = await axios.put(
    `${URL_BACKENDo}/oferta/${objOferta.id}`,
    JSON.stringify(objOferta),
    { headers: { "Content-type": "application/json" } }
  );
  return rpta;
};
