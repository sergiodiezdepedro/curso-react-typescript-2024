import CalorieDisplay from "./CalorieDisplay";
import { useActivity } from "../hooks/useActivity";

export default function CalorieTracker() {
   const { caloriesConsumed, caloriesBurned, balanceCalories } =
      useActivity();

   return (
      <>
         <h2 className="text-4xl mb-4 font-black text-white text-center">
            Resumen de Calorías
         </h2>
         <div className="flex flex-col gap-5 items-center md:flex-row md:justify-between">
            <CalorieDisplay
               calories={caloriesConsumed}
               text={"Ingeridas"}
            />
            <CalorieDisplay calories={caloriesBurned} text={"Quemadas"} />
            <CalorieDisplay calories={balanceCalories} text={"Balance"} />
         </div>
      </>
   );
}
