// * Modificar arrays

const tecnologias = ["HTML", "CSS", "JavaScript", "React", "Node"];
// * Reeemplazar. Muta el array
//tecnologias[3] = "Angular";
// * Añadir
// tecnologias[5] = "Next.js";
// * Añadir al final del array. 'push()' muta el aaray, por lo que no debe utilizarse con React
// * tecnologias.push("Vue");
// * Alternativa para React
// * const nuevoArreglo = [...tecnologias, "Vue"];
// * Añadir al principio del array
// * const nuevoArreglo = ["Vue", ...tecnologias];
// console.table(nuevoArreglo);

// * Para eliminar el primer elemento de un array se usa 'shift()', pero también lo muta y no se debe usar en React
// * tecnologias.shift();
// * Una alternativa en React
//  const tecnologias2 = tecnologias.filter((tech) => {
//    if (tech !== "HTML") {
//       return tech;
//    }
// });
// console.table(tecnologias2);

// * Para reemplazar en React
// const tecnologias2 = tecnologias.map((tech) => {
//    if (tech === "CSS") {
//       return "SCSS";
//    } else {
//       return tech;
//    }
// });
// console.table(tecnologias2);

console.table(tecnologias);
