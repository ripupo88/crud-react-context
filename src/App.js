import React, { useReducer, createContext } from "react";
import { Reducer } from "./Reducer/Reducer";
import { store } from "./store/store";
import "./App.css";
import { MainPage } from "./components/mainPage";

export const MyContext = createContext();

const Intemed = () => {
    const [state, dispatch] = useReducer(Reducer, store);
    console.log("render APP");

    return (
        <MyContext.Provider value={{ state, dispatch }}>
            <MainPage />
        </MyContext.Provider>
    );
};

function App() {
    console.log("render anterior");
    return <Intemed />;
}

export default App;
