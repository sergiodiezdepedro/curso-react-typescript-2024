import PatientForm from "./components/PatientForm";
import PatientsList from "./components/PatientsList";

function App() {
   return (
      <>
         <div className="container mx-auto mt-20">
            <h1 className="font-black text-4xl text-center md:w-3/4 md:mx-auto md:text-5xl">
               Seguimiento de pacientes {""}
               <span className="text-indigo-700">Veterinaria</span>
            </h1>
         </div>
         <div className="mt-12 md:flex">
            <PatientForm />
            <PatientsList />
         </div>
      </>
   );
}

export default App;
