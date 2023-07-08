import { useState } from "react";
import Alerta from "../components/Alerta";
import axios from "axios";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [usuario, setUsuario] = useState("");
  const [pass, setPass] = useState("");
  const [alerta, setAlerta] = useState({});

   const {setAuth} =  useAuth()
   const navigate = useNavigate();

  const handleSubmit = async e => {
     e.preventDefault();
    
     if([usuario,pass].includes('')){
        setAlerta({msg: "Hay campos vacios", error: true});
        return;
     }
     setAlerta({})
     
     //Logearse

     try {
        const url = `${import.meta.env.VITE_BACKEND_URL}/ne-gestion-usuarios/bstk/servicio-al-cliente/v1/login`
        const respuesta = await axios.post(url,{
              usuario,pass
           })

        localStorage.setItem("idUnicobsk",respuesta.data.datos.id_usuario);   
        localStorage.setItem("token",respuesta.data.datos.token);
        setAuth(respuesta.data.datos); 
        navigate("/administrador")
        
     } catch (error) {
        console.log(error);
     }


  }
  
  const {msg} = alerta
  

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen ">
      <div className=" p-4 flex items-center justify-center h-screen">
        <div className="container mx-auto">
        {msg && <Alerta 
              alerta={alerta}
            />}
          <form className="max-w-md mx-auto p-4" onSubmit={handleSubmit}>
            <h2 className="text-red-700 md:text-6xl text-3xl">La Bistecca</h2>
            <h3 className="text-2xl my-3">Pasta & Grill</h3>
            <div className="mb-4">
              <label className="block mb-2 font-bold text-gray-700" htmlFor="user">
                Usuario:
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                type="text"
                id="user"
                name="user"
                placeholder="Ingrese su usuario"
                value={usuario}
                onChange={e=> setUsuario(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-bold text-gray-700" htmlFor="password">
                Contraseña:
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                type="password"
                id="password"
                name="password"
                placeholder="Ingrese su contraseña"
                value={pass}
                onChange={e=>setPass(e.target.value)}
              />
            </div>
        
            <div className="flex justify-center">
              <button
                className="px-4 py-2 text-white bg-red-800 rounded-md hover:bg-red-700 focus:outline-none w-full md:w-60"
                type="submit"
              >
                Ingresar
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="flex items-center h-screen">
        <img src="/img/banner2.jpeg" className="w-full h-auto md:h-full mx-auto" />
      </div>
    </div>
  );
};

export default Login;
