import React, { useEffect, useState } from 'react';
import usuariosPeticiones from '../../apis/usuariosPeticiones';

const peticiones = new usuariosPeticiones();

const Administradores = () => {
  
  const [administradores, setAdministradores] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [adminsPerPage] = useState(10);
  
  useEffect(() => {
    const fetchAdministradores = async () => {
      await peticiones.getAdministradores(currentPage, adminsPerPage, setAdministradores);
    };
  
    fetchAdministradores();
  }, [currentPage, adminsPerPage]);
  

    useEffect(() => {
      console.log(administradores);
  
    }, [administradores]);

    const totalPages = administradores ? Math.ceil(administradores.length / adminsPerPage) : 0;
  return (
    <div className="mt-20 mx-10">
      <h2 className="text-right my-2 text-2xl text-red-800 mr-10">La Bisteca</h2>
      <h1 className="text-right my-2 text-1xl text-red mr-10">Pasta & Grill</h1>
      <h3 className="text-left text-4xl ml-10">Administrador</h3>
      {administradores ? (
        <table className="min-w-full divide-y divide-gray-200 mt-10">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Nombre
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Apellidos
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                rol
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Sede
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {administradores.filter(admin=>admin.id_rol===1).map((administrador) => (
              <tr key={administrador.id_usuario}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{administrador.nombre}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{administrador.apellido}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">administrador</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{administrador.id_sede==1?'Chacarilla':administrador.id_sede==2?'San Isidro':'Salaverry'}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Cargando administradores...</p>
      )}
        <div >
        <button
          type="submit"
          className="my-10 mr-10 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded text-lg"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Anterior
        </button>
        <button
          type="submit"
          className="mf-10 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded text-lg"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Siguiente
        </button>
      </div>
      <p>Página {currentPage} de {totalPages}</p>
    </div>
  );
};

export default Administradores;
