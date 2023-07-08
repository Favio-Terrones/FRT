import React, { useState, useEffect } from 'react';
import sedesPeticiones from '../../apis/sedesPeticiones';

const peticiones = new sedesPeticiones();

const Sedes = () => {
  const [sedes, setSedes] = useState([]);
  const [sedeSeleccionada, setSedeSeleccionada] = useState(null);
  const [datosActualizados, setDatosActualizados] = useState({});

  useEffect(() => {
    obtenerSedes();
  }, []);

  const obtenerSedes = async () => {
    try {
      const respuesta = await peticiones.find();
      setSedes(respuesta);
    } catch (error) {
      console.log(error);
    }
  };

  const handleActualizar = async (idSede) => {
    try {
      const sedeActualizada = datosActualizados[idSede];

      const respuesta = await peticiones.edit(idSede, sedeActualizada);

      console.log("Sede actualizada con éxito:", respuesta);

      
      obtenerSedes();

      setDatosActualizados({ ...datosActualizados, [idSede]: {} });
    } catch (error) {
      console.log("Error al actualizar la sede:", error);
    }
  };

  const handleEliminar = async (idSede) => {
    try {
      if (window.confirm('¿Estás seguro de que deseas eliminar esta sede?')) {
        setSedeSeleccionada(idSede);
        await peticiones.eliminarSede(idSede);
        obtenerSedes();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (event, idSede) => {
    const { name, value } = event.target;
    setDatosActualizados((prevState) => ({
      ...prevState,
      [idSede]: { ...prevState[idSede], [name]: value },
    }));
  };

  return (
    <div className="mt-20 mx-10">
      <h2 className="text-right my-2 text-2xl text-red-800 mr-10">La Bisteca</h2>
      <h1 className="text-right my-2 text-1xl text-red mr-10">Pasta & Grill</h1>
      <h3 className="text-left text-4xl ml-10">Sedes</h3>
      <table className="min-w-full divide-y divide-gray-200 mt-10">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Sede
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Dirección
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Editar
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Eliminar
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {sedes.map((sede) => (
            <tr key={sede.id_sede}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{sede.sede}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{sede.ubicacion}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <input
                  type="text"
                  name="nombre"
                  value={datosActualizados[sede.id_sede]?.nombre || ''}
                  onChange={(event) => handleInputChange(event, sede.id_sede)}
                  className="w-20 px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Nuevo nombre"
                />
                <input
                  type="text"
                  name="ubicacion"
                  value={datosActualizados[sede.id_sede]?.ubicacion || ''}
                  onChange={(event) => handleInputChange(event, sede.id_sede)}
                  className="w-20 px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Nueva ubicación"
                />
                <input
                  type="text"
                  name="foto"
                  value={datosActualizados[sede.id_sede]?.foto || ''}
                  onChange={(event) => handleInputChange(event, sede.id_sede)}
                  className="w-20 px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Nueva foto"
                />
                <button
                  type="button"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleActualizar(sede.id_sede)}
                >
                  Actualizar
                </button>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button
                  type="button"
                  className="ml-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                 onClick={() => handleEliminar(sede.id_sede)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Sedes;
