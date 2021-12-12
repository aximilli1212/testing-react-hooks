import React , {useState} from 'react'

export const Counter = ()=>{

    const [counterValue, setCounter] = useState(0)
    const [inputValue, setInputValue] = useState(1)

    return (
        <div>
            <h1 data-testid="header">My Counter</h1>
            <h1 data-testid="counter">{counterValue}</h1>
            <button data-testid="minus-btn">-</button>
            <input data-testid="input" value={inputValue}  />
            <button data-testid="add-btn">+</button>
        </div>
    )
}

export default Counter;
