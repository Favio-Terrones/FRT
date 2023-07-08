const Reserva = ({reserva}) => {
    const {nombre,fecha,sede,sillas} = reserva;
  return (
    <>
      <td className="border border-gray-300 px-4 py-2">{nombre}</td>
      <td className="border border-gray-300 px-4 py-2">{fecha}</td>
      <td className="border border-gray-300 px-4 py-2">{sede}</td>
      <td className="border border-gray-300 px-4 py-2">{sillas}</td>
    </>
  );
};

export default Reserva;
