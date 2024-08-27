// * Eventos del DOM - Clicks

const heading = document.querySelector(".heading");
const enlaces = document.querySelectorAll(".navegacion a");

// heading.addEventListener("click", () => {
//    heading.textContent = "Nuevo header al hacer click...";
// });

// heading.addEventListener("dblclick", () => {
//    heading.textContent = "Nuevo header al hacer doble click...";
// });

// heading.addEventListener("mouseenter", () => {
//    heading.textContent = "Nuevo header al hacer hover...";
// });

// heading.addEventListener("mouseleave", () => {
//    heading.textContent = "JavaScript Intermedio - Manipulación de DOM";
// });

enlaces.forEach((enlace) => {
   enlace.addEventListener("click", (event) => {
      event.preventDefault();
      //   console.log(event.target);
      event.target.textContent = "Hiciste click";
   });
});
