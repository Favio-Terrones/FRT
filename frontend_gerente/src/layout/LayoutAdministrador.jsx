import { Outlet, Link } from "react-router-dom";
import {FaRightFromBracket} from "react-icons/fa6";

const LayoutAdministrador = () => {
  return (
    <>
      <div className="flex h-screen ">
        <div className="w-1/4 bg-red-800 p-4">
          <h2 className="text-white text-6xl mt-14">La Bistecca</h2>
          <h3 className="text-white text-2xl mb-14">Pasta & Grill</h3>
          <ul className="my-4">
            <li>
              <Link
                to="platillos"
                className="bg-white text-lg block py-2 my-12 text-center font-semibold"
              >
                Administrador de platillos
              </Link>
            </li>
            <li>
              <Link
                to="mesas"
                className="bg-white text-lg block py-2 my-12 text-center font-semibold"
              >
                Administrador de Mesas
              </Link>
            </li>
            <li>
              <Link
                to="reservas"
                className="bg-white text-lg block py-2 my-12 text-center font-semibold"
              >
                Visualizar Reservas
              </Link>
            </li>
            <li>
              <Link
                to="est-reservas"
                className="bg-white text-lg block py-2 my-12 text-center font-semibold "
              >
                Revisar estadística de reservas
              </Link>
            </li>
            <li>
              <Link
                to="est-platillos"
                className="bg-white text-lg block py-2 my-12 text-center font-semibold"
              >
                Revisar estadística de platillos
              </Link>
            </li>
          </ul>
          <div className="flex my-64 items-center">
             <h2 className="bg-white w-full text-center font-semibold py-2 ">Hola, Administrador</h2>
             <FaRightFromBracket className="text-4xl text-white  relative left-2 cursor-pointer"/> 
          </div>
        </div>
        <div className="w-3/4 bg-gray-200 p-4">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default LayoutAdministrador;
