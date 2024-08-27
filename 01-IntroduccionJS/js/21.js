// * Logicals AND (&&, han de cumplirse todas las condiciones) y OR (||, al menos una condición se cumple).

const efectivo = 1000;
const pagar = 1200;
const tarjeta = true;

if (efectivo >= pagar || tarjeta) {
   console.log("Puedes pagar");
} else {
   console.log("No puedes pagar, saldo insuficiente");
}
