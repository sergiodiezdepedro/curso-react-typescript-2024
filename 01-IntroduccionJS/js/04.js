// * objeto

const producto = {
   nombre: "Serillos Marca ACME",
   precio: 20,
   disponible: true,
};

// console.log(producto);
// console.log(producto);
// console.table(producto);

// console.log(producto.nombre);

// * destructuring

// const { nombre } = producto;
// console.log(nombre);
// Antes se hacía así
// const precio = producto.precio;
// console.log(precio);

// const { nombre, precio, disponible} = producto;
// console.log(nombre, precio, disponible);

// * Object Literal Enhancement
const autenticado = true;
const usuario = "Manolo";

const nuevoObjeto = {
   // autenticado: autenticado,
   // usuario: usuario,
   autenticado,
   usuario,
};
console.log(nuevoObjeto);
