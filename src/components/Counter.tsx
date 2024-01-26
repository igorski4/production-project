import { useState } from "react";
import s from "./Counter.module.scss";

export const Counter = () => {
    const [counter, setCounter] = useState<number>(0);

    const handleClick = () => {
        setCounter(counter + 1);
    };

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={handleClick} className={s.button}>
                Increment
            </button>
        </div>
    );
};
