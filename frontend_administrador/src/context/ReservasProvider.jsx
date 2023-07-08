import {createContext,useState,useEffect} from 'react'
import axios from "axios"


const ReservasContext = createContext();

const ReservasProvider = ({children}) => {

    const [reservas, setReservas] = useState([])
 

    // useEffect(()=>{
    //     const obtenerReservas = async() => {
    //          try {
    //             const token  = localStorage.getItem("token");
    //             if(!token) return;
    
    //             const config = {
    //                headers: {
    //                      "Content-Type": "application/json",
    //                      Authorization: `Bearer ${token}`
    //                }
    //             }

    //    const {data} = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/ne-gestion-reservaciones/bstk/servicio-al-cliente/v1/listar-reservaciones`,config)
    //    setReservas(data);

    //          } catch (error) {
    //             console.log(error);
    //          }
    //     }
    //     obtenerReservas();
    // },[])


   const obtenerReservas = async() =>{
    try {
        const token  = localStorage.getItem("token");
        if(!token) return;

        const config = {
           headers: {
                 "Content-Type": "application/json",
                 Authorization: `Bearer ${token}`
           }
        }

        const {data} = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/ne-gestion-reservaciones/bstk/servicio-al-cliente/v1/listar-reservaciones`,config)
        setReservas(data);

     } catch (error) {
        console.log(error);
     }

   }

    return (
        <ReservasContext.Provider
         value={{
             reservas,
             obtenerReservas
         }}
        >
            {children}
        </ReservasContext.Provider>
    )

}


export {
     ReservasProvider
}

export default ReservasContext;