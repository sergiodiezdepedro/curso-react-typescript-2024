import {
   CircularProgressbar,
   buildStyles,
} from "react-circular-progressbar";
import { useBudget } from "../hooks/useBudget";
import AmountDisplay from "./AmountDisplay";
import "react-circular-progressbar/dist/styles.css";

export default function BudgetTracker() {
   const { state, totalExpenses, remainingBudget, dispatch } = useBudget();

   const percentage = +((totalExpenses / state.budget) * 100).toFixed(1);

   return (
      <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
         <div className="flex justify-center ">
            <CircularProgressbar
               value={percentage}
               styles={buildStyles({
                  pathColor: percentage === 100 ? "#dc2626" : "#3b82f6",
                  trailColor: "#e3e3e3",
                  textSize: 8,
                  textColor: percentage === 100 ? "#dc2626" : "#3b82f6",
               })}
               text={`${percentage}% Gastado`}
            />
         </div>
         <div className="flex flex-col justify-center items-center gap-8">
            <button
               type="button"
               className="bg-pink-600 w-full text-white uppercase font-bold rounded-lg p-2"
               onClick={() => dispatch({ type: "reset-app" })}
            >
               Resetear App
            </button>
            <AmountDisplay label="Presupuesto" amount={state.budget} />
            <AmountDisplay label="Disponible" amount={remainingBudget} />
            <AmountDisplay label="Gastado" amount={totalExpenses} />
         </div>
      </section>
   );
}
