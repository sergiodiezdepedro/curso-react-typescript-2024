import { Patient } from "../types";
import PatientDetailItem from "./PatientDetailItem";
import { usePatientStore } from "../store";

type PatientDetailsProps = {
   patient: Patient;
};

export default function PatientDetails({ patient }: PatientDetailsProps) {
   const deletePatient = usePatientStore((state) => state.deletePatient);
   const getPatientById = usePatientStore((state) => state.getPatientById);

   return (
      <div className="mx-5 mb-10 px-5 py-10 bg-white shadow-md rounded-xl">
         <PatientDetailItem label="ID" data={patient.id} />
         <PatientDetailItem label="Nombre" data={patient.name} />
         <PatientDetailItem label="Propietario" data={patient.caretaker} />
         <PatientDetailItem label="Correo" data={patient.email} />
         <PatientDetailItem
            label="Fecha de Alta"
            data={patient.date.toString()}
         />
         <PatientDetailItem label="Síntomas" data={patient.symptoms} />
         <div className="flex flex-col lg:flex-row justify-between gap-3 mt-6">
            <button
               className="py-2 px-10 bg-indigo-600 hover:bg-indigo-800 text-white font-bold uppercase rounded-lg border-none"
               type="button"
               onClick={() => getPatientById(patient.id)}
            >
               Editar
            </button>
            <button
               className="py-2 px-10 bg-red-600 hover:bg-red-800 text-white font-bold uppercase rounded-lg border-none"
               type="button"
               onClick={() => deletePatient(patient.id)}
            >
               Eliminar
            </button>
         </div>
      </div>
   );
}
