import React from "react";
import { Lista } from "./Lista";
import { Entrada } from "./Entrada";
import { Numero } from "./Numero";

export const MainPage = () => {
    console.log("render Main");
    return (
        <div className="container">
            <div className="row">
                <Entrada />
                <Lista />
            </div>
            <hr />
            <div className="Row">
                <Numero />
            </div>
        </div>
    );
};
