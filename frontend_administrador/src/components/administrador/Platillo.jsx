
const Platillo = ({platillo}) => {

    const {nombre,descripcion,foto,precio,categoria} = platillo;
  return (
      <div className="bg-white rounded-lg shadow ">
          <img
            src={foto}
            alt={nombre}
            className="w-full h-40 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{nombre}</h3>
            <p className="text-gray-600 text-sm mb-2">{descripcion}</p>
            <p className="text-gray-500 text-sm"><span className="text-lg font-bold ">Categoria: </span>{`${categoria}`}</p>
            <p className="text-gray-500 text-sm"><span className="text-lg font-bold ">Precio: </span>{`S/${precio}`}</p>
          </div>
      </div>
  )
}

export default Platillo