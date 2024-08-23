// * Unir 2 o más objetos

const producto = {
   nombre: "Pelotas de tenis explosivas ACME",
   precio: 99.99,
   disponible: true,
};

const cliente = {
   nombre: "Juan Nadie",
   premium: true,
};

// * ... es el 'spread operator'
// const carrito = {
//    cantidad: 1,
//    ...producto,
// };

// console.log(carrito);
// console.log(carrito.nombre);

// * Así se combinan dos objetos en uno nuevo, manteniendo los dos originarios en el mismo nivel jerárquico, manteniendo su estructura de objeto correspondiente
// const nuevoObjeto = {
//    // producto: { ...producto },
//    // cliente: { ...cliente },
//    // Se puede reducir a lo siguiente mediante Object Literal Enhancement
//    producto,
//    cliente,
// };

// * Así se fusionan los dos objetos en uno nuevo. Como hay dos propiedades con 'nombre' se mantiene sólo una con el ultimo valor declarado
// const nuevoObjeto = {
//    ...producto,
//    ...cliente,
// };
// console.log(nuevoObjeto);

// * Se puede hacer igual con el método 'assign'
const nuevoObjeto = Object.assign(producto, cliente);
console.log(nuevoObjeto);
