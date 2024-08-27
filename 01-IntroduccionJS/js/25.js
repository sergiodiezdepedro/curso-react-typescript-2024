// * ECMAScript Modules
import operacionDefault, { sumar, restar, dividir } from "./funciones.js";
// import {
//    sumar as funcionSumar,
//    restar as funcionRestar,
// } from "./funciones.js";

// const suma = funcionSumar(20, 10);
// console.log(suma);

// const resta = funcionRestar(1000, 1);
// console.log(resta);

const suma = sumar(20, 10);
console.log(`El resultado de la suma es: ${suma}`);

const resta = restar(1000, 1);
console.log(`El resultado de la resta es: ${resta}`);

const division = dividir(100, 3);
console.log(`El resultado de la división es: ${division}`);

const resultado = operacionDefault(10, 9);
console.log(`El resultado de la multiplicacion es: ${resultado}`);
