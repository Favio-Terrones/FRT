import React, { useState } from 'react';
import sedesPeticiones from '../../apis/sedesPeticiones';

const peticiones = new sedesPeticiones();

const RegistrarSede = () => {

  const [nombre, setNombre] = useState('');
  const [ubicacion, setUbicacion] = useState('');
  const [foto, setFoto] = useState('');


  const handleAgregar = async () => {
    try {
      let sede = {
        nombre: nombre,
        ubicacion: ubicacion,
        foto: foto,
      };
      let response = await peticiones.create(sede);
  
      if (response.data.estado) {
        setNombre('');
        setUbicacion('');
        setFoto('');
        alert('Registrado con éxito');
      } else {
        alert('Error en la creación de la sede: ' + response.data.mensaje);
      }
    } catch (error) {
      console.log(error);
      alert('Error en la creación de la sede');
    }
    };
   
  

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes realizar la lógica para enviar los datos de la sede al servidor
    // por ejemplo, haciendo una solicitud HTTP a una API

    // Limpia los campos del formulario después del envío
    setNombre('');
    setUbicacion('');
    setFoto('');
  };

  const capturarImagen = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setFoto(reader.result); // Almacena la imagen seleccionada en el estado del componente
    };

    if (file) {
      reader.readAsDataURL(file); // Convierte el archivo en formato Base64
    }
  };

  return (
    <div className="mt-20 mx-10">
      <h2 className="text-right my-2 text-2xl text-red-800 mr-10">La Bisteca</h2>
      <h1 className="text-right my-2 text-1xl text-red mr-10">Pasta & Grill</h1>
      <h3 className="text-left text-4xl ml-10">Registrar Sede</h3>
      <form onSubmit={handleSubmit} className="mx-10 mt-20">
        <div className="grid grid-cols-2 gap-4 mt-10">
          <div>
            <label htmlFor="nombre" className="block mb-2">
              Nombre:
            </label>
            <input
              type="text"
              id="nombre"
              value={nombre}
              onChange={(event) => setNombre(event.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="ubicacion" className="block mb-2">
              Ubicación:
            </label>
            <input
              type="text"
              id="ubicacion"
              value={ubicacion}
              onChange={(event) => setUbicacion(event.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="foto" className="block mb-2">
              Foto:
            </label>
            <input
              type="file"
              id="foto"
              onChange={capturarImagen}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>
        <div className="flex justify-center mt-20 text-4x1">
          <button
            type="submit"
            className="mr-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
            onClick={handleAgregar}
          >
            Agregar
          </button>
          
        </div>
      </form>
    </div>
  );
};

export default RegistrarSede;
