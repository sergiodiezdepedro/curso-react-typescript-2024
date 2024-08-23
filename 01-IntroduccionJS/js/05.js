// * Manipulación de objetos

const producto = {
   nombre: "Serillos Marca ACME",
   precio: 20,
   disponible: true,
};

// * De este modo un objeto es inalterable, no se puede eliminar o añadir propiedades, o cambiar los valores de las mismas
// Object.freeze(producto);

// * 'seal' permite cambiar valores de las propiedades, pero no eliminarlas o añadirlas
Object.seal(producto);

// * Reescribir un valor
producto.disponible = false;
// console.table(producto);

// * Si no existe una propiedad, así se añade
producto.imagen = "imagen.jpg";
// console.table(producto);

// * Eliminar una propiedad
delete producto.precio;

console.table(producto);
