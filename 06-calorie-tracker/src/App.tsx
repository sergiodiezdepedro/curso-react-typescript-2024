import { useReducer, useEffect } from "react";
import Form from "./components/Form";
import {
   activityReducer,
   initialState,
} from "./reducers/activity-reducer";
import ActivityList from "./components/ActivityList";
import CalorieTracker from "./components/CalorieTracker";

function App() {
   const [state, dispatch] = useReducer(activityReducer, initialState);

   useEffect(() => {
      localStorage.setItem("activities", JSON.stringify(state.activities));
   }, [state.activities]);

   const canRestartApp: boolean = state.activities.length > 0;

   return (
      <>
         <header className="bg-lime-600 py-3">
            <div className="px-2 max-w-4xl mx-auto flex justify-between items-center md:px-0">
               <h1 className="text-center text-lg font-bold text-white uppercase">
                  Calculadora de Calorías
               </h1>
               <button
                  className="bg-gray-700 hover:bg-gray-900 p-3 font-bold uppercase text-white cursor-pointer rounded-lg text-sm disabled:opacity-40"
                  disabled={!canRestartApp}
                  onClick={() => dispatch({ type: "restart-app" })}
               >
                  Reiniciar App
               </button>
            </div>
         </header>
         <section className="bg-lime-500 py-20 px-5">
            <div className="max-w-4xl mx-auto">
               <Form dispatch={dispatch} state={state} />
            </div>
         </section>
         <section className="bg-gray-800 py-10">
            <div className="max-w-4xl mx-auto">
               <CalorieTracker activities={state.activities} />
            </div>
         </section>
         <section className="p-10 max-w-4xl mx-auto">
            <ActivityList
               activities={state.activities}
               dispatch={dispatch}
            />
         </section>
      </>
   );
}

export default App;
