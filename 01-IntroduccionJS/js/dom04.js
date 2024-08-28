// * Eventos del DOM - Input

const inputNombre = document.querySelector("#nombre");

inputNombre.addEventListener("input", (e) => {
   console.log(e.target.value);
});

const inputPassword = document.querySelector("#password");

inputPassword.addEventListener("input", () => {
   inputPassword.type = "text";
   setTimeout(() => {
      inputPassword.type = "password";
   }, 300);
});
