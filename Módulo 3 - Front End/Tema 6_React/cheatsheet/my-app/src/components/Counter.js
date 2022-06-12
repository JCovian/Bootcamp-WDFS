import {useState} from 'react'

export default function Counter() {
    //const state = useState(0); // El 0 es el valor inicial

    //const count = state[0];
    //const setCount = state[1];

    const [count, SetCount] = useState(0);

    const handleClick = function (evento) {
        SetCount(count + 1);
    };

    return (
        <div>
            <p>Has hecho click {count} veces</p>
            <button onClick={handleClick}>Hazme click</button>
            <button onClick={() => count > 0 && SetCount(count - 1)}>Bajar</button>
            <button onClick={() => SetCount(0)}>Reset</button>
        </div>
    )
}
