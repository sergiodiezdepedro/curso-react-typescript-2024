// * Operador Ternario

const auth = true;
const efectivo = 1000;
const pagar = 1200;
const tarjeta = true;

// if (autenticado) {
//    console.log("Usuario autenticado.");
// } else {
//    console.log("No estás autenticado. Ir al login.");
// }

// auth
//    ? console.log("Usuario autenticado.")
//    : console.log("No estás autenticado. Ir al login.");

// efectivo >= pagar || tarjeta
//    ? console.log("Puedes pagar.")
//    : console.log("No puedes pagar.");

// * Ternario con dos condiciones. No muy legible y claro
efectivo >= pagar
   ? console.log("Puedes pagar.")
   : tarjeta
   ? console.log("Puedes pagar con tarjeta.")
   : console.log("No puedes pagar.");
