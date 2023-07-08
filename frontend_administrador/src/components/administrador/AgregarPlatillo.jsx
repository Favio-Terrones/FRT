import { useState } from "react";
import usePlatillos from "../../hooks/usePlatillos";
import Alerta from "../Alerta";

const AgregarPlatillo = () => {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState(0);
  const [categoria, setCategoria] = useState(0);

  const [alerta, setAlerta] = useState({});

  const foto =
    "https://tofuu.getjusto.com/orioneat-prod/wTDsHcoqJ8ouSQZqL-Lomo%20fino%20junior%20con%20papas%20-%20Las%20Canastas.jpg";

  const { guardarPlatillo } = usePlatillos();

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([nombre, descripcion, precio, categoria].includes("")) {
      setAlerta({
        msg: "Todos los campos son obligatorios",
        error: true,
      });
      return;
    }

    setAlerta({ msg: "Platillo Agregado Correctamente", error: false });
    guardarPlatillo({
      nombre,
      descripcion,
      precio,
      id_categoria: categoria,
      foto,
    });
    setTimeout(() => {
      setAlerta({})
    }, 3000);
  
  };

  const { msg } = alerta;

  return (
    <div className="flex py-40">
      <div className="w-4/5 p-4  border-r border-gray-500">
        <h3 className="text-4xl font-bold text-red-800 text-center mb-11">
          Agregar Platillo
        </h3>
        <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="namePlatillo" className="block mb-2">
              Nombre del platillo:
            </label>
            <input
              type="text"
              id="namePlatillo"
              name="namePlatillo"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="costoPlatillo" className="block mb-2">
              Costo Platillo:
            </label>
            <input
              type="number"
              id="costoPlatillo"
              name="costoPlatillo"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              value={precio}
              onChange={(e) => setPrecio(Number(e.target.value))}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="costoPlatillo" className="block mb-2">
              Categoría:
            </label>
            <select
              className="w-full px-x py-2 border-gray-300 rounded-lg"
              onChange={(e) => setCategoria(Number(e.target.value))}
              value={categoria}
            >
              <option>--Seleccionar--</option>
              <option value={1}>Carnes</option>
              <option value={2}>Pastas</option>
              <option value={3}>Ensaladas</option>
              <option value={4}>Parrillas</option>
              <option value={5}>Wok</option>
              <option value={6}>Ceviches y Causas</option>
              <option value={7}>Comida Criolla</option>
              <option value={8}>Arroces</option>
              <option value={9}>Dim Sun</option>
              <option value={10}>Hamburguesas</option>
              <option value={11}>Pizzas</option>
              <option value={12}>Caja China</option>
              <option value={13}>Antipastos</option>
              <option value={14}>Postres</option>
              <option value={15}>Sopas</option>
              <option value={16}>Vinos</option>
              <option value={17}>Bebidas y Cocktails</option>
              <option value={18}>Prueba</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="infoPlatillo" className="block mb-2">
              Información del platillo
            </label>
            <textarea
              id="infoPlatillo"
              name="infoPlatillo"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            ></textarea>
          </div>

          {msg && <Alerta alerta={alerta} />}

          <div className="flex justify-center">
            <button
              type="button"
              className="mr-2 px-4 py-2 bg-red-800 text-white rounded"
            >
              Cargar
            </button>
            <button
              type="button"
              className="px-4 py-2 bg-red-800 text-white mr-2 rounded"
            >
              Modificar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-red-800 text-white rounded"
            >
              Ingresar
            </button>
          </div>
        </form>
      </div>
      <div className="w-1/5 p-4">
        <div className="max-w-xs mx-auto">
          <img
            src="/img/carne.jpg"
            alt="Lomo Fino"
            className="mb-4"
          />
          <h2 className="text-lg font-bold mb-2">Plato del día</h2>
          <p className="text-gray-700 mb-4">
            Lomo Fino de Cordero, la mejor carne para tu consumo, auspicido por industrias
            doge.
          </p>
          <p className="text-lg font-bold text-end text-red-800 ">
            Precio: S/45.99
          </p>
        </div>
      </div>
    </div>
  );
};

export default AgregarPlatillo;
