import { types } from "../types/types";

export const Reducer = (state, action) => {
    switch (action.type) {
        case types.add:
            let newState = { ...state };
            newState.tareas = [...state.tareas, action.payload];
            return newState;

        case types.delete:
            let deleteState = { ...state };
            deleteState.tareas = state.tareas.filter(
                (item) => item !== action.payload
            );
            return deleteState;

        default:
            return state;
    }
};
