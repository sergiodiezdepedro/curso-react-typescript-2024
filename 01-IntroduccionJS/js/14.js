// * Funciones. Function Declaration

function sumar(a, b) {
   console.log(a + b);
}
sumar(90, 10);
// * al pasar sólo un párametro el resultado es 'NaN', Not a Number
sumar(10);

console.warn("Separación");

function multiplicar(numero1 = 0, numero2 = 0) {
   console.log(numero1 * numero2);
}
multiplicar(10, 9);
multiplicar(5);
