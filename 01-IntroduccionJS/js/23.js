// * Optional Chaining (?)
const alumno = {
   nombre: "Manuel",
   clase: "Programación 1",
   aprobado: true,
   //    examenes: {
   //       examen1: 90,
   //    },
};

console.log(alumno.examenes?.examen1);

console.log("Después de ALUMNO");

console.warn("Separador");

// * Nullish coalescing operator (??)
// * Si la variable no tiene valor (null) o es 'undefined' a la izquierda de ?? le asigna el valor '1' (page=1). Si page es igual a, por ejemplo, '3', page=3, es decir, le asigna el valor a la izquierda de ??.
const page = null ?? 1;
console.log({ page });

console.warn("Separador");

const pagina = 6 ?? 1;
console.log({ pagina });
