import React from 'react'
import './button-styles.css'

export const Button = ({label}) =>{
    return <div data-testid="button" className="button-style"> {label}</div>
}
