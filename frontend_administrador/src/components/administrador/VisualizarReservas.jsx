import ListadoReservas from "./ListadoReservas"

const VisualizarReservas = () => {
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
    <h1 className="text-3xl font-bold mb-6 text-red-800 ">Reservas</h1>
      <input
        id="inputUsuario"
        type="text"
        className="border-gray-300 border rounded-md  w-1/3 py-2 px-3"
        placeholder="Ingrese el usuario"
      />
    </div>

<div class="overflow-auto max-h-[72vh]">
    <table className="border-collapse min-w-full ">
      <thead>
        <tr>
          <th className="border border-gray-300 px-4 py-2 w-1/4 ">Cliente</th>
          <th className="border border-gray-300 px-4 py-2 w-1/4">Fecha</th>
          <th className="border border-gray-300 px-4 py-2 w-1/4">Sede</th>
          <th className="border border-gray-300 px-4 py-2 w-1/4">N°Sillas</th>
        </tr>
      </thead>
      <tbody  className="">
        {/* <!-- Aquí se pueden agregar filas dinámicamente con JavaScript --> */}

            <ListadoReservas className=""/>     
      
      </tbody>
    </table>
  </div>
  </div>
  )
}

export default VisualizarReservas