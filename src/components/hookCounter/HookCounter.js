import React from 'react'
import {useCounter} from "../../hooks/useCounter";

export const HookCounter = ()=>{

    return (
        <>
           <p>{count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </>
    )
}
