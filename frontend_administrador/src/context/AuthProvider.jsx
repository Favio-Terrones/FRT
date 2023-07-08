import {useState,useEffect,createContext} from 'react'
import axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    
     const [cargando, setCargando] = useState(true)
     const [auth,setAuth] = useState({})

     useEffect(()=>{
        const autenticarUsuario = async() => {
               const token = localStorage.getItem("token");
               
               if(!token) {
                setCargando(false)
                return
               }

               console.log("Si hay token");

               const config = {
                  headers: {
                      "Content-Type": "application/json",
                      Authorization: `Bearer ${token}`
                  }
               }
               
               try {
                //    const {data} = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/ne-gestion-platillos/bstk/servicio-al-cliente/v1/listar-platillos`,config)  
                 const {data} = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/ne-gestion-usuarios/bstk/servicio-al-cliente/v1/buscar-usuario/${localStorage.getItem("idUnicobsk")}`,config)
                   //setAuth(data)
                   setAuth(data[0]);
               } catch (error) {
                   console.log(error.response.data.message);
                   setAuth({})
               }

               setCargando(false)
        }
        autenticarUsuario();
     },[])

    const cerrarSesion = () => {
          localStorage.removeItem('token');
          setAuth({})
    }


    return (
     <AuthContext.Provider
       value={{
          auth,
          setAuth,
          cargando,
          cerrarSesion
       }}
     >
           {children}
     </AuthContext.Provider>
    )
}

export {
    AuthProvider
}


export default AuthContext