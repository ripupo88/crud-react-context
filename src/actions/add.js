import { types } from "../types/types";

export const addAction = async (name) => {
    await timeout(3000);
    return { type: types.add, payload: name };
};

function timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
