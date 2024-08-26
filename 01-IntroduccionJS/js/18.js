// * Array Methods

const tecnologias = ["HTML", "CSS", "JavaScript", "React", "Node"];
const numeros = [100, -50, 1001];
const numeros2 = [10, 20, 30];
// * filter. Para arrays de numbers y strings
// const nuevoArray = tecnologias.filter((tech) => tech === "HTML");
// const resultado = numeros.filter((number) => number !== -50);
// const resultado2 = numeros.filter((number) => number > 100);
// console.log(nuevoArray);
// console.warn("Separador");
// console.log(resultado);
// console.warn("Separador");
// console.log(resultado2);

// * includes. Para arrays de numbers y strings. Devuelve un boolean
// const favorito = tecnologias.includes("CSS");
// const variacion = numeros.includes(2);
// console.log(favorito);
// console.warn("Separador");
// console.log(variacion);

// * some. Devuelve un "true" si al menos uno cumple la condición
// const resultado = numeros.some((number) => number < 0);
// console.log(resultado);

// * find. Devuelve el primer elemento que cumple la condición
// const resultado = numeros.find((numero) => numero > 15);
// console.log(resultado);

// * every. Devuelve 'true' o 'false' si todos cumplen la condición
// const resultado = numeros.every((numero) => numero > 500);
// console.log(resultado);

// * reduce. Devuelve un acumulado del total
const resultado = numeros2.reduce((total, numeroActual) => {
   console.log(total);
   console.log(numeroActual);
   return total + numeroActual;
}, 0);

console.log(resultado);
