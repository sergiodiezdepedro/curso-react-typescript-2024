// * Eventos del DOM - Submit

const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", (e) => {
   e.preventDefault();

   const nombre = document.querySelector("#nombre").value;
   const password = document.querySelector("#password").value;

   if (nombre === "") {
      alert("El nombre es obligatorio");
   } else if (password.length < 5) {
      alert("La contraseña debe tener al menos 5 caracteres");
   } else {
      console.log(nombre);
      console.log(password);
      console.log("Enviando formulario");
   }
});
