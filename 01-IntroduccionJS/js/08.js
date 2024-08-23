// * Template strings y Concatenación

const producto = "Catapulta";
const precio = 5000;
const marca = "ACME";

// * Se puede usar una coma ',' en lugar del signo '+' para concatenar 'old-school'
console.log(
   "El producto es: " +
      producto +
      ", su precio es " +
      precio +
      " y es de la marca " +
      marca +
      "."
);

console.log(
   `El producto es: ${producto}, su precio es ${precio} y es de la marca ${marca}.`
);
