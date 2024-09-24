import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { categories } from "../data/categories";
import { Activity } from "../types";
import { useActivity } from "../hooks/useActivity";

const initialState: Activity = {
   id: uuidv4(),
   category: 1,
   name: "",
   calories: 0,
};

export default function Form() {
   const { state, dispatch } = useActivity();

   const [activity, setActivity] = useState<Activity>(initialState);

   useEffect(() => {
      if (state.activeId) {
         const selectedActivity = state.activities.find(
            (stateActivity) => stateActivity.id === state.activeId
         );
         if (selectedActivity && selectedActivity.id !== activity.id) {
            setActivity(selectedActivity);
         }
      }
   }, [state.activeId]);

   const handleChange = (
      event: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>
   ) => {
      const isNumberField = ["category", "calories"].includes(
         event.target.id
      );

      setActivity({
         ...activity,
         [event.target.id]: isNumberField
            ? +event.target.value
            : event.target.value,
      });
   };

   const isValidActivity = () => {
      const { name, calories } = activity;
      return name.trim() !== "" && calories > 0;
   };

   const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      dispatch({
         type: "save-activity",
         payload: { newActivity: activity },
      });

      setActivity({
         ...initialState,
         id: uuidv4(),
      });
   };
   return (
      <form
         className="space-y-5 bg-white shadow-md p-10 rounded-lg"
         onSubmit={handleSubmit}
      >
         <div className="grid grid-cols-1 gap-3">
            <label className="font-bold" htmlFor="category">
               Categoría:
            </label>
            <select
               className="border border-slate-300 p-2 rounded-lg w-full bg-white"
               id="category"
               value={activity.category}
               onChange={handleChange}
            >
               {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                     {category.name}
                  </option>
               ))}
            </select>
         </div>
         <div className="grid grid-cols-1 gap-3">
            <label className="font-bold" htmlFor="name">
               Actividad:
            </label>
            <input
               type="text"
               id="name"
               className="border border-slate-300 p-2 rounded-lg"
               placeholder="Ej.: Comida, Zumo de naranja, Filete,  Ensalada, Ejercicio, Running, Pesas..."
               value={activity.name}
               onChange={handleChange}
            />
         </div>
         <div className="grid grid-cols-1 gap-3">
            <label className="font-bold" htmlFor="calories">
               Calorías:
            </label>
            <input
               type="number"
               id="calories"
               className="border border-slate-300 p-2 rounded-lg"
               placeholder="Calorías. Ej. 300, 500..."
               value={activity.calories}
               onChange={handleChange}
            />
         </div>
         <input
            type="submit"
            className="bg-gray-700 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer rounded disabled:opacity-10"
            value={
               activity.category === 1
                  ? "Guardar Comida"
                  : "Guardar Ejercicio"
            }
            disabled={!isValidActivity()}
            aria-label={
               activity.category === 1
                  ? "Guardar Comida"
                  : "Guardar Ejercicio"
            }
         />
      </form>
   );
}
