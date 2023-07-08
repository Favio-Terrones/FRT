import React ,{useState}from "react";
import Cookies from "universal-cookie";
import usuariosPeticiones from "../apis/usuariosPeticiones";

const cookies = new Cookies();
const peticiones = new usuariosPeticiones();

const Login = () => {


  const [inputUser, setInputUser] = useState('');
  const [inputPass, setInputPass] = useState('');

  const iniciarSesion = async (e)=>{
      console.log(inputUser,inputPass)
      e.preventDefault();
      const user= inputUser
      const pass= inputPass
      console.log(user,pass);
      let mensaje = await peticiones.login(user,pass);
      if(cookies.get('id')){
          window.location.href = './gerente';
      }else{
          document.getElementById('text_mensaje').textContent = mensaje;
      }
    
  }

  

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen ">
      <div className="p-4 flex items-center justify-center h-screen">
        <div className="container mx-auto">
          <form className="max-w-md mx-auto p-4">
            <h2 className="text-red-700 md:text-6xl text-3xl">La Bistecca</h2>
            <h3 className="text-2xl my-3">Pasta & Grill</h3>
            <div className="mb-4">
              <label className="block mb-2 font-bold text-gray-700" htmlFor="user">
                Usuario:
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                type="text"
                placeholder="Ingrese su usuario"
                value={inputUser}
                onChange={(e) => setInputUser(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-bold text-gray-700" htmlFor="password" id='lg_pass'>
                Contraseña:
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                type="password"
                placeholder="Ingrese su contraseña"
                value={inputPass}
                onChange={(e) => setInputPass(e.target.value)}
              />
            </div>
            <div className="flex justify-center">
              <button
                className="px-4 py-2 text-white bg-red-800 rounded-md hover:bg-red-700 focus:outline-none w-full md:w-60"
                type="submit"
                onClick={iniciarSesion}
              >
                Ingresar
              </button>
            </div>
            <p id="text_mensaje" className="text_mensaje"></p>
          </form>
        </div>
      </div>
      <div className="flex items-center h-screen">
        <img src="/img/banner2.jpeg" className="w-full h-auto md:h-full mx-auto" />
      </div>
    </div>
  )
};

export default Login;
