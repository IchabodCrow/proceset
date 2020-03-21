import React from "react";
import input from './Input.module.css';


const Input = (props) => {



    return (
        <input type={props.type} placeholder={props.placeholderText} className={input.input}></input>
    )
}
;


export default Input;