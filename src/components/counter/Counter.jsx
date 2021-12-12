import React , {useState} from 'react'

export const Counter = ()=>{

    const [counterValue, setCounterValue] = useState(0)
    const [inputValue, setInputValue] = useState(1)

    const addToCounter = ()=>{
        setCounterValue(counterValue + inputValue)
    }

    const minusFromCounter = ()=>{
        setCounterValue(counterValue - inputValue)
    }

    return (
        <div>
            <h1 data-testid="header">My Counter</h1>
            <h1 data-testid="counter">{counterValue}</h1>
            <button data-testid="minus-btn" onClick={addToCounter}>-</button>
            <input
                data-testid="input"
                onChange={(e)=>setInputValue(e.target.value)}
                defaultValue={inputValue}
            />
            <button data-testid="add-btn" onClick={addToCounter}>+</button>
        </div>
    )
}

export default Counter;
