import React, { useContext } from "react";
import { MyContext } from "../App";
import { deleteAction } from "../actions/delete";

export const Lista = () => {
    const { state, dispatch } = useContext(MyContext);
    const { tareas } = state;

    const handleDelete = (item) => {
        deleteAction(item).then(dispatch);
    };
    console.log("renderiza Lista");
    return (
        <div className="col-6">
            {tareas.map((item) => {
                return (
                    <>
                        <h3>{item}</h3>
                        <button
                            onClick={() => handleDelete(item)}
                            className="btn btn-primary"
                        >
                            borrar
                        </button>
                    </>
                );
            })}
        </div>
    );
};
