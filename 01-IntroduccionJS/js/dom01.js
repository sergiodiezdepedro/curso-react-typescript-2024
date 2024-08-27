// * Selectores

const heading = document.querySelector(".heading");
console.log(heading);
console.log(heading.tagName);
console.log(heading.textContent);
console.log(heading.classList);

console.warn("Separador");

const enlaces = document.querySelectorAll(".navegacion a");
console.log(enlaces);
console.log(enlaces[0].textContent);

console.warn("Separador");

const enlace = document.querySelector(".navegacion a:nth-child(2)");
console.log(enlace.textContent);
