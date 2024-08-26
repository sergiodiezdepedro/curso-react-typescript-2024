// * Comparar con comparador estricto

const numero1 = 20;
const numero2 = "20";
const numero3 = 100;
const numero4 = "100";

// * == (Comparador no estricto)

if (numero1 == numero2) {
   console.log("Sí, son iguales");
} else {
   console.log("No, no son iguales");
}

console.warn("Separador");

if (numero3 === numero4) {
   console.log("Sí, son iguales");
} else {
   console.log("No, no son iguales");
}
