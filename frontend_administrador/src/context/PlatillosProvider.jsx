import {createContext,useState,useEffect} from 'react'
import axios from "axios"

const PlatillosContext = createContext()


const PlatillosProvider = ({children}) => {

     
    const [platillos, setPlatillos] = useState([])

    useEffect(()=>{
       const obtenerPlatillos = async () => {
           
           try {

            const token  = localStorage.getItem("token");
            if(!token) return;

            const config = {
               headers: {
                     "Content-Type": "application/json",
                     Authorization: `Bearer ${token}`
               }
            }

            const {data} = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/ne-gestion-platillos/bstk/servicio-al-cliente/v1/listar-platillos`,config)
            setPlatillos(data.datos);
              
           } catch (error) {
            console.log(error);
           }
       }
       obtenerPlatillos();
    },[])
    

    const guardarPlatillo = async (platillo) => {
      try {
         
         const token  = localStorage.getItem("token");
         const config = {
            headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${token}`
            }
         }
         const {data} = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/ne-gestion-platillos/bstk/servicio-al-cliente/v1/crear-platillo`,platillo,config)
         
         console.log(data);
      } catch (error) {
         console.log(error.response.data.message);
      }
    }

    return (
        <PlatillosContext.Provider 
          value={{
               platillos,
               guardarPlatillo
          }}
        >
              {children}
        </PlatillosContext.Provider>
    )
}

export {
    PlatillosProvider
}

export default PlatillosContext;
