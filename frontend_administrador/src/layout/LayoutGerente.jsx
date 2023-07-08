import { Outlet, Link } from "react-router-dom";
import {FaRightFromBracket} from "react-icons/fa6";

const LayoutGerente = () => {
  return (
    <>
      <div className="flex h-screen ">
        <div className="w-1/4 bg-red-800 p-4">
          <h2 className="text-white text-6xl mt-14">La Bistecca</h2>
          <h3 className="text-white text-2xl mb-14">Pasta & Grill</h3>
          <ul className="my-4">
            <li>
              <Link
                to="reg-administrador"
                className="bg-white text-lg block py-2 my-12 text-center font-semibold"
              >
                Registrar Administrador
              </Link>
            </li>
            <li>
              <Link
                to="administradores"
                className="bg-white text-lg block py-2 my-12 text-center font-semibold"
              >
                Administradores
              </Link>
            </li>
            <li>
              <Link
                to="reg-sedes"
                className="bg-white text-lg block py-2 my-12 text-center font-semibold"
              >
                Registrar Sedes
              </Link>
            </li>
            <li>
              <Link
                to="sedes"
                className="bg-white text-lg block py-2 my-12 text-center font-semibold "
              >
                Sedes
              </Link>
            </li>
            <li>
              <Link
                to="reportes"
                className="bg-white text-lg block py-2 my-12 text-center font-semibold"
              >
                Reportes
              </Link>
            </li>
          </ul>
          <div className="flex my-64 items-center">
             <h2 className="bg-white w-full text-center font-semibold py-2 ">Hola, Gerente</h2>
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

export default LayoutGerente;
