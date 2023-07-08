
const AgregarPlatillo = () => {
  return (
     
    <div class="flex py-40">

    <div class="w-4/5 p-4  border-r border-gray-500">
      <h3 className="text-4xl font-bold text-red-800 text-center mb-11">Agregar Platillo</h3>
      <form class="max-w-sm mx-auto">
        <div class="mb-4">
          <label for="namePlatillo" class="block mb-2">Nombre del platillo:</label>
          <input type="text" id="namePlatillo" name="namePlatillo" class="w-full px-3 py-2 border border-gray-300 rounded-lg"/>
        </div>
        <div class="mb-4">
          <label for="costoPlatillo" class="block mb-2">Costo Platillo:</label>
          <input type="number" id="costoPlatillo" name="costoPlatillo" class="w-full px-3 py-2 border border-gray-300 rounded-lg"/>
        </div>
        <div class="mb-4">
          <label for="costoPlatillo" class="block mb-2">Categoría:</label>
          <select className="w-full px-x py-2 border-gray-300 rounded-lg">
              <option>
                 --Seleccionar--
              </option>
              <option>Pastas</option>
              <option>Carnes</option>
              <option>Entradas</option>
          </select>
        </div>
        <div class="mb-4">
          <label for="infoPlatillo" class="block mb-2">Información del platillo</label>
          <textarea id="infoPlatillo" name="infoPlatillo" class="w-full px-3 py-2 border border-gray-300 rounded-lg"></textarea>
        </div>
        <div class="flex justify-center">
          <button type="submit" class="mr-2 px-4 py-2 bg-red-800 text-white rounded">Cargar</button>
          <button type="button" class="px-4 py-2 bg-red-800 text-white mr-2 rounded">Modificar</button>
          <button type="button" class="px-4 py-2 bg-red-800 text-white rounded">Ingresar</button>
        </div>
      </form>
    </div>
    <div class="w-1/5 p-4">
      <div class="max-w-xs mx-auto">
        <img src="/img/carne.jpg" alt="Nombre de la imagen" class="mb-4"/>
        <h2 class="text-lg font-bold mb-2">Carne de perro</h2>
        <p class="text-gray-700 mb-4">La mejor carne de perro para tu consumo, auspicido por industrias doge</p>
        <p class="text-lg font-bold text-end text-red-800 ">Precio: S/45.99</p>
      </div>
    </div>
  </div>
  )
}

export default AgregarPlatillo