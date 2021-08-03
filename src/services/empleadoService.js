import { URL_BACKEND } from "./../environments/environments";
import { URL_BACKENDo } from "./../environments/enviromentsDjango";
import axios from "axios";

export const postEmpleado = async (objCliente) => {
  const rpta = await axios.post(
    `${URL_BACKENDo}/empleados`,
    JSON.stringify(objCliente),
    { headers: { "Content-type": "application/json" } }
  );
  return rpta;
};

export const getEmpleado = async () => {
  const rpta = await axios.get(URL_BACKENDo + "/empleados");
  return rpta;
};
// export const getEmpleado = async () => {
//   const rpta = await axios.get(URL_BACKEND + "/empleado");
//   return rpta;
// };
export const putEmpleadoById = async (objEmpleado) => {
  const rpta = await axios.put(
    `${URL_BACKENDo}/empleado/${objEmpleado.id}`,
    JSON.stringify(objEmpleado),
    { headers: { "Content-type": "application/json" } }
  );
  return rpta;
};

export const postUploadImagenByEmpleadoId = async (file, banner, video, id) => {
  let miFormData = new FormData();
  miFormData.append("imagen", file);
  miFormData.append("banner", banner);
  miFormData.append("video", video);
  miFormData.append("id", id);

  const rpta = await axios.post(
    `${URL_BACKENDo}/empleado/imagen/upload`,
    miFormData,
    {
      headers: {
        "Content-type": "multipart/form-data",
      },
    }
  );
  return rpta;
};
export const postUploadImagenByEmpleadoIdPerfil = async (file, id) => {
  let miFormData = new FormData();
  miFormData.append("imagen", file);
  miFormData.append("id", id);

  const rpta = await axios.post(
    `${URL_BACKENDo}/empleado/imagen/perfil`,
    miFormData,
    {
      headers: {
        "Content-type": "multipart/form-data",
      },
    }
  );
  return rpta;
};
export const postUploadImagenByEmpleadoIdBanner = async (banner, id) => {
  let miFormData = new FormData();
  miFormData.append("banner", banner);
  miFormData.append("id", id);

  const rpta = await axios.post(
    `${URL_BACKENDo}/empleado/imagen/banner`,
    miFormData,
    {
      headers: {
        "Content-type": "multipart/form-data",
      },
    }
  );
  return rpta;
};
export const postUploadImagenByEmpleadoIdVideo = async (video, id) => {
  let miFormData = new FormData();
  miFormData.append("video", video);
  miFormData.append("id", id);

  const rpta = await axios.post(
    `${URL_BACKENDo}/empleado/imagen/video`,
    miFormData,
    {
      headers: {
        "Content-type": "multipart/form-data",
      },
    }
  );
  return rpta;
};

export const postUploadImagenByEmpleadoPerfilBanner = async (
  file,
  banner,
  id
) => {
  let miFormData = new FormData();
  miFormData.append("imagen", file);
  miFormData.append("banner", banner);
  miFormData.append("id", id);

  const rpta = await axios.post(
    `${URL_BACKENDo}/empleado/imagen/perfilbanner`,
    miFormData,
    {
      headers: {
        "Content-type": "multipart/form-data",
      },
    }
  );
  return rpta;
};

export const postUploadImagenByEmpleadoPerfilVideo = async (
  file,
  video,
  id
) => {
  let miFormData = new FormData();
  miFormData.append("imagen", file);
  miFormData.append("video", video);
  miFormData.append("id", id);

  const rpta = await axios.post(
    `${URL_BACKENDo}/empleado/imagen/perfilvideo`,
    miFormData,
    {
      headers: {
        "Content-type": "multipart/form-data",
      },
    }
  );
  return rpta;
};

export const postUploadImagenByEmpleadoBannerVideo = async (
  banner,
  video,
  id
) => {
  let miFormData = new FormData();
  miFormData.append("banner", banner);
  miFormData.append("video", video);
  miFormData.append("id", id);

  const rpta = await axios.post(
    `${URL_BACKENDo}/empleado/imagen/bannervideo`,
    miFormData,
    {
      headers: {
        "Content-type": "multipart/form-data",
      },
    }
  );
  return rpta;
};

export const deleteEmpleadoById = async (id) => {
  const rpta = await axios.put(`${URL_BACKENDo}/usu_empleado/${id}`);
  return rpta;
};
