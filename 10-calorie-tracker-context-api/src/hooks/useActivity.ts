import { useContext } from "react";
import { ActivityContext } from "../context/ActivityContext";

export const useActivity = () => {
   const context = useContext(ActivityContext);
   if (!context) {
      throw new Error(
         "useActivity hook must be used inside an ActivityProvider"
      );
   }
   return context;
};
