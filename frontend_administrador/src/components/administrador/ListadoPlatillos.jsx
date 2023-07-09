import usePlatillos from "../../hooks/usePlatillos"
import Platillo from "./Platillo";

const ListadoPlatillos = () => {
  
   const {platillos} = usePlatillos(); 
   //console.log(platillos);

  return (
   
   
    <div className="grid grid-cols-5 gap-4 p-5 bg-red-500 overflow-auto max-h-[72vh]">
        {platillos.map(platillo => (
            <Platillo
                key={platillo["id_platillo"]}
                platillo={platillo}
            />
        ))}
    </div>


  )
}

export default ListadoPlatillos