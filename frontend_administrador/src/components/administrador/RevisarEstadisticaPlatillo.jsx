import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);


const RevisarEstadisticaPlatillo = () => {
  const dates = ['2023-01-01', '2023-02-01', '2023-03-01', '2023-04-01', '2023-05-01', '2023-06-01'];
  const reservations = [12, 19, 3, 5, 2, 3];

  const data = {
    labels: dates.map((date) => new Date(date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })),
    datasets: [
      {
        label: 'Cantidad de platillos',
        data: reservations,
        backgroundColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  const options = {
    indexAxis: 'x',
    scales: {
      x:{
      title:{
        display: true,
        text: 'Fechas',
        font:{
          weight: 'bold'
        }
        },
      },
      y: 
      {
        title:{
         display:true,
         text: 'Cantidad de platillos',
         font:{
          weight: 'bold'
         }
        },
        beginAtZero: true,
      },
    },
  };

  return (
   <>
   <h2 className='text-4xl ml-5 text-red-800 mt-5'>Estadística de Platillos</h2>
   <div className="">
    <h2 className="text-right my-2 text-2xl text-red-800  mr-10">La Bisteca </h2> 
    <h1 className="text-right my-2 text-1xl text-red  mr-10">Pasta & Grill</h1>
    </div>
  <Bar data={data} options={options} />;
   </>
  )

}

export default RevisarEstadisticaPlatillo