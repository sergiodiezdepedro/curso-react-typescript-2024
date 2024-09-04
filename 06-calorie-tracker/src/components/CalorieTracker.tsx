import { useMemo } from "react";
import type { Activity } from "../types";
import CalorieDisplay from "./CalorieDisplay";

type CalorieTrackerProps = {
   activities: Activity[];
};

export default function CalorieTracker({
   activities,
}: CalorieTrackerProps) {
   const caloriesConsumed = useMemo(
      () =>
         activities.reduce(
            (total, activity) =>
               activity.category === 1 ? total + activity.calories : total,
            0
         ),
      [activities]
   );
   const caloriesBurned = useMemo(
      () =>
         activities.reduce(
            (total, activity) =>
               activity.category === 2 ? total + activity.calories : total,
            0
         ),
      [activities]
   );

   const balanceCalories = useMemo(
      () => caloriesConsumed - caloriesBurned,
      [activities]
   );
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
