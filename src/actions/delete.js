import { types } from "../types/types";

export const deleteAction = async (name) => {
    return { type: types.delete, payload: name };
};
