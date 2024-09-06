import { useContext } from "react";
import { BudgetContext } from "../context/BudgetContext";

export const useBudget = () => {
   const context = useContext(BudgetContext);
   if (!context) {
      throw new Error(
         "useBudget hook must be used within BudgetProvider provider"
      );
   }
   return context;
};
