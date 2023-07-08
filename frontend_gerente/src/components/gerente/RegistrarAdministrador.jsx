import React, { useState } from 'react'
import usuariosPeticiones from '../../apis/usuariosPeticiones'
const peticiones = new usuariosPeticiones();

const RegistrarAdministrador = () => {

  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [sede, setSede] = useState('');
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');

  const handleSubmit = (event) => {
    
    
  };

  const guardarUsuario = async ()=>{

    let usuario = {
        nombres : nombre,
        apellidos : apellido,
        usuario : nombreUsuario,
        pass : contraseña,
        id_sede : sede=='Chacarilla'? 1: sede=='San Isidro' ? 2  : 3
    }
    // console.log(usuario);
    let respuesta = await peticiones.create(usuario);
    
    console.log(respuesta);

    if(respuesta){
        setNombre('');
        setApellido('');
        setEmail('');
        setSede('');
        setNombreUsuario('');
        setContraseña('');
        console.log("registrado con exito")
        alert( "usuario creado correctamente")
    }else{
        alert( "Error en la creacion del usuario")

    }

  }


  return(
    <div className="mt-20 mx-10" >
   
    <h2 className="text-right my-2 text-2xl text-red-800  mr-10">La Bisteca </h2> 
    <h1 className="text-right my-2 text-1xl text-red  mr-10">Pasta & Grill</h1>
    <h3 className="text-left  text-4xl  ml-10">Registrar Administrador</h3>

    <form onSubmit={handleSubmit} className="mx-10 mt-20 ">
    
      <div className="flex grid grid-cols-2 gap-4 mt-10">
        <div>
          <label htmlFor="nombre" className="block mb-2 ">
            Nombre:
          </label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(event) => setNombre(event.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md "
          />
        </div>
        <div>
          <label htmlFor="apellido" className="block mb-2 ">
            Apellidos:
          </label>
          <input
            type="text"
            id="apellido"
            value={apellido}
            onChange={(event) => setApellido(event.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2">
            Correo Electrónico:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="sede" className="block mb-2">
            Sede:
          </label>
          <select type="text"
            id="sede"
            value={sede}
            onChange={(event) => setSede(event.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md">
          <option>
                 --Seleccionar--
              </option>
              <option>Chacarilla</option>
              <option>San Isidro</option>
              <option>Salaverry</option>
          </select>
          
        </div>
        <div>
          <label htmlFor="nombreUsuario" className="block mb-2">
            Nombre de Usuario:
          </label>
          <input
            type="text"
            id="nombreUsuario"
            value={nombreUsuario}
            onChange={(event) => setNombreUsuario(event.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="contraseña" className="block mb-2">
            Contraseña:
          </label>
          <input
            type="password"
            id="contraseña"
            value={contraseña}
            onChange={(event) => setContraseña(event.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md mb-4"
          />
        </div>
      </div>
      <div className="flex justify-center">
          <button
            type="submit"
            className="mt-20 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded text-lg"
            onClick={guardarUsuario}
          >
            Registrar Administrador
          </button>
        </div>  
    </form>
    </div>
    
  )
};
  
  export default RegistrarAdministrador