// * Funciones que retornan valores

// function sumar(numero1 = 0, numero2 = 0) {
//    return numero1 + numero2;
// }

// const sumar = function (numero1, numero2) {
//    return numero1 + numero2;
// };

// * En una línea el 'return' es implicito
const sumar = (numero1, numero2) => numero1 + numero2;

const resultado = sumar(10, 20);
console.log({ resultado });
