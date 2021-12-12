import React from 'react'
import {Counter} from "../Counter";
import {render} from '@testing-library/react'
import "@testing-library/jest-dom"

test("Header renders correctly", ()=>{
    const {getByTestId} = render(<Counter />); // Render Component.
    const headerEl = getByTestId("header"); //Get Particular element to be tested.
    expect(headerEl.textContent).toBe("My Counter") //What we expert to see inside of it.
})

test("counter initially starts with 0", ()=>{
     const {getByTestId} = render(<Counter />)
     const counterEl = getByTestId("counter")
    expect(counterEl.textContent).toBe("0")
})

test("Initial for  value in counter input to be 1", ()=>{
    const {getByTestId} = render(<Counter />)
    const inputEl = getByTestId("input")
    expect(inputEl.value).toBe(1)
})

test("Add button renders with +", ()=>{
    const {getByTestId} = render(<Counter />)
    const addButton = getByTestId("add-btn")
    expect(addButton.textContent).toBe("+")
})

test("subtract button renders with -", ()=>{
    const {getByTestId} = render(<Counter />)
    const minusButton = getByTestId("minus-btn")
    expect(minusButton.textContent).toBe("-")
})
