import React, { useState } from "react";

const Incrementer = () => {
    const [count, setCount] = useState(0);
    const increment = () => setCount(prevCount => prevCount + 1);
    const decrement = () => setCount(prevCount => prevCount - 1);
    const reset = () => setCount(0);

    return (
        <div>
            <h3>Incrementer Component:</h3>
            <button onClick={decrement}>-</button>
            <span>{count}</span>
            <button onClick={increment}>+</button>
            <button onClick={reset}>reset</button>
        </div>
    );
}

export default Incrementer;