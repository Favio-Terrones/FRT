import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const config = {
    headers: {
        Authorization: `Bearer ${cookies.get("token")}`,
    },
};

class usuariosPeticiones{
    constructor(){

    }

    login = async (user,pass) =>{
        let mensaje = "";
        await axios.post(`${import.meta.env.VITE_APP_API_URL}/ne-gestion-usuarios/bstk/servicio-al-cliente/v1/login`,{
            usuario : user,
            pass: pass
        })
        .then(res =>{
            if (res.data) {
                console.log(res.data)
                return res.data;
            }else {
                
                console.log('error en la peticion');
            }
        })
        .then(res=>{
            console.log(res.datos);
            mensaje = res.mensaje;
            if (res.datos.id_usuario) {
                // console.log("informacion: ",res.data);            
                cookies.set('id',res.datos.id_usuario,{path:'/'});
                cookies.set('nombre',res.datos.nombre,{path:'/'});
                cookies.set('rol',res.datos.id_rol,{path:'/'});
                cookies.set('sede',res.datos.id_sede,{path:'/'});
                cookies.set('token',res.datos.token,{path:'/'});
            }
        })
        .catch(err =>{
            console.log(err);
        })
        return mensaje;
    }

    deslogin = async (id)=>{
        let respuesta;
        await axios.put(`${import.meta.env.VITE_APP_API_URL}/ne-gestion-usuarios/bstk/servicio-al-cliente/v1/deslogin/${id}`, {
            accion: 17,
        }, config)
            .then(res => {
                console.log(res);
                respuesta = res.data;
                if(res.data.estado){
                    // console.log("informacion: ",res.data);            
                    cookies.remove('id',{path:'/'});
                    cookies.remove('nombre',{path:'/'});
                    cookies.remove('rol',{path:'/'});
                    cookies.remove('sede',{path:'/'});
                    cookies.remove('token',{path:'/'});
                }
            })
            .catch(err => {
                console.log(err);
                respuesta =  err;
            })
        return respuesta;
    }

    menu = async (rol)=>{
        let respuesta;
        await axios.get(`${import.meta.env.VITE_APP_API_URL}/ne-gestion-usuarios/bstk/servicio-al-cliente/v1/listar-opciones-menu/${rol}?accion=19`,config)
        .then(res =>{
            if (res.data) {return res.data;
            }else { console.log('error en la peticion');}
        })
        .then(res=>{
            respuesta = res
            console.log(res);
        })
        .catch(err =>{
            console.log(err);
        });
        return respuesta
    }

    create = async (data) =>{
        try {
            const response = await axios.post(
              `${import.meta.env.VITE_APP_API_URL}/ne-gestion-usuarios/bstk/servicio-al-cliente/v1/crear-usuario`,
              {
                accion: 8,
                usuario: data.usuario,
                pass: data.pass,
                nombre: data.nombres,
                apellido: data.apellidos,
                id_rol: 1,
                id_sede: parseInt(data.id_sede)
              },
              config
            );
        
            return response.data;
          } catch (error) {
            console.log(error);
            return null;
          }

    }

    getAdministradores = async (page, perPage, setAdministradores) => {
        try {
          const peticion = await axios.get(`${import.meta.env.VITE_APP_API_URL}/ne-gestion-usuarios/bstk/servicio-al-cliente/v1/listar-usuarios`, config);
          const startIndex = (page - 1) * perPage;
          const endIndex = startIndex + perPage;
          const paginatedData = peticion.data.slice(startIndex, endIndex);
          setAdministradores(paginatedData);
        } catch (error) {
          console.log(error);
        }
      };

}

export default usuariosPeticiones;