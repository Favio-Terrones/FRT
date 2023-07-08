import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const config = {
    headers: {
        Authorization: `Bearer ${cookies.get("token")}`,
    },
};

class sedesPeticiones{
    constructor(){

    }

    find = async () =>{
        let informacion = []
        await axios.get(`${import.meta.env.VITE_APP_API_URL}/ne-gestion-sedes/bstk/servicio-al-cliente/v1/listar-sedes`,config)
        .then(res =>{
            if (res.data) {return res.data;
            }else { console.log('error en la peticion');}
        })
        .then(res=>{
            informacion = res.datos;
        })
        .catch(err =>{
            console.log(err);
        });

        return informacion;
    }
    findPorId = async (idSede) => {
      try {
        const respuesta = await axios.get(
          `${import.meta.env.VITE_APP_API_URL}/ne-gestion-sedes/bstk/servicio-al-cliente/v1/buscar-sede/${idSede}`,
          config
        );
        return respuesta.data;
      } catch (error) {
        console.log(error);
        throw new Error('Error al buscar la sede por su ID');
      }
    };
    
    create = async (data) => {
        try {
          const response = await axios.post(
            `${import.meta.env.VITE_APP_API_URL}/ne-gestion-sedes/bstk/servicio-al-cliente/v1/crear-sede`,
            {
              accion: 21,
              sede: data.nombre,
              ubicacion: data.ubicacion,
              foto: data.foto,
            },
            config
          );
          
          return response;
        } catch (error) {
          console.log(error);
          throw error;
        }
      };

      edit = async (idSede, data) => {
        try {
          const response = await axios.put(
            `${import.meta.env.VITE_APP_API_URL}/ne-gestion-sedes/bstk/servicio-al-cliente/v1/actualizar-sede/${idSede}`,
            {
              accion: 21,
              sede: data.nombre,
              ubicacion: data.ubicacion,
              foto: data.foto,
            },
            config
          );
      
          return response;
        } catch (error) {
          console.log(error);
          throw error;
        }
      };

      eliminarSede = async (idSede) => {
        try {
          const response = await axios.delete(
            `${import.meta.env.VITE_APP_API_URL}/ne-gestion-sedes/bstk/servicio-al-cliente/v1/eliminar-sede/${idSede}`,
            config
          );
          return response;
        } catch (error) {
          console.log(error);
          throw error;
        }
      };

}

export default sedesPeticiones;