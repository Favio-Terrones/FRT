import { Link } from "react-router-dom";
import ListadoPlatillos from "./ListadoPlatillos";



const AdministrarPlatillos = () => {



  return (


    <div className="container mx-auto py-16">
    <div>
        <h2 className="text-right my-2 text-2xl text-red-800  mr-10">La Bisteca </h2> 
        <h1 className="text-right my-2 text-1xl text-red  mr-10">Pasta & Grill</h1>
    </div>
      <div className="flex items-center justify-start mb-4 gap-4">
        <input
          type="text"
          placeholder="Buscar platillo"
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        />
        <Link className="px-4 py-2 bg-red-800 text-white rounded-lg" to="/administrador/agregar-platillo"> 
          Agregar Platillo
        </Link>
      </div>

       {/* ACA VAN LOS PLATILLOS */}

      <div className="">
          <ListadoPlatillos /> 
      </div>


    </div>
  );
};

export default AdministrarPlatillos;
