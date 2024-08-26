// * Recorriendo arrays con 'forEach', 'map' y 'for... of'

const tecnologias = [
   "HTML",
   "CSS",
   "JavaScript",
   "React",
   "Node",
   "Nextjs",
   "TypeScript",
];

// * for each
tecnologias.forEach((tecnologia) => {
   console.log(tecnologia);
});

console.warn("Separación");

// * map. Genera un nuevo array en base a la condición o función dadas
const arrayMap = tecnologias.map((tech) => {
   return tech;
});
console.log(arrayMap);

console.warn("Separación");

// * for ... of
for (let tecnologia of tecnologias) {
   console.log(tecnologia);
}
