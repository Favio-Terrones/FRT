import { Link } from "react-router-dom";

Link;

const AdministrarPlatillos = () => {
  return (


    <div class="container mx-auto py-16">
    <div>
        <h2 className="text-right my-2 text-2xl text-red-800  mr-10">La Bisteca </h2> 
        <h1 className="text-right my-2 text-1xl text-red  mr-10">Pasta & Grill</h1>
    </div>
      <div class="flex items-center justify-start mb-4 gap-4">
        <input
          type="text"
          placeholder="Buscar platillo"
          class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        />
        <Link class="px-4 py-2 bg-red-800 text-white rounded-lg" to="/administrador/agregar-platillo"> 
          Agregar Platillo
        </Link>
      </div>

      <div class="grid grid-cols-4 gap-4">
        <div class="bg-white rounded-lg shadow">
          <img
            src="imagen1.jpg"
            alt="Imagen 1"
            class="w-full h-40 object-cover rounded-t-lg"
          />
          <div class="p-4">
            <h3 class="text-xl font-semibold mb-2">Nombre de la imagen 1</h3>
            <p class="text-gray-600 text-sm mb-2">Descripción de la imagen 1</p>
            <p class="text-gray-500 text-sm">Categoría: Categoría 1</p>
            <p class="text-gray-500 text-sm">Precio: $10.00</p>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow">
          <img
            src="imagen1.jpg"
            alt="Imagen 1"
            class="w-full h-40 object-cover rounded-t-lg"
          />
          <div class="p-4">
            <h3 class="text-xl font-semibold mb-2">Nombre de la imagen 1</h3>
            <p class="text-gray-600 text-sm mb-2">Descripción de la imagen 1</p>
            <p class="text-gray-500 text-sm">Categoría: Categoría 1</p>
            <p class="text-gray-500 text-sm">Precio: $10.00</p>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow">
          <img
            src="imagen1.jpg"
            alt="Imagen 1"
            class="w-full h-40 object-cover rounded-t-lg"
          />
          <div class="p-4">
            <h3 class="text-xl font-semibold mb-2">Nombre de la imagen 1</h3>
            <p class="text-gray-600 text-sm mb-2">Descripción de la imagen 1</p>
            <p class="text-gray-500 text-sm">Categoría: Categoría 1</p>
            <p class="text-gray-500 text-sm">Precio: $10.00</p>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow">
          <img
            src="imagen1.jpg"
            alt="Imagen 1"
            class="w-full h-40 object-cover rounded-t-lg"
          />
          <div class="p-4">
            <h3 class="text-xl font-semibold mb-2">Nombre de la imagen 1</h3>
            <p class="text-gray-600 text-sm mb-2">Descripción de la imagen 1</p>
            <p class="text-gray-500 text-sm">Categoría: Categoría 1</p>
            <p class="text-gray-500 text-sm">Precio: $10.00</p>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow">
          <img
            src="imagen1.jpg"
            alt="Imagen 1"
            class="w-full h-40 object-cover rounded-t-lg"
          />
          <div class="p-4">
            <h3 class="text-xl font-semibold mb-2">Nombre de la imagen 1</h3>
            <p class="text-gray-600 text-sm mb-2">Descripción de la imagen 1</p>
            <p class="text-gray-500 text-sm">Categoría: Categoría 1</p>
            <p class="text-gray-500 text-sm">Precio: $10.00</p>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow">
          <img
            src="imagen1.jpg"
            alt="Imagen 1"
            class="w-full h-40 object-cover rounded-t-lg"
          />
          <div class="p-4">
            <h3 class="text-xl font-semibold mb-2">Nombre de la imagen 1</h3>
            <p class="text-gray-600 text-sm mb-2">Descripción de la imagen 1</p>
            <p class="text-gray-500 text-sm">Categoría: Categoría 1</p>
            <p class="text-gray-500 text-sm">Precio: $10.00</p>
          </div>
        </div>
        <div class="bg-white rounded-lg shadow">
          <img
            src="imagen1.jpg"
            alt="Imagen 1"
            class="w-full h-40 object-cover rounded-t-lg"
          />
          <div class="p-4">
            <h3 class="text-xl font-semibold mb-2">Nombre de la imagen 1</h3>
            <p class="text-gray-600 text-sm mb-2">Descripción de la imagen 1</p>
            <p class="text-gray-500 text-sm">Categoría: Categoría 1</p>
            <p class="text-gray-500 text-sm">Precio: $10.00</p>
          </div>
        </div>
        <div class="bg-white rounded-lg shadow">
          <img
            src="imagen1.jpg"
            alt="Imagen 1"
            class="w-full h-40 object-cover rounded-t-lg"
          />
          <div class="p-4">
            <h3 class="text-xl font-semibold mb-2">Nombre de la imagen 1</h3>
            <p class="text-gray-600 text-sm mb-2">Descripción de la imagen 1</p>
            <p class="text-gray-500 text-sm">Categoría: Categoría 1</p>
            <p class="text-gray-500 text-sm">Precio: $10.00</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AdministrarPlatillos;
