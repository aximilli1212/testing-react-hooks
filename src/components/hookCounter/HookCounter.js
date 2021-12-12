import React from 'react'

export const HookCounter = ()=>{
    const [count, setCount] = React.useState(0);

    const increment = ()=>{
        setCount(count + 1)
    }

    const decrement = ()=>{
        setCount(count - 1)
    }

    return (
        <>
           <p>{count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </>
    )
}
