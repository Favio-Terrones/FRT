import useReservas from "../../hooks/useReservas"
import Reserva from "./Reserva";



const ListadoReservas = () => {

   const {reservas} = useReservas();


  return (
 
<>
     {reservas.map(reserva => (
         <tr  key={reserva.id_reservacion} >
             <Reserva 
                reserva={reserva} 
             />
         </tr>
     ))}
     </>

  )
}

export default ListadoReservas