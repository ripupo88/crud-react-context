import React, { useContext } from "react";
import { useForm } from "../Hooks/useForm";
import { addAction } from "../actions/add";
import { MyContext } from "../App";

export const Entrada = () => {
    const { dispatch } = useContext(MyContext);
    return <Entrada1 dispatch={dispatch} />;
};

export const Entrada1 = React.memo(({ dispatch }) => {
    const [value, setValue] = useForm({
        name: "",
    });
    const { name } = value;

    const handleChange = (e) => {
        e.preventDefault();
        setValue(e);
    };

    const handleClick = (e) => {
        e.preventDefault();
        addAction(name).then(dispatch);
    };

    console.log("renderiza entrada");
    return (
        <div className="col-6 mt-3 ">
            <form onSubmit={handleClick}>
                <input
                    name="name"
                    type="text"
                    onChange={handleChange}
                    value={name}
                />
                <button type="submit">Save</button>
            </form>
        </div>
    );
});
