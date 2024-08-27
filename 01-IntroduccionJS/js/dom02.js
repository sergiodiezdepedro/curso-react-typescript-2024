//* Manipular elementos HTML con JS

const heading = document.querySelector(".heading");
const enlaces = document.querySelectorAll(".navegacion a");
const inputNombre = document.querySelector("#nombre");

// heading.textContent = "Un nuevo header...";
// heading.id = "id-01";
// heading.removeAttribute("id");
// heading.removeAttribute("class");

// inputNombre.value = "Un nuevo valor";
inputNombre.placeholder = "Rumbero";
inputNombre.dataset.nombre = "input";
console.log(inputNombre.classList);

enlaces[0].textContent = "Rumba.com";

enlaces.forEach((enlace) => (enlace.textContent = "Enlaces nuevos"));
