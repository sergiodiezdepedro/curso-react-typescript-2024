import { useState, ChangeEvent, useMemo } from "react";

export default function BudgetForm() {
   const [budget, setBudget] = useState(0);

   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setBudget(e.target.valueAsNumber);
   };

   const isValid = useMemo(() => {
      return isNaN(budget) || budget <= 0;
   }, [budget]);

   return (
      <form className="space-y-5">
         <div className="flex flex-col space-y-5">
            <label
               htmlFor="budget"
               className="text-4xl text-blue-600 font-bold text-center"
            >
               Definir presupuesto
            </label>
            <input
               id="budget"
               type="number"
               name="budget"
               placeholder="Define tu presupuesto"
               value={budget}
               onChange={handleChange}
               className="w-full bg-white border border-gray-200 p-2 rounded"
            />
         </div>
         <input
            type="submit"
            value="Definir presupuesto"
            className="bg-blue-600 hover:bg-blue-900 cursor-pointer w-full p-2 text-white font-black uppercase rounded-md disabled:opacity-40"
            disabled={isValid}
         />
      </form>
   );
}
