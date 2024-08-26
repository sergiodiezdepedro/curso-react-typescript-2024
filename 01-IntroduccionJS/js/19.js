// * Condicionales

const disponible = 4000;
const retirar = 200;
const auth = true;

if (auth) {
   console.log("Acceso al sistema.");
} else {
   console.log("No tienes permisos. Inicia sesión.");
}

/**
 * > Mayor que
 * < Menor que
 * >= Mayor o igual que
 * <= Menor o igual que
 * == Igual que
 * === Igual estricto
 * !== Diferente que
 */

if (disponible >= retirar) {
   console.log(`Puedes retirar ${retirar} machacantes.`);
} else {
   console.log("No tienes saldo suficiente.");
}
