import React, { useState, useEffect } from 'react';
import { Chart, registerables } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import reportesPeticiones from '../../apis/reportesPeticiones';
import sedesPeticiones from '../../apis/sedesPeticiones';
Chart.register(...registerables);

const peticiones = new reportesPeticiones();
const peticionesSedes = new sedesPeticiones();
const Reportes = () => {


  const [cantidadPlatillos, setCantidadPlatillos] = useState(3);
  const [reservasPorSede, setReservasPorSede] = useState(null);
  const [sedes, setSedes] = useState([]);
  const [sedeNombre, setSede] = useState('');
  const [platillosVendidos, setPlatillosVendidos] = useState(null);

  const obtenerPlatillosMasVendidos = async () => {
    try {
      const respuesta = await peticiones.obtenerPlatillosMasVendidos();
      const datosOrdenados = respuesta.datos.sort((a, b) => b.cantidad - a.cantidad);
      const topNPlatillos = datosOrdenados.slice(0, cantidadPlatillos);
      const datos = {
        labels: topNPlatillos.map((platillo) => platillo.nombre_platillo),
        datasets: [
          {
            label: 'Cantidad Vendida',
            data: topNPlatillos.map((platillo) => platillo.cantidad),
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
          },
        ],
      };
      setPlatillosVendidos(datos);
      console.log(respuesta)
    } catch (error) {
      console.log(error);
    }
  };

  const obtenerSedes = async () => {
    try {
      const sedesObtenidas = await peticionesSedes.find();
      setSedes(sedesObtenidas);
      console.log(sedesObtenidas)
    } catch (error) {
      console.log(error);
    }
  };

  const obtenerReservasPorSede = async () => {
    try {
      
      const respuesta = await peticiones.ReservasPorSede(sedeNombre);
      const datos = {
        labels: respuesta.datos.map((reserva) => reserva.mes),
        datasets: [
          {
            label: 'Reservas Totales',
            data: respuesta.datos.map((reserva) => reserva.cantidad),
            backgroundColor: 'rgba(54, 162, 235, 0.5)', // Color de las barras
          },
        ],
      };
      setReservasPorSede(datos);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    obtenerPlatillosMasVendidos();
    obtenerReservasPorSede()
    obtenerSedes();
    console.log(sedeNombre)
      
  }, [cantidadPlatillos,sedeNombre]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    
    
    
  };

  
  const options = {
    scales: {
      y: {
        suggestedMin: 0, // Valor mínimo del eje y
        suggestedMax: 10, // Valor máximo del eje y (ajusta según tus datos)
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="mt-20 mx-10">
      <h2 className="text-right my-2 text-2xl text-red-800 mr-10">La Bisteca</h2>
      <h1 className="text-right my-2 text-1xl text-red mr-10">Pasta & Grill</h1>
      <h3 className="text-left text-4xl ml-10">Reportes</h3>
      <form onSubmit={handleSubmit} className="mx-10 mt-20">
        <div className="mb-4 display flex">
          <label htmlFor="sede" className="text-right my-2 text-1xl text-red ">
            Sede:
          </label>
          <select
            type="text"
            id="sede"
            value={sedeNombre}
            onChange={(event) => setSede(event.target.value)}
            required
            className="h-10 w-100 px-3 py-2 border border-gray-300 rounded-md ml-5"
          >
            <option>--Seleccionar--</option>
            {sedes.map((sede) => (
              <option key={sede.id_sede} value={sede.id_sede}>
                {sede.sede}
              </option>
            ))}
          </select>
          
          <label htmlFor="cantidadPlatillos" className="my-2 text-1xl text-red ml-10 mr-5 ">
            Cantidad de Platillos Más Vendidos:
          </label>
          <input
            type="number"
            id="cantidadPlatillos"
            value={cantidadPlatillos}
            onChange={(event) => setCantidadPlatillos(Number(event.target.value))}
            min="1"
            required
            className="w-100 px-3 py-2 border border-gray-300 rounded-md "
          />
          
        </div>
      </form>

      <div style={{ width: '500px', height: '400px' }} className="display flex mt-10">
        <h2 className="mr-5">Reservas Totales por Fecha</h2>
        {reservasPorSede ? (
          <Bar
            data={reservasPorSede}
            options={options}
            width={500}
            height={400}
            style={{ width: '500px', height: '400px' }}
            className="mx-2"
          />
        ) : (
          <p>No hay datos de reservas por sede disponibles.</p>
        )}
        <h2 className="mr-5">Platillos Más Vendidos</h2>
        {platillosVendidos ? (
          <Bar
            data={platillosVendidos}
            options={options}
            width={500}
            height={400}
            style={{ width: '500px', height: '400px' }}
            className="mx-2"
          />
        ) : (
          <p>Cargando datos...</p>
        )}
      </div>
    </div>
  );
};

export default Reportes;