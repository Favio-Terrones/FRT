const AdministradorMesas = () => {
  return (
    <div className="mx-auto w-full p-8">
   
      <div className="">
        <h2 className="text-right my-2 text-2xl text-red-800  mr-10">
          La Bisteca{" "}
        </h2>
        <h1 className="text-right my-2 text-1xl text-red  mr-10">
          Pasta & Grill
        </h1>
      </div>
      <div className="mb-4">
      <h1 className="text-3xl font-bold mb-6 text-red-800 ">Administrador de Mesas</h1>
        <label htmlFor="inputMesa" className="block font-medium">
          Número de mesa:
        </label>
        <input
          id="inputMesa"
          type="text"
          className="border-gray-300 border rounded-md  w-1/3 py-2 px-3"
          placeholder="Ingrese el número de mesa"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="inputCantidad" className="block font-medium">
          Cantidad:
        </label>
        <input
          id="inputCantidad"
          type="number"
          className="border-gray-300 border rounded-md  w-1/3 py-2 px-3"
          placeholder="Ingrese la cantidad"
          min="0"
        />
      </div>

      <table className="border-collapse w-full">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2 w-1/3 ">Hora</th>
            <th className="border border-gray-300 px-4 py-2 w-1/3">Cantidad</th>
            <th className="border border-gray-300 px-4 py-2 w-1/3">
              Número de mesa
            </th>
          </tr>
        </thead>
        <tbody>
          {/* <!-- Aquí se pueden agregar filas dinámicamente con JavaScript --> */}
          <tr>
                    <td className="border border-gray-300 px-4 py-2">10:00 AM</td>
                    <td className="border border-gray-300 px-4 py-2">4</td>
                    <td className="border border-gray-300 px-4 py-2">1</td>
                </tr>
                <tr>
                    <td className="border border-gray-300 px-4 py-2">12:30 PM</td>
                    <td className="border border-gray-300 px-4 py-2">2</td>
                    <td className="border border-gray-300 px-4 py-2">3</td>
                </tr>
                <tr>
                    <td className="border border-gray-300 px-4 py-2">2:45 PM</td>
                    <td className="border border-gray-300 px-4 py-2">3</td>
                    <td className="border border-gray-300 px-4 py-2">2</td>
                </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AdministradorMesas;
