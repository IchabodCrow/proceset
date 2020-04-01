import React, {Component} from "react";
import button from './button.module.css';
import classNames from 'classnames';

const Button = ({children, onClick, className}) => {

    const classes = classNames(
        'btn',
        className,
    );

    return (
        <button
            className={classes, button.button}
            onClick={onClick}
        >{children}</button>
    )
};

export default Button;