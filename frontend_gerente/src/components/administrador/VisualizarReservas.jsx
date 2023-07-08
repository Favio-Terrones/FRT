
const VisualizarReservas = () => {
  return (
    <div class="mx-auto w-full p-8">
   
    <div className="">
      <h2 className="text-right my-2 text-2xl text-red-800  mr-10">
        La Bisteca{" "}
      </h2>
      <h1 className="text-right my-2 text-1xl text-red  mr-10">
        Pasta & Grill
      </h1>
    </div>
    <div class="mb-4">
    <h1 class="text-3xl font-bold mb-6 text-red-800 ">Reservas</h1>
      <input
        id="inputUsuario"
        type="text"
        class="border-gray-300 border rounded-md  w-1/3 py-2 px-3"
        placeholder="Ingrese el usuario"
      />
    </div>


    <table class="border-collapse w-full">
      <thead>
        <tr>
          <th class="border border-gray-300 px-4 py-2 w-1/3 ">Hora</th>
          <th class="border border-gray-300 px-4 py-2 w-1/3">Cantidad</th>
          <th class="border border-gray-300 px-4 py-2 w-1/3">
            Número de mesa
          </th>
        </tr>
      </thead>
      <tbody>
        {/* <!-- Aquí se pueden agregar filas dinámicamente con JavaScript --> */}
        <tr>
                  <td class="border border-gray-300 px-4 py-2">10:00 AM</td>
                  <td class="border border-gray-300 px-4 py-2">4</td>
                  <td class="border border-gray-300 px-4 py-2">1</td>
              </tr>
              <tr>
                  <td class="border border-gray-300 px-4 py-2">12:30 PM</td>
                  <td class="border border-gray-300 px-4 py-2">2</td>
                  <td class="border border-gray-300 px-4 py-2">3</td>
              </tr>
              <tr>
                  <td class="border border-gray-300 px-4 py-2">2:45 PM</td>
                  <td class="border border-gray-300 px-4 py-2">3</td>
                  <td class="border border-gray-300 px-4 py-2">2</td>
              </tr>
      </tbody>
    </table>
  </div>
  )
}

export default VisualizarReservas