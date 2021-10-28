import React from 'react'
import {useCounter} from "../../hooks/useCounter";

export const HookCounter = ()=>{
        const {count, increment, decrement}  = useCounter();
    return (
        <>
           <p>{count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </>
    )
}
