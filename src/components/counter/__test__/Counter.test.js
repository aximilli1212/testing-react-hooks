import React from 'react'
import {Counter} from "../Counter";
import {render} from '@testing-library/react'
import "@testing-library/jest-dom"

test("Header renders correctly", ()=>{
    const component = render(<Counter />); // Render Component
    const headerEl = component.getByTestId("header"); //Get Particular element to be tested
})
