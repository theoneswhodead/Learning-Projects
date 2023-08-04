import { WorkoutsContext } from "../context/workoutContext";
import { useContext } from "react";


export const useWorkoutsContext = () => {
    const context = useContext(WorkoutsContext)

    if (!context) {
        throw Error('useWorkotContext must be used inside an WorkoutsContextProvidor')
    }

    return context
}