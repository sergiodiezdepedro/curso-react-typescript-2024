// * Destructuring de 2 o más objetos

const producto = {
   nombre: "Agujeros instantáneos ACME",
   precio: 20,
   disponible: true,
};

const cliente = {
   nombre: "Juan Nadie",
   premium: true,
   direccion: {
      calle: "Calle Principal",
      numero: 22,
   },
};

const { nombre } = producto;
const {
   nombre: nombreCliente,
   direccion: { calle, numero },
} = cliente;

console.log(nombre);
console.log(nombreCliente);
console.log(calle);
console.log(calle, numero);
