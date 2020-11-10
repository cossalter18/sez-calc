import React from "react";
import '../Styles/Buttons.css'

// assign the operator class if the button is NaN or clear or decimal point 
const isOperator = val => {
    return !isNaN(val) || val === "C" || val === ".";
}

const Buttons = props =>  (
    <div className = {`button ${isOperator(props.children) ? null : "operator"}`}
    onClick={() => props.handleClick(props.children)}>
        {props.children}
    </div>
)

export default Buttons;