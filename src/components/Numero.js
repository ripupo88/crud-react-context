import React, { useContext } from "react";
import { MyContext } from "../App";

export const Numero = () => {
    const { state } = useContext(MyContext);
    const { tareas } = state;
    const miNumero = tareas[0] ? tareas[0] : "nada";

    return <NumeroContext miNumero={miNumero} />;
};
export const NumeroContext = React.memo(({ miNumero }) => {
    console.log("Numero se imprime");

    return <h3>Primer Tarea: {miNumero} </h3>;
});
